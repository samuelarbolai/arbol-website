// Privacy Dashboard mockup component
const PrivacyDashboard = ({ lucideReact }) => {
  const { Shield, Lock, Database, CheckCircle, UserCheck, FileText, Users } = lucideReact;
  
  return (
    <div className="bg-white flex flex-col h-screen text-black">
      {/* Header */}
      <header className="border-b border-gray-200 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-semibold text-xl tracking-tight">Arbol AI</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm flex items-center gap-1 bg-green-100 py-1 px-3 rounded-full text-green-800">
            <Shield size={14} />
            <span className="font-medium">100% Protección Verificada</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
            JR
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6 bg-gray-50">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-1">Centro de Privacidad</h1>
          <p className="text-gray-600">Sistema de protección de tu base de datos de clientes</p>
        </div>

        {/* Privacy Status Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-5 mb-8 shadow-sm">
          <div className="flex items-center mb-5">
            <Shield size={20} className="text-green-600 mr-2" />
            <h2 className="text-lg font-medium">Estado de Protección</h2>
          </div>

          <div className="flex justify-between mb-6">
            <div className="flex-1 flex flex-col items-center border-r border-gray-200 px-4">
              <div className="text-green-600 mb-2">
                <CheckCircle size={28} />
              </div>
              <div className="text-center">
                <div className="font-medium">Cifrado Activo</div>
                <div className="text-sm text-gray-500">AES-256</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center border-r border-gray-200 px-4">
              <div className="text-green-600 mb-2">
                <CheckCircle size={28} />
              </div>
              <div className="text-center">
                <div className="font-medium">Acceso Restringido</div>
                <div className="text-sm text-gray-500">Solo tu cuenta</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center border-r border-gray-200 px-4">
              <div className="text-green-600 mb-2">
                <CheckCircle size={28} />
              </div>
              <div className="text-center">
                <div className="font-medium">Verificación 2FA</div>
                <div className="text-sm text-gray-500">Habilitada</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center px-4">
              <div className="text-green-600 mb-2">
                <CheckCircle size={28} />
              </div>
              <div className="text-center">
                <div className="font-medium">Auditoría Activa</div>
                <div className="text-sm text-gray-500">Tiempo real</div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex items-start">
            <div className="text-green-600 mt-0.5 mr-3">
              <CheckCircle size={18} />
            </div>
            <div>
              <div className="font-medium text-green-800">Tu base de datos está 100% protegida</div>
              <div className="text-sm text-green-700 mt-1">
                Arbol AI nunca comparte, vende o transfiere tu información de clientes. Tu base de datos permanece exclusivamente bajo tu control con cifrado de extremo a extremo.
              </div>
            </div>
          </div>
        </div>

        {/* Protection Details */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
            <div className="flex items-center mb-4">
              <Database size={18} className="text-black mr-2" />
              <h3 className="font-medium">Protección de Base de Datos</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-0.5 mr-3 text-green-600">
                  <CheckCircle size={16} />
                </div>
                <div className="text-sm">
                  <div className="font-medium">Aislamiento total de datos</div>
                  <div className="text-gray-500">Tu base de datos se mantiene en un entorno aislado.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
            <div className="flex items-center mb-4">
              <Lock size={18} className="text-black mr-2" />
              <h3 className="font-medium">Control de Acceso</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-0.5 mr-3 text-green-600">
                  <CheckCircle size={16} />
                </div>
                <div className="text-sm">
                  <div className="font-medium">Autenticación multifactor</div>
                  <div className="text-gray-500">Verificación adicional para cada sesión.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-4 px-6 bg-white">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">Última verificación de seguridad: Hoy, 10:42 AM</div>
          <div className="flex items-center text-sm">
            <Shield size={14} className="text-green-600 mr-1" />
            <span className="text-green-800 font-medium">Sistema de Protección Activo</span>
          </div>
        </div>
      </footer>
    </div>
  );
};