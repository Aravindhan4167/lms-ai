export const AI_CONFIG = {
    avatar: {
        type: '3d-model', // 'video' | '3d-model'
        provider: 'ready-player-me',
        defaultModelUrl: 'https://models.readyplayer.me/69736146f96c5c343079bf28.glb', // detailed human avatar
        animation: 'talking',
    },
    voice: {
        enabled: true,
        provider: 'browser-tts', // Free browser implementation
        lang: 'en-US',
        pitch: 1,
        rate: 1
    }
};

export const getAvatarModel = () => {
    return AI_CONFIG.avatar.defaultModelUrl;
};
