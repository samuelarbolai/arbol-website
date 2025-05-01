// public/js/mockups/Dashboard.js
// Dashboard mockup component using vanilla JS (no JSX)
function Dashboard(props) {
  const lucideReact = props.lucideReact || {};
  const { Bell, Calendar, PieChart, Phone, Users, CheckSquare, Shield, MessageSquare } = lucideReact;
  
  // Create a container element
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
        <div class="text-sm flex items-center gap-1 bg-gray-100 py-1 px-3 rounded-full">
          <span class="font-medium">Base de datos 100% protegida</span>
        </div>
        <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
          JR
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar -->
      <nav class="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-6 gap-8">
        <div class="text-black">
          <!-- PieChart icon would go here -->
        </div>
        <div class="text-black">
          <!-- Phone icon would go here -->
        </div>
        <div class="text-black">
          <!-- Users icon would go here -->
        </div>
        <div class="text-black">
          <!-- Calendar icon would go here -->
        </div>
        <div class="text-black">
          <!-- CheckSquare icon would go here -->
        </div>
      </nav>

      <!-- Main Dashboard -->
      <div class="flex-1 overflow-auto p-6">
        <div class="mb-6">
          <h1 class="text-2xl font-semibold mb-1">Seguimiento Automático</h1>
          <p class="text-gray-500">Campaña 8x8 y 36 Touches activas</p>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

        <!-- Recent Activity -->
        <div class="mb-8">
          <h2 class="text-lg font-medium mb-4">Actividad Reciente</h2>
          <div class="border border-gray-200 rounded-lg divide-y divide-gray-200">
            <!-- Activity items -->
            <div class="p-4">
              <div class="font-medium">Campaña activa en progreso</div>
              <div class="text-sm text-gray-500 mt-1">
                8 leads en seguimiento activo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  return container;
}

// Make it globally available
window.Dashboard = Dashboard;