import { useState,useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  //Arreglo para mpdificar pacientes
  const[pacientes,setPacientes]=useState([])
  // Genero la funcion
  const[paciente,setPaciente]=useState({})

  useEffect(() => {
    const pacientesLocal = JSON.parse(localStorage.getItem("pacientes"));
    pacientesLocal ?.length > 0 && setPacientes(pacientesLocal);
  }, []);


  useEffect(()=>{
    localStorage.setItem("pacientes",JSON.stringify(pacientes))
  },[pacientes])

 


  const eliminarPaciente=(id)=>{
    const pacientesActualizados=pacientes.filter(paciente=>paciente.id !== id)
    setPacientes(pacientesActualizados)
  }
  
  return (
    <>
    <div className="container mx-auto mt-20">
      <Header ></Header>
      <div className="mt-12 md:flex">
      <Formulario
      // Creamos un prop en formulario
      pacientes={pacientes}
      setPacientes={setPacientes}
      paciente={paciente}
      setPaciente={setPaciente}
      
      
      ></Formulario>
      {/* Paso al componente */}
      <ListadoPacientes
      pacientes={pacientes}
      // Pasamos este prop a paciente
      setPaciente={setPaciente}
      eliminarPaciente={eliminarPaciente}
      ></ListadoPacientes>
      
      </div>

      </div>
    </>
  );
}

export default App;
