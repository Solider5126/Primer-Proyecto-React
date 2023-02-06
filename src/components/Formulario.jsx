import { useState, useEffect } from "react";
import Error from "./Error";
//Traemos el prop y hacemos destroctchorin
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  //Aqui hacemos un hook
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const ramdon = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return ramdon + fecha;
  };

  const handleSudmit = (e) => {
    e.preventDefault();

    //Validando Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay al menos un campo vacio");

      setError(true);
      return;
    }
    setError(false);
    //Objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    //EditaR
    //Si tiene id
    if (paciente.id) {
      //Editando registro
      objetoPaciente.id = paciente.id;

      //
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({})
    } else {
      //Nuevo Registro
      objetoPaciente.id = generarId();
      //creamos una copia de pacientes y agregamos el objeto nuevo
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciar el formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">
          Seguimiento Pacientes
        </h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y{" "}
          <span className="text-indigo-600 font-bold text-lg">
            Administralos
          </span>
        </p>

        <form
          onSubmit={handleSudmit}
          action=""
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        >
          {/* Si es true mostrara este valor */}
          {error && (
            <Error>
              <p>Todos los campos son obligatorios</p>
            </Error>
          )}

          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase">
              Nombre Mascota
            </label>
            <input
              id="mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="text"
              placeholder="Nombre de la mascota"
              //Funcion Modificadora
              //Onchage es como el event listener
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="propietario"
              className="block text-gray-700 uppercase"
            >
              Nombre Propietario
            </label>

            <input
              id="propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="text"
              placeholder="Nombre de la propietario"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase">
              Nombre Email
            </label>

            <input
              id="email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="date" className="block text-gray-700 uppercase">
              Alta
            </label>

            <input
              id="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase">
              Sintomas
            </label>
            <textarea
              name=""
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="sintomas"
              cols="30"
              rows="10"
              placeholder="Describe los sintomas"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            ></textarea>
          </div>
          <input
            type="submit"
            value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          />
        </form>
      </div>
    </>
  );
};

export default Formulario;
