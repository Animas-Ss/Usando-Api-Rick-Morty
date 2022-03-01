import React from 'react';
import { useFormulario } from '../hook/useFormulario';
import Swal from 'sweetalert2';

const Formulario = ({setNombre, reinicio}) => {

    // usamos el hook que creamos useFormulario
    // le asignamos de estados inputs
    //handleChange y reset
  
    const [inputs, handleChange, reset] = useFormulario({
        nombre:"",
    })

    // desectructuramos los imputs
    
    const {nombre} = inputs;

    // creamos una funcion para el formulario submit
    // la letra e que pasamos como parametro se la conoce como el evento el cual nos da informaicon sobre el Dom
    // target , name, elemento etc

    const handleSubmit = (e) => {
        // colocamos la funcion de preventDefault para evitar que el explorador haga un comportamiento por defecto mediante este evento de recarga y valla mas fluido
        e.preventDefault();
        
        // validacion de datos si mi input esta vacio
        if(!nombre.trim()){
            return Swal.fire({
                title: "Error!",
                text: "El nombre es obligatorio",
                icon: "error",
            });

        };

        setNombre(nombre.trim().toLowerCase());
        

        reset();
    }


  return (
      // el formulario tiene que estar bien redactado escribir bien las etiquetas
    <>
    <div className='row'>
     <form onSubmit={handleSubmit} className="col s12">
         <div className="input-field col s10">
         <input
         type="text"
         value={nombre}
         onChange={handleChange}
         name="nombre"
         placeholder="Ingrese un personaje"
         />
         </div>
        <div className="input-field col s2">
        <button type='submit' className='waves-effect waves-light btn'>
            Buscar
        </button>
        </div>
        
     </form>
     
     </div>
     
     <button onClick={() => reinicio()} className="waves-effect waves-light btn">Reiniciar</button>
     
    </>
  );
};

export default Formulario;