/* Gerenciador de áudio do mini-jogo 2D */
import { ASSETS } from '../config/assets.js';

/**
 * Configuração de volume para cada áudio.
 * Ajuste os valores entre 0.0 (mudo) e 1.0 (volume máximo) conforme necessário.
 */
const VOLUME_CONFIG = {
  click: 0.5,   // Volume do clique do mouse
  walk: 0.3,    // Volume dos passos do jogador
  flag: 0.6,    // Volume do som da bandeira
  music: 0.4    // Volume da música de fundo
};

/**
 * Configuração adicional por áudio
 */
const AUDIO_CONFIG = {
  click: { loop: false, playbackRate: 1.0 },
  walk: { loop: false, playbackRate: 1.0 },
  flag: { loop: false, playbackRate: 1.0 },
  music: { loop: true, playbackRate: 1.0 }
};

// Cache de instâncias de áudio
const audioInstances = {};
let musicInstance = null;
let isGameActive = false;
let walkSoundTimer = null;

/**
 * Cria ou obtém uma instância de áudio
 * @param {string} key - Chave do áudio (click, walk, flag, music)
 * @returns {HTMLAudioElement|null}
 */
function getAudio(key) {
  if (audioInstances[key]) {
    return audioInstances[key];
  }

  const src = ASSETS.audio[key];
  if (!src) {
    console.warn(`[Audio] Asset não encontrado para: ${key}`);
    return null;
  }

  const audio = new Audio(src);
  audio.volume = VOLUME_CONFIG[key] ?? 1.0;
  audio.loop = AUDIO_CONFIG[key]?.loop ?? false;
  audio.playbackRate = AUDIO_CONFIG[key]?.playbackRate ?? 1.0;
  audio.preload = 'auto';

  // Tratamento de erros
  audio.addEventListener('error', (e) => {
    console.error(`[Audio] Erro ao carregar ${key}:`, e);
  });

  audioInstances[key] = audio;
  return audio;
}

/**
 * Toca um efeito sonoro (sfx) - pode sobrepor múltiplas reproduções
 * @param {string} key - Chave do áudio (click, walk, flag)
 * @param {Object} options - Opções opcionais: { volume, playbackRate }
 */
export function playSfx(key, options = {}) {
  const audio = getAudio(key);
  if (!audio) return;

  // Clona o áudio para permitir sobreposição (exceto música)
  const clone = audio.cloneNode();
  clone.volume = options.volume ?? VOLUME_CONFIG[key] ?? 1.0;
  clone.playbackRate = options.playbackRate ?? AUDIO_CONFIG[key]?.playbackRate ?? 1.0;

  // Toca e limpa após terminar
  clone.play().catch(err => {
    // Erro comum: autoplay policy - ignorar silenciosamente
    if (err.name !== 'NotAllowedError') {
      console.warn(`[Audio] Falha ao tocar ${key}:`, err.message);
    }
  });

  clone.addEventListener('ended', () => {
    clone.src = ''; // Libera recurso
    clone.remove();
  });
}

/**
 * Inicia a música de fundo (loop)
 * Deve ser chamada quando o jogador entra no jogo
 */
export function startMusic() {
  if (musicInstance) return; // Já tocando

  musicInstance = getAudio('music');
  if (!musicInstance) return;

  musicInstance.volume = VOLUME_CONFIG.music ?? 1.0;
  musicInstance.currentTime = 0;
  musicInstance.loop = true;

  const playPromise = musicInstance.play();
  if (playPromise !== undefined) {
    playPromise.catch(err => {
      if (err.name !== 'NotAllowedError') {
        console.warn('[Audio] Falha ao iniciar música:', err.message);
      }
      // Política de autoplay do navegador pode bloquear - a música tentará tocar na próxima interação
    });
  }

  isGameActive = true;
}

/**
 * Para a música de fundo
 * Deve ser chamada quando o jogador sai do jogo
 */
export function stopMusic() {
  if (!musicInstance) return;

  musicInstance.pause();
  musicInstance.currentTime = 0;
  musicInstance = null;
  isGameActive = false;
}

/**
 * Toca o som de passos sincronizado com o movimento do jogador
 * Controla o intervalo entre passos para não sobrecarregar
 * @param {boolean} isMoving - Se o jogador está se movendo
 * @param {number} dt - Delta time do frame
 */
export function updateWalkSound(isMoving, dt) {
  if (isMoving) {
    // Acumula tempo para tocar passos em intervalos regulares
    if (!walkSoundTimer) walkSoundTimer = 0;
    walkSoundTimer += dt;

    // Intervalo entre passos (em segundos) - AJUSTE AQUI para mudar frequência dos passos
    const WALK_INTERVAL = 0.35;

    if (walkSoundTimer >= WALK_INTERVAL) {
      playSfx('walk', { volume: VOLUME_CONFIG.walk * 0.7 }); // Volume ligeiramente menor para passos
      walkSoundTimer = 0;
    }
  } else {
    walkSoundTimer = null;
  }
}

/**
 * Verifica se o jogo está ativo (para controle externo)
 * @returns {boolean}
 */
export function isMusicPlaying() {
  return isGameActive && musicInstance && !musicInstance.paused;
}

/**
 * Define volume de um áudio específico em tempo real
 * @param {string} key - Chave do áudio
 * @param {number} volume - Volume entre 0.0 e 1.0
 */
export function setVolume(key, volume) {
  const clampedVolume = Math.max(0, Math.min(1, volume));
  VOLUME_CONFIG[key] = clampedVolume;

  if (key === 'music' && musicInstance) {
    musicInstance.volume = clampedVolume;
  }
  // Para SFX, o volume é aplicado na próxima reprodução via playSfx
}

/**
 * Obtém volume atual de um áudio
 * @param {string} key - Chave do áudio
 * @returns {number}
 */
export function getVolume(key) {
  return VOLUME_CONFIG[key] ?? 1.0;
}

/**
 * Pré-carrega todos os áudios (opcional, para evitar delay na primeira reprodução)
 */
export function preloadAll() {
  Object.keys(ASSETS.audio).forEach(key => getAudio(key));
}

/**
 * Limpa todos os recursos de áudio
 */
export function cleanup() {
  stopMusic();
  Object.values(audioInstances).forEach(audio => {
    audio.pause();
    audio.src = '';
  });
  Object.keys(audioInstances).forEach(key => delete audioInstances[key]);
  walkSoundTimer = null;
}