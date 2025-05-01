// Dashboard mockup component
const Dashboard = ({ lucideReact }) => {
  const { Bell, Calendar, PieChart, Phone, Users, CheckSquare, Shield, MessageSquare } = lucideReact;
  
  return (
    <div className="bg-white flex flex-col h-screen text-black">
      {/* Header */}
      <header className="border-b border-gray-200 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-semibold text-xl tracking-tight">Arbol AI</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm flex items-center gap-1 bg-gray-100 py-1 px-3 rounded-full">
            <Shield size={14} />
            <span className="font-medium">Base de datos 100% protegida</span>
          </div>
          <Bell size={20} />
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
            JR
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <nav className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-6 gap-8">
          <div className="text-black">
            <PieChart size={24} />
          </div>
          <div className="text-black">
            <Phone size={24} />
          </div>
          <div className="text-black">
            <Users size={24} />
          </div>
          <div className="text-black">
            <Calendar size={24} />
          </div>
          <div className="text-black">
            <CheckSquare size={24} />
          </div>
        </nav>

        {/* Main Dashboard */}
        <div className="flex-1 overflow-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-1">Seguimiento Automático</h1>
            <p className="text-gray-500">Campaña 8x8 y 36 Touches activas</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-gray-500 text-sm mb-1">Leads Activos</div>
              <div className="text-2xl font-semibold">127</div>
              <div className="text-green-600 text-sm mt-2">↑ 12% esta semana</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-gray-500 text-sm mb-1">Citas Programadas</div>
              <div className="text-2xl font-semibold">32</div>
              <div className="text-green-600 text-sm mt-2">↑ 43% vs mes pasado</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-gray-500 text-sm mb-1">Llamadas Automáticas</div>
              <div className="text-2xl font-semibold">216</div>
              <div className="text-gray-600 text-sm mt-2">Últimos 7 días</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-gray-500 text-sm mb-1">Tasa de Conversión</div>
              <div className="text-2xl font-semibold">18.3%</div>
              <div className="text-green-600 text-sm mt-2">↑ 5.2% vs manual</div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Actividad Reciente</h2>
            <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
              {/* Call item */}
              <div className="p-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                  <Phone size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <span className="font-medium">Llamada automática a Carlos García</span>
                      <span className="text-gray-500"> - Plan 8x8, Semana 2</span>
                    </div>
                    <div className="text-sm text-gray-500">10:42 AM</div>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Se programó cita para el 12 de mayo, 3:00 PM
                  </div>
                </div>
              </div>

              {/* Message item */}
              <div className="p-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                  <MessageSquare size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <span className="font-medium">Confirmación por WhatsApp a Marta Rodríguez</span>
                      <span className="text-gray-500"> - Cita confirmada</span>
                    </div>
                    <div className="text-sm text-gray-500">9:15 AM</div>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Enviada confirmación y ubicación de la oficina
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Campaigns */}
          <div>
            <h2 className="text-lg font-medium mb-4">Campañas Activas</h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 text-left">
                  <tr>
                    <th className="py-3 px-4 font-medium">Campaña</th>
                    <th className="py-3 px-4 font-medium">Leads</th>
                    <th className="py-3 px-4 font-medium">Progreso</th>
                    <th className="py-3 px-4 font-medium">Conversión</th>
                    <th className="py-3 px-4 font-medium">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4">
                      <div className="font-medium">Plan 8x8</div>
                      <div className="text-sm text-gray-500">Leads nuevos</div>
                    </td>
                    <td className="py-3 px-4">42</td>
                    <td className="py-3 px-4">
                      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full" style={{width: '75%'}}></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">75% completado</div>
                    </td>
                    <td className="py-3 px-4 text-green-600">23.8%</td>
                    <td className="py-3 px-4">
                      <span className="text-xs font-medium bg-green-100 text-green-800 py-1 px-2 rounded-full">
                        Activa
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};