// public/js/mockups/loader.js
// Mockup loader script
document.addEventListener('DOMContentLoaded', function() {
  console.log('Mockup loader initialized');
  
  // Feature card click handlers
  const featureCards = document.querySelectorAll('.feature-card');
  console.log('Found feature cards:', featureCards.length);
  
  featureCards.forEach(card => {
    card.addEventListener('click', function() {
      const feature = this.getAttribute('data-feature');
      console.log('Card clicked:', feature);
      openModal(feature);
    });
  });
  
  // Modal close handlers
  const closeButtons = document.querySelectorAll('.close-modal, .modal-button');
  console.log('Found close buttons:', closeButtons.length);
  
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      console.log('Close button clicked');
      const modal = this.closest('.modal-overlay');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });
  
  // Close modal if clicked outside content
  const modals = document.querySelectorAll('.modal-overlay');
  console.log('Found modals:', modals.length);
  
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.style.display = 'none';
      }
    });
  });
  
  // Function to open modal and render appropriate mockup
  function openModal(feature) {
    const modalId = feature + 'Modal';
    const modal = document.getElementById(modalId);
    
    if (modal) {
      console.log('Modal found, displaying:', modalId);
      modal.style.display = 'flex';
      
      // Render the appropriate mockup if not already rendered
      const mockupContainer = document.getElementById(feature + 'Mockup');
      
      if (mockupContainer && mockupContainer.children.length === 0) {
        try {
          console.log('Rendering mockup in container');
          renderMockup(feature, mockupContainer);
        } catch (error) {
          console.error('Error rendering mockup:', error);
          mockupContainer.innerHTML = `<div class="p-4 bg-red-100 text-red-700 rounded">
            Error loading mockup: ${error.message}
          </div>`;
        }
      }
    } else {
      console.error('Modal not found with ID:', modalId);
    }
  }
  
  // Function to render the mockup component using simple DOM methods
  function renderMockup(feature, container) {
    // Component map
    const components = {
      'dashboard': window.Dashboard,
      'call-interface': window.CallInterface,
      'privacy-dashboard': window.PrivacyDashboard,
      'messaging': window.Messaging
    };
    
    const ComponentFn = components[feature];
    
    if (typeof ComponentFn === 'function') {
      console.log(`Rendering ${feature} component`);
      try {
        // Create the component with necessary props
        const component = ComponentFn({ 
          lucideReact: window.lucideReact || {} 
        });
        
        // If it's a DOM node, append it
        if (component instanceof Node) {
          container.appendChild(component);
        } else {
          // If it's HTML string or other content
          container.innerHTML = `<div class="p-4 text-center">
            <p>Component preview for ${feature}</p>
            <p class="mt-2 text-sm text-gray-500">This is a simplified version of the mockup</p>
          </div>`;
        }
      } catch (error) {
        console.error(`Error creating ${feature} component:`, error);
        container.innerHTML = `<div class="p-4 bg-red-100 text-red-700 rounded">
          Error creating component: ${error.message}
        </div>`;
      }
    } else {
      console.warn(`Component function not found for ${feature}`);
      container.innerHTML = `<div class="p-4 text-center">
        <p>Preview not available for ${feature}</p>
        <p class="mt-2 text-sm text-gray-500">Component is still in development</p>
      </div>`;
    }
  }
  
  // Debug info
  console.log('Available components:', {
    Dashboard: typeof window.Dashboard,
    CallInterface: typeof window.CallInterface,
    PrivacyDashboard: typeof window.PrivacyDashboard,
    Messaging: typeof window.Messaging
  });
});