/**
 * Inline Pricing Component
 * This script contains both the component HTML and the functionality
 * It doesn't rely on fetching external HTML files
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inline pricing component initialized');
    
    // Find all containers that should load the pricing component
    const containers = document.querySelectorAll('[data-load-pricing]');
    console.log('Found pricing containers:', containers.length);
    
    if (containers.length === 0) return;
    
    // The HTML template for the pricing component
    const pricingComponentHTML = `
        <div class="pricing-component">
            <div class="currency-toggle">
                <button class="currency-btn active" data-currency="usd">USD</button>
                <button class="currency-btn" data-currency="cop">COP</button>
            </div>
            
            <div class="pricing-cards">
                <div class="pricing-card" data-plan="standard">
                    <div class="card-header">
                        <h3 data-translate="standard-plan">Standard Plan</h3>
                        <p data-translate="standard-description">All essential features without voice cloning</p>
                    </div>
                    <div class="card-price" data-price-type="standard">
                        <div class="price-usd">
                            <span class="currency">$</span>
                            <span class="amount">400</span>
                            <span class="period" data-translate="month">/month</span>
                        </div>
                        <div class="price-cop hidden">
                            <span class="currency">$</span>
                            <span class="amount">1.640.000</span>
                            <span class="period" data-translate="month">/mes</span>
                        </div>
                    </div>
                    <div class="card-features">
                        <ul>
                            <li>24/7 WhatsApp conversation management</li>
                            <li>Automated customer calls</li>
                            <li>Calendar integration with Cal.com</li>
                            <li>Document generation capabilities</li>
                            <li>Basic analytics dashboard</li>
                            <li>Email and chat support</li>
                        </ul>
                    </div>
                    <div class="additional-fees">
                        <h4 data-translate="success-based-fee">Success-Based Fee</h4>
                        <p class="fee-usd"><strong>$50 <span data-translate="per-lead">per successfully converted lead</span></strong></p>
                        <p class="fee-cop hidden"><strong>$205.000 COP <span data-translate="per-lead">por cada lead convertido exitosamente</span></strong></p>
                        <p data-translate="win-business">You only pay when our AI helps you win business</p>
                    </div>
                    <div class="card-tiers">
                        <h4 data-translate="growth-scaling">Growth-Based Scaling</h4>
                        <p data-translate="as-business-grows">As your business grows and usage increases:</p>
                        <ul class="tiers-list tiers-usd">
                            <li><strong><span data-translate="tier-1">Tier 1</span>:</strong> $400<span data-translate="month">/month</span> <span data-translate="base">(base)</span>
                                <ul class="tier-details">
                                    <li>Voice calls: 1,000 minutes</li>
                                    <li>WhatsApp/chat: 5,000 messages</li>
                                    <li>Email responses: 500 emails</li>
                                </ul>
                            </li>
                            <li><strong><span data-translate="tier-2">Tier 2</span>:</strong> $800<span data-translate="month">/month</span>
                                <ul class="tier-details">
                                    <li>Voice calls: 2,500 minutes</li>
                                    <li>WhatsApp/chat: 12,500 messages</li>
                                    <li>Email responses: 1,250 emails</li>
                                </ul>
                            </li>
                            <li><strong><span data-translate="tier-3">Tier 3</span>:</strong> $1,200<span data-translate="month">/month</span>
                                <ul class="tier-details">
                                    <li>Voice calls: 5,000 minutes</li>
                                    <li>WhatsApp/chat: 25,000 messages</li>
                                    <li>Email responses: 2,500 emails</li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="tiers-list tiers-cop hidden">
                            <li><strong><span data-translate="tier-1">Nivel 1</span>:</strong> $1.640.000 COP<span data-translate="month">/mes</span> <span data-translate="base">(base)</span>
                                <ul class="tier-details">
                                    <li>Llamadas de voz: 1,000 minutos</li>
                                    <li>WhatsApp/chat: 5,000 mensajes</li>
                                    <li>Respuestas de correo: 500 emails</li>
                                </ul>
                            </li>
                            <li><strong><span data-translate="tier-2">Nivel 2</span>:</strong> $3.280.000 COP<span data-translate="month">/mes</span>
                                <ul class="tier-details">
                                    <li>Llamadas de voz: 2,500 minutos</li>
                                    <li>WhatsApp/chat: 12,500 mensajes</li>
                                    <li>Respuestas de correo: 1,250 emails</li>
                                </ul>
                            </li>
                            <li><strong><span data-translate="tier-3">Nivel 3</span>:</strong> $4.920.000 COP<span data-translate="month">/mes</span>
                                <ul class="tier-details">
                                    <li>Llamadas de voz: 5,000 minutos</li>
                                    <li>WhatsApp/chat: 25,000 mensajes</li>
                                    <li>Respuestas de correo: 2,500 emails</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a href="https://cal.com/samuel-arbol-ai" class="cta-btn" data-translate="schedule-demo">Schedule a Demo</a>
                </div>
                
                <div class="pricing-card featured" data-plan="premium">
                    <div class="featured-badge" data-translate="most-popular">Most Popular</div>
                    <div class="card-header">
                        <h3 data-translate="premium-plan">Premium Plan</h3>
                        <p data-translate="premium-description">All features including voice cloning</p>
                    </div>
                    <div class="card-price" data-price-type="premium">
                        <div class="price-usd">
                            <span class="currency">$</span>
                            <span class="amount">520</span>
                            <span class="period" data-translate="month">/month</span>
                        </div>
                        <div class="price-cop hidden">
                            <span class="currency">$</span>
                            <span class="amount">2.132.000</span>
                            <span class="period" data-translate="month">/mes</span>
                        </div>
                    </div>
                    <div class="card-features">
                        <ul>
                            <li><strong data-translate="voice-cloning">Voice cloning technology</strong></li>
                            <li>24/7 WhatsApp conversation management</li>
                            <li>Automated customer calls</li>
                            <li>Calendar integration with Cal.com</li>
                            <li>Document generation capabilities</li>
                            <li>Enhanced analytics dashboard</li>
                            <li>Priority support</li>
                        </ul>
                    </div>
                    <div class="additional-fees">
                        <h4 data-translate="success-based-fee">Success-Based Fee</h4>
                        <p class="fee-usd"><strong>$50 <span data-translate="per-lead">per successfully converted lead</span></strong></p>
                        <p class="fee-cop hidden"><strong>$205.000 COP <span data-translate="per-lead">por cada lead convertido exitosamente</span></strong></p>
                        <p data-translate="win-business">You only pay when our AI helps you win business</p>
                    </div>
                    <div class="card-tiers">
                        <h4 data-translate="growth-scaling">Growth-Based Scaling</h4>
                        <p data-translate="as-business-grows">As your business grows and usage increases:</p>
                        <ul class="tiers-list tiers-usd">
                            <li><strong><span data-translate="tier-1">Tier 1</span>:</strong> $520<span data-translate="month">/month</span> <span data-translate="base">(base)</span>
                                <ul class="tier-details">
                                    <li>Voice calls: 1,000 minutes</li>
                                    <li>WhatsApp/chat: 5,000 messages</li>
                                    <li>Email responses: 500 emails</li>
                                </ul>
                            </li>
                            <li><strong><span data-translate="tier-2">Tier 2</span>:</strong> $1,040<span data-translate="month">/month</span>
                                <ul class="tier-details">
                                    <li>Voice calls: 2,500 minutes</li>
                                    <li>WhatsApp/chat: 12,500 messages</li>
                                    <li>Email responses: 1,250 emails</li>
                                </ul>
                            </li>
                            <li><strong><span data-translate="tier-3">Tier 3</span>:</strong> $1,560<span data-translate="month">/month</span>
                                <ul class="tier-details">
                                    <li>Voice calls: 5,000 minutes</li>
                                    <li>WhatsApp/chat: 25,000 messages</li>
                                    <li>Email responses: 2,500 emails</li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="tiers-list tiers-cop hidden">
                            <li><strong><span data-translate="tier-1">Nivel 1</span>:</strong> $2.132.000 COP<span data-translate="month">/mes</span> <span data-translate="base">(base)</span>
                                <ul class="tier-details">
                                    <li>Llamadas de voz: 1,000 minutos</li>
                                    <li>WhatsApp/chat: 5,000 mensajes</li>
                                    <li>Respuestas de correo: 500 emails</li>
                                </ul>
                            </li>
                            <li><strong><span data-translate="tier-2">Nivel 2</span>:</strong> $4.264.000 COP<span data-translate="month">/mes</span>
                                <ul class="tier-details">
                                    <li>Llamadas de voz: 2,500 minutos</li>
                                    <li>WhatsApp/chat: 12,500 mensajes</li>
                                    <li>Respuestas de correo: 1,250 emails</li>
                                </ul>
                            </li>
                            <li><strong><span data-translate="tier-3">Nivel 3</span>:</strong> $6.396.000 COP<span data-translate="month">/mes</span>
                                <ul class="tier-details">
                                    <li>Llamadas de voz: 5,000 minutos</li>
                                    <li>WhatsApp/chat: 25,000 mensajes</li>
                                    <li>Respuestas de correo: 2,500 emails</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a href="https://cal.com/samuel-arbol-ai" class="cta-btn" data-translate="schedule-demo">Schedule a Demo</a>
                </div>
            </div>
            
            <div class="pricing-note">
                <p data-translate="pricing-note">Pricing effective as of April 2025. Terms and conditions apply.</p>
                <p data-translate="enterprise-pricing">Additional tiers available for enterprise-level usage - <a href="https://cal.com/samuel-arbol-ai">Contact us</a> for custom pricing.</p>
            </div>
        </div>
    `;
    
    // Insert the pricing component into each container
    containers.forEach(container => {
        container.innerHTML = pricingComponentHTML;
        console.log('Inserted inline pricing component into container');
        
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
    
    // Add event listeners to currency toggle buttons
    document.querySelectorAll('.currency-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Find the parent component
            const component = this.closest('.pricing-component');
            
            // Remove active class from all buttons in this component
            component.querySelectorAll('.currency-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Switch currency display
            const currency = this.getAttribute('data-currency');
            switchCurrency(component, currency);
            
            // Save preference
            localStorage.setItem('preferredCurrency', currency);
        });
    });
    
    // Initialize default currency for each component
    document.querySelectorAll('.pricing-component').forEach(initializeDefaultCurrency);
    
    // Function to initialize default currency
    function initializeDefaultCurrency(component) {
        // Check if currency preference is stored
        const savedCurrency = localStorage.getItem('preferredCurrency');
        
        // If not stored, check browser language for default
        if (!savedCurrency) {
            const userLang = navigator.language || navigator.userLanguage;
            const defaultCurrency = userLang.startsWith('es-CO') ? 'cop' : 'usd';
            
            // Select the appropriate button
            const currencyBtn = component.querySelector(`.currency-btn[data-currency="${defaultCurrency}"]`);
            if (currencyBtn) {
                // Deactivate all buttons
                component.querySelectorAll('.currency-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Activate the correct one
                currencyBtn.classList.add('active');
                
                // Switch to the default currency
                switchCurrency(component, defaultCurrency);
            }
        } else {
            // Use saved preference
            const currencyBtn = component.querySelector(`.currency-btn[data-currency="${savedCurrency}"]`);
            if (currencyBtn) {
                // Deactivate all buttons
                component.querySelectorAll('.currency-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Activate the correct one
                currencyBtn.classList.add('active');
                
                // Switch to the saved currency
                switchCurrency(component, savedCurrency);
            }
        }
    }
    
    // Function to switch currency display
    function switchCurrency(component, currency) {
        // Get all price elements in the component
        const priceElements = component.querySelectorAll('.card-price');
        
        // Switch display for each price element
        priceElements.forEach(priceEl => {
            const usdPrice = priceEl.querySelector('.price-usd');
            const copPrice = priceEl.querySelector('.price-cop');
            
            if (currency === 'usd') {
                if (usdPrice) usdPrice.classList.remove('hidden');
                if (copPrice) copPrice.classList.add('hidden');
            } else {
                if (usdPrice) usdPrice.classList.add('hidden');
                if (copPrice) copPrice.classList.remove('hidden');
            }
        });
        
        // Switch additional fees
        const feeElements = component.querySelectorAll('.additional-fees');
        feeElements.forEach(feeEl => {
            const usdFee = feeEl.querySelector('.fee-usd');
            const copFee = feeEl.querySelector('.fee-cop');
            
            if (currency === 'usd') {
                if (usdFee) usdFee.classList.remove('hidden');
                if (copFee) copFee.classList.add('hidden');
            } else {
                if (usdFee) usdFee.classList.add('hidden');
                if (copFee) copFee.classList.remove('hidden');
            }
        });
        
        // Switch tiers list
        const tierLists = component.querySelectorAll('.card-tiers');
        tierLists.forEach(tierEl => {
            const usdTiers = tierEl.querySelector('.tiers-usd');
            const copTiers = tierEl.querySelector('.tiers-cop');
            
            if (currency === 'usd') {
                if (usdTiers) usdTiers.classList.remove('hidden');
                if (copTiers) copTiers.classList.add('hidden');
            } else {
                if (usdTiers) usdTiers.classList.add('hidden');
                if (copTiers) copTiers.classList.remove('hidden');
            }
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
});