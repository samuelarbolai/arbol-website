/**
 * Video configuration file
 * Contains video IDs and related information for embedding
 */
const videoConfig = {
    // Video IDs for the agents
    agentVideos: {
        voiceAgent: {
            videoId: "Wf4z4kWubWM",
            title: "Voice Agent",
            description: "Nuestro asistente de voz atiende más de 150 llamadas al día, brindando respuestas precisas y personalizadas."
        },
        chatAgent: {
            videoId: "Cy13DAbh1hU",
            title: "Chat Agent",
            description: "Automatice sus conversaciones de WhatsApp y redes sociales con nuestro asistente de chat inteligente."
        },
        emailAgent: {
            videoId: "ahJ0yHLxAf0",
            title: "Email Agent",
            description: "Optimice su comunicación por correo electrónico con respuestas automáticas precisas y profesionales."
        }
    },
    
    // Function to get YouTube embed URL
    getYouTubeEmbedUrl: function(videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
    }
};

// Make the config available globally
window.videoConfig = videoConfig;