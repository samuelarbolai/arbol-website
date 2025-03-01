/**
 * Site configuration file
 * Contains environment-specific settings
 */
const config = {
    // Production domain
    productionDomain: 'arbolai.co',
    
    // Development domains (add any staging domains here too)
    developmentDomains: ['localhost', '127.0.0.1'],
    
    // Social media links
    socialLinks: {
        linkedin: 'https://www.linkedin.com/company/arbol-ai',
        twitter: 'https://twitter.com/ArbolAI',
        instagram: 'https://www.instagram.com/arbol.ai'
    },
    
    // Contact information
    contact: {
        phone: '+57 316 824 8411',
        email: 'samuel@arbolai.co',
        calendly: 'https://cal.com/samuel-arbol-ai'
    },
    
    // Get the base URL based on current environment
    getBaseUrl: function() {
        const hostname = window.location.hostname;
        
        // Check if we're in production
        if (hostname === this.productionDomain || hostname === 'www.' + this.productionDomain) {
            return 'https://' + this.productionDomain;
        } 
        // Check if we're in development
        else if (this.developmentDomains.includes(hostname) || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
            return window.location.origin; // Use the current origin (includes port if any)
        } 
        // For any other domain (staging, etc.)
        else {
            return 'https://' + this.productionDomain;
        }
    }
};

// Make the config available globally
window.siteConfig = config;