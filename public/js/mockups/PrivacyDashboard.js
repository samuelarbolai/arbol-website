// public/js/mockups/PrivacyDashboard.js
// Privacy Dashboard mockup component (vanilla JS version)
function PrivacyDashboard(props) {
  const lucideReact = props.lucideReact || {};
  
  // Create container element
  const container = document.createElement('div');
  container.className = 'bg-white flex flex-col h-screen text-black';
  
  // Add content
  container.innerHTML = `
    <!-- Header -->
    <header class="border-b border-gray-200 py-4 px-6 flex justify-between items-center">
      <div class="flex items-center">
        <div class="font-semibold text-xl tracking-tight">Arbol AI</div>
      </div>
      <div class="flex items-center gap-4">
        <div class="text-sm flex items-center gap-1 bg-green-100 py-1 px-3 rounded-full text-green-800">
          <span class="font-medium">100% Protección Verificada</span>
        </div>
        <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
          JR
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="flex-1 overflow-auto p-6 bg-gray-50">
      <div class="mb-6">
        <h1 class="text-2xl font-semibold mb-1">Centro de Privacidad</h1>
        <p class="text-gray-600">Sistema de protección de tu base de datos de clientes</p>
      </div>

      <!-- Privacy Status Card -->
      <div class="bg-white rounded-lg border border-gray-200 p-5 mb-8 shadow-sm">
        <div class="flex items-center mb-5">
          <h2 class="text-lg font-medium">Estado de Protección</h2>
        </div>

        <div class="flex justify-between mb-6">
          <div class="flex-1 flex flex-col items-center border-r border-gray-200 px-4">
            <div class="text-green-600 mb-2">
              <!-- CheckCircle icon would go here -->
              ✓
            </div>
            <div class="text-center">
              <div class="font-medium">Cifrado Activo</div>
              <div class="text-sm text-gray-500">AES-256</div>
            </div>
          </div>
          <div class="flex-1 flex flex-col items-center border-r border-gray-200 px-4">
            <div class="text-green-600 mb-2">
              <!-- CheckCircle icon would go here -->
              ✓
            </div>
            <div class="text-center">
              <div class="font-medium">Acceso Restringido</div>
              <div class="text-sm text-gray-500">Solo tu cuenta</div>
            </div>
          </div>
          <div class="flex-1 flex flex-col items-center border-r border-gray-200 px-4">
            <div class="text-green-600 mb-2">
              <!-- CheckCircle icon would go here -->
              ✓
            </div>
            <div class="text-center">
              <div class="font-medium">Verificación 2FA</div>
              <div class="text-sm text-gray-500">Habilitada</div>
            </div>
          </div>
          <div class="flex-1 flex flex-col items-center px-4">
            <div class="text-green-600 mb-2">
              <!-- CheckCircle icon would go here -->
              ✓
            </div>
            <div class="text-center">
              <div class="font-medium">Auditoría Activa</div>
              <div class="text-sm text-gray-500">Tiempo real</div>
            </div>
          </div>
        </div>

        <div class="bg-green-50 border border-green-100 rounded-lg p-4 flex items-start">
          <div class="text-green-600 mt-0.5 mr-3">
            <!-- CheckCircle icon would go here -->
            ✓
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

    <!-- Footer -->
    <footer class="border-t border-gray-200 py-4 px-6 bg-white">
      <div class="flex justify-between items-center">
        <div class="text-sm text-gray-500">Última verificación de seguridad: Hoy, 10:42 AM</div>
        <div class="flex items-center text-sm">
          <span class="text-green-800 font-medium">Sistema de Protección Activo</span>
        </div>
      </div>
    </footer>
  `;
  
  return container;
}

// Make it globally available
window.PrivacyDashboard = PrivacyDashboard;