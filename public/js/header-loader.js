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
                
                // Apply styles based on the current page
                if (currentPath === '/' || currentPath === '/index.html' || currentPath === '/brochure' || currentPath === '/brochure.html') {
                    // Transparent header style for homepage and brochure
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
                } else if (currentPath === '/pricing' || currentPath === '/pricing.html') {
                    // Custom style for pricing page - transparent background
                    header.style.backgroundColor = 'transparent';
                    header.style.position = 'absolute';
                    header.style.width = '100%';
                    header.style.top = '0';
                    header.style.left = '0';
                    
                    // Set button styles for pricing page
                    const buttons = header.querySelectorAll('.btn-outline');
                    buttons.forEach(button => {
                        button.style.borderColor = 'var(--pure-black)';
                        button.style.color = 'var(--pure-black)';
                    });
                    
                    // Highlight the pricing button
                    const pricingButton = Array.from(buttons).find(btn => btn.getAttribute('href') === '/pricing');
                    if (pricingButton) {
                        pricingButton.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                        pricingButton.style.fontWeight = '600';
                    }
                } else {
                    // Default solid header style for any other pages
                    header.style.backgroundColor = 'var(--pure-black)';
                    header.style.position = 'fixed';
                    header.style.width = '100%';
                    header.style.top = '0';
                    header.style.left = '0';
                    header.style.zIndex = '1000';
                    
                    // Change button styles for solid header
                    const buttons = header.querySelectorAll('.btn-outline');
                    buttons.forEach(button => {
                        button.style.borderColor = 'var(--white)';
                        button.style.color = 'var(--white)';
                    });
                }
                
                // Apply translations based on browser language
                applyTranslations();
                
                // Highlight the current page in the navigation
                highlightCurrentPage();
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
                } else if (link.href.includes('cal.com') && window.siteConfig.contact.calendly) {
                    // Update calendly link
                    link.href = window.siteConfig.contact.calendly;
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
            if (key && window.translations && window.translations[key]) {
                element.textContent = isSpanish ? 
                    window.translations[key].es : 
                    window.translations[key].en;
            }
        });
    }
    
    // Function to highlight the current page in the navigation
    function highlightCurrentPage() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('header a');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPath || 
                (currentPath === '/' && href === '/index.html') ||
                (currentPath === '/index.html' && href === '/')) {
                link.classList.add('active');
                // Add any additional styling for active link if needed
            }
        });
    }
});