/**
 * Pricing Component Loader
 * Dynamically loads the pricing component into any container with the data-load-pricing attribute
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Pricing component loader initialized');
    
    // Function to load the pricing component
    function loadPricingComponent() {
        // Find all containers that should load the pricing component
        const containers = document.querySelectorAll('[data-load-pricing]');
        console.log('Found pricing containers:', containers.length);
        
        if (containers.length === 0) return;
        
        // Log the path we're trying to fetch
        const componentPath = '/components/pricing-component.html';
        console.log('Attempting to fetch pricing component from:', componentPath);
        
        // Load the component HTML
        fetch(componentPath)
            .then(response => {
                console.log('Fetch response status:', response.status);
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.status);
                }
                return response.text();
            })
            .then(html => {
                console.log('Successfully fetched pricing component HTML');
                // Insert the component HTML into each container
                containers.forEach(container => {
                    container.innerHTML = html;
                    console.log('Inserted pricing component into container');
                    
                    // Check if there are any options specified in data-pricing-options
                    const options = container.getAttribute('data-pricing-options');
                    if (options) {
                        try {
                            const parsedOptions = JSON.parse(options);
                            console.log('Applying options to component:', parsedOptions);
                            applyOptions(container, parsedOptions);
                        } catch (e) {
                            console.error('Error parsing pricing options:', e);
                        }
                    }
                });
            })
            .catch(error => {
                console.error('Error loading pricing component:', error);
                // Fallback content if component fails to load
                containers.forEach(container => {
                    container.innerHTML = `
                        <div class="pricing-error" style="text-align: center; padding: 2rem; background: #f8f8f8; border-radius: 8px; margin: 1rem;">
                            <h3 style="color: #333; margin-bottom: 1rem;">Unable to load pricing information</h3>
                            <p>Please <a href="/pricing">visit our pricing page</a> or <a href="https://cal.com/samuel-arbol-ai">contact us</a> for current pricing details.</p>
                        </div>
                    `;
                    console.log('Added fallback content');
                });
            });
    }
    
    // Function to apply options to the pricing component
    function applyOptions(container, options) {
        console.log('Applying component options:', options);
        
        // Example: Hide specific tiers
        if (options.hideTiers) {
            console.log('Hiding tiers as specified in options');
            const tierElements = container.querySelectorAll('.card-tiers');
            tierElements.forEach(tierEl => {
                tierEl.style.display = 'none';
            });
        }
        
        // Example: Hide specific plans
        if (options.hidePlans && Array.isArray(options.hidePlans)) {
            console.log('Hiding specific plans:', options.hidePlans);
            options.hidePlans.forEach(planType => {
                const planCards = container.querySelectorAll(`.pricing-card[data-plan="${planType}"]`);
                planCards.forEach(card => {
                    card.style.display = 'none';
                });
            });
        }
        
        // Example: Set default currency
        if (options.defaultCurrency) {
            console.log('Setting default currency to:', options.defaultCurrency);
            const currencyButtons = container.querySelectorAll('.currency-btn');
            currencyButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-currency') === options.defaultCurrency) {
                    btn.classList.add('active');
                    // Trigger a click to update the display
                    btn.click();
                }
            });
        }
        
        // Example: Custom CTA text
        if (options.ctaText) {
            console.log('Setting custom CTA text to:', options.ctaText);
            const ctaButtons = container.querySelectorAll('.cta-btn');
            ctaButtons.forEach(btn => {
                btn.textContent = options.ctaText;
            });
        }
        
        // Example: Custom CTA URL
        if (options.ctaUrl) {
            console.log('Setting custom CTA URL to:', options.ctaUrl);
            const ctaButtons = container.querySelectorAll('.cta-btn');
            ctaButtons.forEach(btn => {
                btn.href = options.ctaUrl;
            });
        }
    }
    
    // Load the pricing component
    loadPricingComponent();
    
    // For debugging - add a manual reload button
    const containers = document.querySelectorAll('[data-load-pricing]');
    if (containers.length > 0) {
        const debugButton = document.createElement('button');
        debugButton.style.display = 'none'; // Hide in production
        debugButton.textContent = 'Reload Pricing Component';
        debugButton.onclick = loadPricingComponent;
        document.body.appendChild(debugButton);
    }
});