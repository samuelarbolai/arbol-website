// public/js/mockups/CallInterface.js
// Call Interface mockup component (vanilla JS version)
function CallInterface(props) {
  const lucideReact = props.lucideReact || {};
  
  // Create container element
  const container = document.createElement('div');
  container.className = 'bg-white flex flex-col h-screen text-black';
  
  // Add content
  container.innerHTML = `
    <!-- Header with privacy indicator -->
    <header class="py-3 px-6 border-b border-gray-200 flex justify-between items-center bg-gray-50">
      <div class="flex items-center">
        <div class="font-semibold tracking-tight">Arbol AI</div>
      </div>
      <div class="flex items-center gap-2 text-sm bg-white py-1 px-3 rounded-full border border-gray-200">
        <span class="font-medium">Base de datos 100% privada</span>
      </div>
    </header>

    <!-- Call in progress -->
    <div class="flex-1 flex flex-col items-center justify-center p-6 bg-gray-50">
      <div class="bg-white rounded-xl shadow-lg w-full max-w-md overflow-hidden">
        <!-- Call header -->
        <div class="bg-black text-white p-4 flex justify-between items-center">
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center">
              <!-- User icon would go here -->
            </div>
            <div>
              <div class="font-medium">Carlos García</div>
              <div class="text-sm text-gray-300 flex items-center gap-1">
                <span>Llamada en curso</span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-1">
            <span class="text-sm">02:14</span>
          </div>
        </div>

        <!-- Call content -->
        <div class="p-5">
          <div class="mb-5">
            <div class="text-sm text-gray-500 mb-1">Plan Activo</div>
            <div class="font-medium">8x8 - Semana 2, Llamada 3</div>
          </div>

          <div class="mb-5">
            <div class="text-sm text-gray-500 mb-1">Script Actual</div>
            <div class="bg-gray-50 p-3 rounded-lg text-sm border border-gray-200">
              "Hola Carlos, soy el asistente virtual de [Nombre del Agente]. Quería verificar si has tenido tiempo de revisar las propiedades que te envié la semana pasada y si alguna te interesó particularmente."
            </div>
          </div>

          <div class="mb-5">
            <div class="text-sm text-gray-500 mb-1">Respuesta del Cliente</div>
            <div class="bg-gray-50 p-3 rounded-lg text-sm border border-gray-200 text-gray-700">
              "Sí, me gustó especialmente la propiedad en Zona Norte. Me gustaría ver opciones similares y tal vez programar una visita."
            </div>
          </div>

          <div class="mb-5">
            <div class="text-sm text-gray-500 mb-1">Acción Recomendada</div>
            <div class="bg-green-50 p-3 rounded-lg text-sm border border-green-100 font-medium text-green-800">
              Programar cita en la oficina
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  return container;
}

// Make it globally available
window.CallInterface = CallInterface;