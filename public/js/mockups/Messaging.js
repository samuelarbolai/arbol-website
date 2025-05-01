// Messaging mockup component
const Messaging = ({ lucideReact }) => {
  const { CheckCheck, Shield, Calendar, Clock, MapPin, User, MessageCircle } = lucideReact;
  
  return (
    <div className="flex justify-center flex-wrap gap-6 p-4 bg-gray-100">
      {/* WhatsApp Mockup */}
      <div className="w-80 h-[500px] bg-[#F7F8FA] rounded-3xl overflow-hidden shadow-xl border-8 border-black relative">
        {/* Status Bar */}
        <div className="bg-black text-white px-5 py-2 flex justify-between items-center text-xs">
          <div>9:41</div>
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl"></div>
        </div>
        
        {/* WhatsApp Header */}
        <div className="bg-[#128C7E] text-white px-4 py-3 flex items-center">
          <div className="flex-1">
            <div className="text-sm font-bold">WhatsApp</div>
          </div>
          <div className="flex items-center gap-3">
            <MessageCircle size={18} />
          </div>
        </div>
        
        {/* Chat Header */}
        <div className="bg-[#128C7E] text-white px-4 py-2 flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
            <User size={18} className="text-gray-500" />
          </div>
          <div>
            <div className="font-medium">Carlos García</div>
            <div className="text-xs opacity-80">En línea</div>
          </div>
        </div>
        
        {/* Chat Messages */}
        <div className="bg-[#E4DDD6] px-3 py-4 h-[calc(100%-11rem)] overflow-y-auto">
          {/* Date Header */}
          <div className="flex justify-center mb-4">
            <div className="bg-[#ECE5DD] text-[#54636B] text-xs py-1 px-3 rounded-lg">
              HOY
            </div>
          </div>
          
          {/* Arbol AI Message */}
          <div className="flex mb-4">
            <div className="max-w-[80%] bg-white rounded-lg p-2 shadow-sm">
              <div className="text-sm mb-1">
                Hola Carlos, soy el asistente virtual de [Nombre del Agente]. 🏠
              </div>
              <div className="text-sm mb-2">
                Confirmo tu cita para este miércoles a las 3:00 PM.
              </div>
              
              <div className="bg-gray-100 rounded-md p-2">
                <div className="text-xs font-medium mb-2">DETALLES DE LA CITA:</div>
                <div className="flex items-start mb-1.5">
                  <Calendar size={12} className="mr-1.5 mt-0.5 text-gray-500" />
                  <div className="text-xs">Miércoles, 12 Mayo</div>
                </div>
                <div className="flex items-start mb-1.5">
                  <Clock size={12} className="mr-1.5 mt-0.5 text-gray-500" />
                  <div className="text-xs">3:00 PM - 3:45 PM</div>
                </div>
                <div className="flex items-start">
                  <MapPin size={12} className="mr-1.5 mt-0.5 text-gray-500" />
                  <div className="text-xs">Oficina Central</div>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 text-right mt-1">10:42 AM</div>
            </div>
          </div>
          
          {/* Customer Reply */}
          <div className="flex justify-end mb-4">
            <div className="max-w-[80%] bg-[#DCF8C6] rounded-lg p-2 shadow-sm">
              <div className="text-sm">
                Perfecto, gracias por la confirmación.
              </div>
              <div className="flex justify-end items-center mt-1">
                <div className="text-xs text-gray-500 mr-1">10:45 AM</div>
                <CheckCheck size={14} className="text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* SMS Mockup */}
      <div className="w-80 h-[500px] bg-white rounded-3xl overflow-hidden shadow-xl border-8 border-black relative">
        {/* Status Bar */}
        <div className="bg-black text-white px-5 py-2 flex justify-between items-center text-xs">
          <div>9:41</div>
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl"></div>
        </div>
        
        {/* SMS Header */}
        <div className="bg-gray-100 px-4 py-3 flex items-center border-b border-gray-200">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
            <User size={18} />
          </div>
          <div>
            <div className="font-medium">Marta Rodríguez</div>
            <div className="text-xs text-gray-500">SMS • Campaña 8x8</div>
          </div>
        </div>
        
        {/* SMS Messages */}
        <div className="px-3 py-4 h-[calc(100%-7.5rem)] overflow-y-auto">
          {/* Date Header */}
          <div className="flex justify-center mb-4">
            <div className="bg-gray-200 text-gray-600 text-xs py-1 px-3 rounded-full">
              9:15 AM
            </div>
          </div>
          
          {/* Arbol AI Message */}
          <div className="bg-blue-100 rounded-xl p-3 mb-4 ml-8">
            <div className="text-sm mb-2">
              Hola Marta, soy el asistente virtual. Hay 3 propiedades nuevas que coinciden con tus criterios en la zona que estás buscando.
            </div>
            <div className="text-xs text-gray-500 flex items-center justify-end mt-1">
              <Shield size={10} className="text-green-600 mr-1" />
              <span>Enviado por Arbol AI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};