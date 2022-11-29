import React, { useState } from 'react'

export default function TestRender() {
   // console.log("Console Log de TestRender.jsx");      // Vemos por consola que se esta ejecutando este componente


   /* Creamos los estados para renderizar el componente  */
    
   const [darkMode, setDarkMode] = useState(false);

  /* Estado de EJ-1 */
   const [loading, setLoading] = useState(true); 

  /* Estado de EJ-2 */ 
   const [error, setError] = useState(true); 

    {/* Cada vez que hacemos click cambia de estado y React revisa todo y chequea todo de Nuevo, un componente puede tener hasta 250 lines aporx */}
     
    





   /* Ej- 1 */

  {/* Para evitar que cada vez que realizamos un click,  se renderize todo, hacemos un return Temprano, osea ademas de tener el return original con el contenido, antes colocamos otro con un if consultando si esta cargando */}

   if(loading) return (                           // Si la varibale loading esta en true va ejecutarse el return y evita el return de abajo

                            <> 
                                  <p>Loading....</p>
                            </>
                      );
     
    /* Ej- 2 */       // Para probarlo comentar el otro return             

    if (error) return (    // Si el estado error esta en true, entoces se ejecuta primero este return temprano, y no renderiza el restod e la pagina y tampoco usamos el Loading, ya que no tiene sentido.
                        <> 
                          <p>Error Por Favor espere un momento</p>
                        </>
                      );



    return (
 <>
   <button onClick={() => setDarkMode(!darkMode)}> Cambiar a dark mode </button>  // Cada vez que tomcamos el boton cambia el estado de true a false y se renderiza el componente de nuevo 

      <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>  <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>  <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p> <p>Contenido</p>

  </>
 )
}
