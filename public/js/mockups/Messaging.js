// public/js/mockups/Messaging.js
// Messaging mockup component (vanilla JS version)
function Messaging(props) {
  const lucideReact = props.lucideReact || {};
  
  // Create container element
  const container = document.createElement('div');
  container.className = 'flex justify-center flex-wrap gap-6 p-4 bg-gray-100';
  
  // Add content
  container.innerHTML = `
    <!-- WhatsApp Mockup -->
    <div class="w-80 h-[500px] bg-[#F7F8FA] rounded-3xl overflow-hidden shadow-xl border-8 border-black relative">
      <!-- Status Bar -->
      <div class="bg-black text-white px-5 py-2 flex justify-between items-center text-xs">
        <div>9:41</div>
        <div class="absolute left-1/2 top-0 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl"></div>
      </div>
      
      <!-- WhatsApp Header -->
      <div class="bg-[#128C7E] text-white px-4 py-3 flex items-center">
        <div class="flex-1">
          <div class="text-sm font-bold">WhatsApp</div>
        </div>
        <div class="flex items-center gap-3">
          <!-- MessageCircle icon would go here -->
        </div>
      </div>
      
      <!-- Chat Header -->
      <div class="bg-[#128C7E] text-white px-4 py-2 flex items-center">
        <div class="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
          <!-- User icon would go here -->
        </div>
        <div>
          <div class="font-medium">Carlos García</div>
          <div class="text-xs opacity-80">En línea</div>
        </div>
      </div>
      
      <!-- Chat Messages -->
      <div class="bg-[#E4DDD6] px-3 py-4 h-[calc(100%-11rem)] overflow-y-auto">
        <!-- Date Header -->
        <div class="flex justify-center mb-4">
          <div class="bg-[#ECE5DD] text-[#54636B] text-xs py-1 px-3 rounded-lg">
            HOY
          </div>
        </div>
        
        <!-- Arbol AI Message -->
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
                <div class="text-xs">Miércoles, 12 Mayo</div>
              </div>
              <div class="flex items-start mb-1.5">
                <div class="text-xs">3:00 PM - 3:45 PM</div>
              </div>
              <div class="flex items-start">
                <div class="text-xs">Oficina Central</div>
              </div>
            </div>
            
            <div class="text-xs text-gray-500 text-right mt-1">10:42 AM</div>
          </div>
        </div>
        
        <!-- Customer Reply -->
        <div class="flex justify-end mb-4">
          <div class="max-w-[80%] bg-[#DCF8C6] rounded-lg p-2 shadow-sm">
            <div class="text-sm">
              Perfecto, gracias por la confirmación.
            </div>
            <div class="flex justify-end items-center mt-1">
              <div class="text-xs text-gray-500 mr-1">10:45 AM</div>
              <!-- CheckCheck icon would go here -->
              ✓✓
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  return container;
}

// Make it globally available
window.Messaging = Messaging;