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
    // Get the modal ID
    const modalId = feature + 'Modal';
    const modal = document.getElementById(modalId);
    
    if (modal) {
      console.log('Modal found, displaying:', modalId);
      modal.style.display = 'flex';
      
      // Render the appropriate mockup if not already rendered
      const mockupContainer = document.getElementById(feature + 'Mockup');
      
      if (mockupContainer && mockupContainer.children.length === 0) {
        console.log('Rendering mockup in container');
        try {
          renderStaticMockup(feature, mockupContainer);
        } catch (error) {
          console.error('Error rendering mockup:', error);
          mockupContainer.innerHTML = `<div class="p-4 text-red-500">Error loading mockup: ${error.message}</div>`;
        }
      }
    } else {
      console.error('Modal not found with ID:', modalId);
    }
  }
  
  // Function to log available components for debugging
  console.log('Available components:', {
    CallInterface: typeof CallInterface,
    Dashboard: typeof Dashboard,
    Messaging: typeof Messaging,
    PrivacyDashboard: typeof PrivacyDashboard
  });
  
  // Instead of using React to render components, generate static HTML
  function renderStaticMockup(feature, container) {
    try {
      // Instead of React rendering, use static HTML templates for each mockup
      switch(feature) {
        case 'dashboard':
          console.log('Rendering dashboard component');
          container.innerHTML = `
            <div class="bg-white shadow rounded-lg p-6">
              <div class="border-b border-gray-200 pb-4 mb-4">
                <h3 class="text-xl font-semibold">Panel de Control Avanzado</h3>
                <p class="text-gray-600">Visualiza y gestiona todos tus leads desde un solo lugar</p>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div class="bg-gray-50 rounded-lg p-4">
                  <div class="text-gray-500 text-sm mb-1">Leads Activos</div>
                  <div class="text-2xl font-semibold">127</div>
                  <div class="text-green-600 text-sm mt-2">↑ 12% esta semana</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-4">
                  <div class="text-gray-500 text-sm mb-1">Citas Programadas</div>
                  <div class="text-2xl font-semibold">32</div>
                  <div class="text-green-600 text-sm mt-2">↑ 43% vs mes pasado</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-4">
                  <div class="text-gray-500 text-sm mb-1">Llamadas Automáticas</div>
                  <div class="text-2xl font-semibold">216</div>
                  <div class="text-gray-600 text-sm mt-2">Últimos 7 días</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-4">
                  <div class="text-gray-500 text-sm mb-1">Tasa de Conversión</div>
                  <div class="text-2xl font-semibold">18.3%</div>
                  <div class="text-green-600 text-sm mt-2">↑ 5.2% vs manual</div>
                </div>
              </div>
              
              <div class="mb-6">
                <h4 class="font-medium text-lg mb-3">Actividad Reciente</h4>
                <div class="border border-gray-200 rounded-lg divide-y divide-gray-200">
                  <div class="p-4 flex items-center">
                    <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <div class="flex justify-between">
                        <div>
                          <span class="font-medium">Llamada automática a Carlos García</span>
                          <span class="text-gray-500"> - Plan 8x8, Semana 2</span>
                        </div>
                        <div class="text-sm text-gray-500">10:42 AM</div>
                      </div>
                      <div class="text-sm text-gray-500 mt-1">
                        Se programó cita para el 12 de mayo, 3:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="text-center text-gray-500 text-sm mt-8">
                Próximamente disponible - Versión demo
              </div>
            </div>
          `;
          break;
          
        case 'call-interface':
          console.log('Rendering call-interface component');
          container.innerHTML = `
            <div class="bg-white rounded-xl shadow-lg overflow-hidden max-w-md mx-auto">
              <div class="bg-black text-white p-4 flex justify-between items-center">
                <div class="flex items-center gap-3">
                  <div class="h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <div class="font-medium">Carlos García</div>
                    <div class="text-sm text-gray-300 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                      <span>Llamada en curso</span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span class="text-sm">02:14</span>
                </div>
              </div>
              
              <div class="p-5">
                <div class="mb-4">
                  <div class="text-sm text-gray-500 mb-1">Plan Activo</div>
                  <div class="font-medium">8x8 - Semana 2, Llamada 3</div>
                </div>
                
                <div class="mb-4">
                  <div class="text-sm text-gray-500 mb-1">Script Actual</div>
                  <div class="bg-gray-50 p-3 rounded-lg text-sm border border-gray-200">
                    "Hola Carlos, soy el asistente virtual de [Nombre del Agente]. Quería verificar si has tenido tiempo de revisar las propiedades que te envié la semana pasada y si alguna te interesó particularmente."
                  </div>
                </div>
                
                <div class="mb-4">
                  <div class="text-sm text-gray-500 mb-1">Respuesta del Cliente</div>
                  <div class="bg-gray-50 p-3 rounded-lg text-sm border border-gray-200 text-gray-700">
                    "Sí, me gustó especialmente la propiedad en Zona Norte. Me gustaría ver opciones similares y tal vez programar una visita."
                  </div>
                </div>
                
                <div class="mb-4">
                  <div class="text-sm text-gray-500 mb-1">Acción Recomendada</div>
                  <div class="bg-green-50 p-3 rounded-lg text-sm border border-green-100 font-medium text-green-800">
                    Programar cita en la oficina
                  </div>
                </div>
                
                <div class="flex gap-2 mt-6">
                  <button class="flex-1 py-2 px-4 bg-gray-100 rounded-lg text-gray-700 font-medium flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>Programar</span>
                  </button>
                  <button class="flex-1 py-2 px-4 bg-gray-100 rounded-lg text-gray-700 font-medium flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
              
              <div class="bg-gray-50 p-4 border-t border-gray-200">
                <div class="flex justify-between items-center">
                  <div class="text-sm text-gray-500">
                    Próxima acción: Confirmar por WhatsApp
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="text-sm font-medium">IA Activa</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center text-gray-500 text-sm mt-8">
              Próximamente disponible - Versión demo
            </div>
          `;
          break;
          
        case 'privacy-dashboard':
          console.log('Rendering privacy-dashboard component');
          container.innerHTML = `
            <div class="bg-white shadow rounded-lg overflow-hidden">
              <div class="border-b border-gray-200 py-4 px-6 flex justify-between items-center">
                <div class="flex items-center">
                  <div class="font-semibold text-xl tracking-tight">Arbol AI</div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="text-sm flex items-center gap-1 bg-green-100 py-1 px-3 rounded-full text-green-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <span class="font-medium">100% Protección Verificada</span>
                  </div>
                </div>
              </div>
            
              <div class="p-6">
                <div class="mb-6">
                  <h1 class="text-2xl font-semibold mb-1">Centro de Privacidad</h1>
                  <p class="text-gray-600">Sistema de protección de tu base de datos de clientes</p>
                </div>
            
                <div class="bg-white rounded-lg border border-gray-200 p-5 mb-8 shadow-sm">
                  <div class="flex items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-green-600 mr-2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <h2 class="text-lg font-medium">Estado de Protección</h2>
                  </div>
            
                  <div class="flex justify-between mb-6">
                    <div class="flex-1 flex flex-col items-center border-r border-gray-200 px-4">
                      <div class="text-green-600 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <div class="text-center">
                        <div class="font-medium">Cifrado Activo</div>
                        <div class="text-sm text-gray-500">AES-256</div>
                      </div>
                    </div>
                    <div class="flex-1 flex flex-col items-center border-r border-gray-200 px-4">
                      <div class="text-green-600 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <div class="text-center">
                        <div class="font-medium">Acceso Restringido</div>
                        <div class="text-sm text-gray-500">Solo tu cuenta</div>
                      </div>
                    </div>
                    <div class="flex-1 flex flex-col items-center px-4">
                      <div class="text-green-600 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <div class="text-center">
                        <div class="font-medium">Verificación 2FA</div>
                        <div class="text-sm text-gray-500">Habilitada</div>
                      </div>
                    </div>
                  </div>
            
                  <div class="bg-green-50 border border-green-100 rounded-lg p-4 flex items-start">
                    <div class="text-green-600 mt-0.5 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div>
                      <div class="font-medium text-green-800">Tu base de datos está 100% protegida</div>
                      <div class="text-sm text-green-700 mt-1">
                        Arbol AI nunca comparte, vende o transfiere tu información de clientes. Tu base de datos permanece exclusivamente bajo tu control con cifrado de extremo a extremo.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
              <footer class="border-t border-gray-200 py-4 px-6 bg-white">
                <div class="flex justify-between items-center">
                  <div class="text-sm text-gray-500">Última verificación de seguridad: Hoy, 10:42 AM</div>
                  <div class="flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600 mr-1">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <span class="text-green-800 font-medium">Sistema de Protección Activo</span>
                  </div>
                </div>
              </footer>
            </div>
            <div class="text-center text-gray-500 text-sm mt-8">
              Próximamente disponible - Versión demo
            </div>
          `;
          break;
          
        case 'messaging':
          console.log('Rendering messaging component');
          container.innerHTML = `
            <div class="flex justify-center flex-wrap gap-6 p-4 bg-gray-100">
              <div class="w-80 h-[500px] bg-[#F7F8FA] rounded-3xl overflow-hidden shadow-xl border-8 border-black relative">
                <div class="bg-black text-white px-5 py-2 flex justify-between items-center text-xs">
                  <div>9:41</div>
                  <div class="absolute left-1/2 top-0 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl"></div>
                </div>
                
                <div class="bg-[#128C7E] text-white px-4 py-3 flex items-center">
                  <div class="flex-1">
                    <div class="text-sm font-bold">WhatsApp</div>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </div>
                </div>
                
                <div class="bg-[#128C7E] text-white px-4 py-2 flex items-center">
                  <div class="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <div class="font-medium">Carlos García</div>
                    <div class="text-xs opacity-80">En línea</div>
                  </div>
                </div>
                
                <div class="bg-[#E4DDD6] px-3 py-4 h-[calc(100%-11rem)] overflow-y-auto">
                  <div class="flex justify-center mb-4">
                    <div class="bg-[#ECE5DD] text-[#54636B] text-xs py-1 px-3 rounded-lg">
                      HOY
                    </div>
                  </div>
                  
                  <div class="flex mb-4">
                    <div class="max-w-[80%] bg-white rounded-lg p-2 shadow-sm">
                      <div class="text-sm mb-1">
                        Hola Carlos, soy el asistente virtual de [Nombre del Agente]. 🏠
                      </div>
                      <div class="text-sm mb-2">
                        Confirmo tu cita para este miércoles a las 3:00 PM.
                      </div>
                      
                      <div class="bg-gray-100 rounded-md p-2">
                        <div class="text-xs font-medium mb-2">DETALLES DE LA CITA:</div>
                        <div class="flex items-start mb-1.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5 mt-0.5 text-gray-500">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          <div class="text-xs">Miércoles, 12 Mayo</div>
                        </div>
                        <div class="flex items-start mb-1.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5 mt-0.5 text-gray-500">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          <div class="text-xs">3:00 PM - 3:45 PM</div>
                        </div>
                        <div class="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5 mt-0.5 text-gray-500">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <div class="text-xs">Oficina Central</div>
                        </div>
                      </div>
                      
                      <div class="text-xs text-gray-500 text-right mt-1">10:42 AM</div>
                    </div>
                  </div>
                  
                  <div class="flex justify-end mb-4">
                    <div class="max-w-[80%] bg-[#DCF8C6] rounded-lg p-2 shadow-sm">
                      <div class="text-sm">
                        Perfecto, gracias por la confirmación.
                      </div>
                      <div class="flex justify-end items-center mt-1">
                        <div class="text-xs text-gray-500 mr-1">10:45 AM</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                          <polyline points="1 4 1 10 7 10"></polyline>
                          <polyline points="23 20 23 14 17 14"></polyline>
                          <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="w-80 h-[500px] bg-white rounded-3xl overflow-hidden shadow-xl border-8 border-black relative">
                <div class="bg-black text-white px-5 py-2 flex justify-between items-center text-xs">
                  <div>9:41</div>
                  <div class="absolute left-1/2 top-0 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl"></div>
                </div>
                
                <div class="bg-gray-100 px-4 py-3 flex items-center border-b border-gray-200">
                  <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <div class="font-medium">Marta Rodríguez</div>
                    <div class="text-xs text-gray-500">SMS • Campaña 8x8</div>
                  </div>
                </div>
                
                <div class="px-3 py-4 h-[calc(100%-7.5rem)] overflow-y-auto">
                  <div class="flex justify-center mb-4">
                    <div class="bg-gray-200 text-gray-600 text-xs py-1 px-3 rounded-full">
                      9:15 AM
                    </div>
                  </div>
                  
                  <div class="bg-blue-100 rounded-xl p-3 mb-4 ml-8">
                    <div class="text-sm mb-2">
                      Hola Marta, soy el asistente virtual. Hay 3 propiedades nuevas que coinciden con tus criterios en la zona que estás buscando.
                    </div>
                    <div class="text-xs text-gray-500 flex items-center justify-end mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600 mr-1">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                      <span>Enviado por Arbol AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center text-gray-500 text-sm mt-8">
              Próximamente disponible - Versión demo
            </div>
          `;
          break;
          
        default:
          container.innerHTML = `<div class="p-4 text-center">No hay vista previa disponible para esta característica.</div>`;
      }
    } catch (error) {
      console.error('Error in renderStaticMockup:', error);
      container.innerHTML = `<div class="p-4 bg-red-100 text-red-800 rounded-lg">
        Error al renderizar el componente: ${error.message}
      </div>`;
    }
  }
  
  // Add a small diagnostic script to help debug
  const script = document.createElement('script');
  script.textContent = `
    console.log('Diagnostic script loaded');
    const firstCard = document.querySelector('.feature-card');
    console.log('Found first feature card:', firstCard?.getAttribute('data-feature'));
    
    // Add an additional click handler to diagnose issues
    if (firstCard) {
      firstCard.addEventListener('click', function() {
        console.log('First card clicked directly from diagnostic script');
        const feature = this.getAttribute('data-feature');
        const modalId = feature + 'Modal';
        const modal = document.getElementById(modalId);
        if (modal) {
          console.log('Modal found, showing:', modalId);
          modal.style.display = 'flex';
        } else {
          console.error('Modal not found for feature:', feature);
        }
      });
    }
    
    // Check modal visibility status
    const allModals = document.querySelectorAll('.modal-overlay');
    console.log('Found modals:', allModals.length);
    allModals.forEach(modal => {
      console.log('Modal ID:', modal.id, 'Initial display style:', modal.style.display);
    });
  `;
  document.body.appendChild(script);
});