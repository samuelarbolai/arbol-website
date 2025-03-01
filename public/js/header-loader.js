// Function to load the header component
document.addEventListener('DOMContentLoaded', function() {
    // Create a request to fetch the header HTML
    fetch('/components/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Insert the header HTML into the headerContainer element
            const headerContainer = document.getElementById('headerContainer');
            if (headerContainer) {
                headerContainer.innerHTML = data;
                
                // Apply appropriate styles based on the current page
                const currentPath = window.location.pathname;
                const header = document.getElementById('site-header');
                
                // Set the logo link based on environment
                setLogoLink();
                
                // Update contact information from config
                updateContactInfo();
                
                // Apply transparent header to both index and brochure pages
                if (currentPath === '/' || currentPath === '/index.html' || currentPath === '/brochure' || currentPath === '/brochure.html') {
                    // Transparent header style
                    header.style.backgroundColor = 'transparent';
                    header.style.position = 'absolute';
                    header.style.width = '100%';
                    header.style.top = '0';
                    header.style.left = '0';
                    
                    // Change button styles for transparent header
                    const buttons = header.querySelectorAll('.btn-outline');
                    buttons.forEach(button => {
                        button.style.borderColor = 'var(--pure-black)';
                        button.style.color = 'var(--pure-black)';
                    });
                }
                
                // Apply translations based on browser language
                applyTranslations();
            }
        })
        .catch(error => {
            console.error('Error loading the header:', error);
            // Fallback content if header fails to load
            const headerContainer = document.getElementById('headerContainer');
            if (headerContainer) {
                headerContainer.innerHTML = `
                <header>
                    <div class="header-container">
                        <a href="/" id="logo-link">
                            <img src="images/logo.png" alt="Arbol AI Logo" class="logo">
                        </a>
                    </div>
                </header>`;
                
                // Set the logo link even in fallback
                setLogoLink();
            }
        });
    
    // Function to set the correct logo link based on environment
    function setLogoLink() {
        const logoLink = document.getElementById('logo-link');
        if (logoLink && window.siteConfig) {
            // Use the config to determine the correct base URL
            const baseUrl = window.siteConfig.getBaseUrl();
            
            // Set the logo link to the home page of the appropriate environment
            if (baseUrl === window.location.origin) {
                // If we're already on the correct origin, use a relative link
                logoLink.href = '/';
            } else {
                // Otherwise use the full URL
                logoLink.href = baseUrl;
            }
        } else if (logoLink) {
            // Fallback if config is not available
            const hostname = window.location.hostname;
            
            if (hostname === 'arbolai.co' || hostname === 'www.arbolai.co' || 
                hostname === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
                logoLink.href = '/';
            } else {
                logoLink.href = 'https://arbolai.co';
            }
        }
    }
    
    // Function to update contact information from config
    function updateContactInfo() {
        if (window.siteConfig) {
            const contactLinks = document.querySelectorAll('.contact-info a');
            contactLinks.forEach(link => {
                if (link.href.includes('wa.me') && window.siteConfig.contact.phone) {
                    // Update WhatsApp link
                    const phoneNumber = window.siteConfig.contact.phone.replace(/\D/g, ''); // Remove non-digits
                    link.href = `https://wa.me/${phoneNumber}`;
                    link.textContent = window.siteConfig.contact.phone;
                } else if (link.href.includes('mailto:') && window.siteConfig.contact.email) {
                    // Update email link
                    link.href = `mailto:${window.siteConfig.contact.email}`;
                    link.textContent = window.siteConfig.contact.email;
                }
            });
        }
    }
    
    // Function to apply translations based on browser language
    function applyTranslations() {
        // Get browser language
        const userLang = navigator.language || navigator.userLanguage;
        const isSpanish = userLang.startsWith('es');
        
        // Get all translatable elements
        const translatableElements = document.querySelectorAll('[data-translate]');
        
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (key && window.translations) {
                element.textContent = isSpanish ? 
                    window.translations[key].es : 
                    window.translations[key].en;
            }
        });
    }
});