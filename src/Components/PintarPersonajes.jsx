import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

// importamos los dos componenetes creados 
import Loading from './Loading';
import Personaje from './Personaje';

const PintarPersonajes = ({nombre}) => {
    // primer estado vamos a iniciarlo como un array vacio ya que es el estado de las busquedas
    const [personajes, setPersonajes] = useState([]);
    // segundo estado que creamos es para la carga simplemente es para darle un estado de carga
    // lo inicializamos en false por que vamos a aplicarlo a una condicion para que se renderize
    const [loading, setLoading] = useState(false);

    // colocamos un hook de efecto para que el renderizado este pendiente del nombre y resultados que obtenemos en las busquedas

    useEffect(() => {
        obtenerCharacter(nombre);
    }, [nombre]);

    // obtenerCharacter es la funcion que vamos a usar para consultar a nuestra api publica 
    // por lo tanto toda consulta a nuestras base de datos o apis va a tener un tiempoi de respuesta 
    // asi que es una consulta asincrona por lo cual vamos a usar async y await
     


    //pasamos como parametro el nombre del personaje , en nuestro caso el prop se llama nombre pero podramos ponerle lo que quicierasmos
    const obtenerCharacter = async (nombre) => {
        // colocamos el loading en true para que aparesca en el renderizado
        setLoading(true);
        // abrimos una estructura de try and catch para capturar el error si algo sale mal en la consulta a nuestra api
        try {
            // vamos a crear una funcion fetch para guardar la respuesta de la base o la api en este caso
            const res = await fetch(
                // utilizamos las comillas invertidas ya que la cadena de strig contiene una variable de Javascrip
                // esto nos permite de una forma fasil buscar en la api distintos nombres 
                `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
            )
            if(!res.ok){
                console.log(res);
                return Swal.fire({
                    title: "Error!",
                    text: `no existe ${nombre}`,
                    icon: "error",
                });
            }

            // convertimos la respuesta de la api o base de datos a un archivo json y la guardamos en una variable llamada data

            const data = await res.json();

            //mostramos por consola los resultados de la busqueda 
            console.log([...data.results])

            // le pasamos la informacion optenida a nuestro estado 
            setPersonajes([...data.results])

            
        } catch (error) {
            // mostramos el error por consola
            console.log(error);
            // y lanzamos una alerta al usuario con Sweetalert2 con el error del servidor 
            return Swal.fire({
                title: "Error!",
                text: `Error de servidor`,
                icon: "error",
            });
        }// para finalizar volvemos a colocar el loading en false
        finally{
          setLoading(false);
        }
    };

    if(loading){
        <Loading/>;
    }


  return (
    <>
    <div className='row'>
        {personajes.map((item) => (
            <Personaje key={item.id} character={item}/>
        ))}
    </div>
    </>
  )
}

export default PintarPersonajes;