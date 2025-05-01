// Mockup loader script
document.addEventListener('DOMContentLoaded', function() {
  // Feature card click handlers
  const featureCards = document.querySelectorAll('.feature-card');
  
  featureCards.forEach(card => {
    card.addEventListener('click', function() {
      const feature = this.getAttribute('data-feature');
      openModal(feature);
    });
  });
  
  // Modal close handlers
  const closeButtons = document.querySelectorAll('.close-modal, .modal-button');
  
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modal = this.closest('.modal-overlay');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });
  
  // Close modal if clicked outside content
  const modals = document.querySelectorAll('.modal-overlay');
  
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
      modal.style.display = 'flex';
      
      // Render the appropriate mockup if not already rendered
      const mockupContainer = document.getElementById(feature + 'Mockup');
      
      if (mockupContainer && mockupContainer.children.length === 0) {
        try {
          renderMockup(feature, mockupContainer);
        } catch (error) {
          console.error('Error rendering mockup:', error);
          mockupContainer.innerHTML = `<div class="p-4 text-red-500">Error loading mockup. Please try again.</div>`;
        }
      }
    }
  }
  
  // Function to render the mockup component
  function renderMockup(feature, container) {
    switch (feature) {
      case 'dashboard':
        ReactDOM.render(React.createElement(Dashboard, { lucideReact }), container);
        break;
      case 'call-interface':
        ReactDOM.render(React.createElement(CallInterface, { lucideReact }), container);
        break;
      case 'privacy-dashboard':
        ReactDOM.render(React.createElement(PrivacyDashboard, { lucideReact }), container);
        break;
      case 'messaging':
        ReactDOM.render(React.createElement(Messaging, { lucideReact }), container);
        break;
      default:
        container.innerHTML = `<div class="p-4">No mockup available for this feature yet.</div>`;
    }
  }
});