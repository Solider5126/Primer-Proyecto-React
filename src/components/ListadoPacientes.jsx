import { useEffect } from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes,setPaciente,eliminarPaciente }) => {
  

  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {/* Si hay pacientes  */}
      {/* Con el .length vemos cuanto mide el arreglo */}
      {pacientes.length > 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes Citas</span>
          </p>

          {pacientes.map((paciente) => {
            return <Paciente 
            key={paciente.id} 
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            >
            </Paciente>;
            
          })}
        </>
        // Si no hay pacientes
      ) : ( 
        <>
         <h2 className="font-black text-3xl text-center">
            No hay Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {" "}
            <span className="text-indigo-600 font-bold">y aparaceran en este lugar</span>
          </p>
        
        
        </>
        )}

    </div>
  );
};

export default ListadoPacientes;
