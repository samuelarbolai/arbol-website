// Call Interface mockup component
const CallInterface = ({ lucideReact }) => {
  const { Phone, X, User, Shield, Calendar, MessageSquare, Mic, Clock } = lucideReact;
  
  return (
    <div className="bg-white h-screen flex flex-col">
      {/* Header with privacy indicator */}
      <header className="py-3 px-6 border-b border-gray-200 flex justify-between items-center bg-gray-50">
        <div className="flex items-center">
          <div className="font-semibold tracking-tight">Arbol AI</div>
        </div>
        <div className="flex items-center gap-2 text-sm bg-white py-1 px-3 rounded-full border border-gray-200">
          <Shield size={14} className="text-green-600" />
          <span className="font-medium">Base de datos 100% privada</span>
        </div>
      </header>

      {/* Call in progress */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-50">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md overflow-hidden">
          {/* Call header */}
          <div className="bg-black text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center">
                <User size={20} />
              </div>
              <div>
                <div className="font-medium">Carlos García</div>
                <div className="text-sm text-gray-300 flex items-center gap-1">
                  <Mic size={14} />
                  <span>Llamada en curso</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span className="text-sm">02:14</span>
            </div>
          </div>

          {/* Call content */}
          <div className="p-5">
            <div className="mb-5">
              <div className="text-sm text-gray-500 mb-1">Plan Activo</div>
              <div className="font-medium">8x8 - Semana 2, Llamada 3</div>
            </div>

            <div className="mb-5">
              <div className="text-sm text-gray-500 mb-1">Script Actual</div>
              <div className="bg-gray-50 p-3 rounded-lg text-sm border border-gray-200">
                "Hola Carlos, soy el asistente virtual de [Nombre del Agente]. Quería verificar si has tenido tiempo de revisar las propiedades que te envié la semana pasada y si alguna te interesó particularmente."
              </div>
            </div>

            <div className="mb-5">
              <div className="text-sm text-gray-500 mb-1">Respuesta del Cliente</div>
              <div className="bg-gray-50 p-3 rounded-lg text-sm border border-gray-200 text-gray-700">
                "Sí, me gustó especialmente la propiedad en Zona Norte. Me gustaría ver opciones similares y tal vez programar una visita."
              </div>
            </div>

            <div className="mb-5">
              <div className="text-sm text-gray-500 mb-1">Acción Recomendada</div>
              <div className="bg-green-50 p-3 rounded-lg text-sm border border-green-100 font-medium text-green-800">
                Programar cita en la oficina
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 mt-6">
              <button className="flex-1 py-2 px-4 bg-gray-100 rounded-lg text-gray-700 font-medium flex items-center justify-center gap-2">
                <Calendar size={16} />
                <span>Programar</span>
              </button>
              <button className="flex-1 py-2 px-4 bg-gray-100 rounded-lg text-gray-700 font-medium flex items-center justify-center gap-2">
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </button>
              <button className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center">
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Call footer */}
          <div className="bg-gray-50 p-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Próxima acción: Confirmar por WhatsApp
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">IA Activa</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call controls */}
      <footer className="py-4 px-6 border-t border-gray-200 bg-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
              <Phone size={20} />
            </button>
            <div>
              <div className="font-medium">Llamada en curso</div>
              <div className="text-sm text-gray-500">IA manejando conversación</div>
            </div>
          </div>
          <div>
            <button className="py-2 px-4 bg-black text-white rounded-lg font-medium text-sm">
              Ver detalles
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};