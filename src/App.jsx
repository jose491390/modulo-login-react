/*Importación de componentes y estilos Se importan los componentes Formulario y
 Home desde los archivos correspondientes, además del hook useState de React y 
 los estilos de la aplicación desde el archivo "App.css".*/
import { Formulario  } from './componentes/formulario'
import { Home } from './componentes/home'
import { useState } from 'react'
import './App.css'


/*Definición del componente App Se utiliza el hook useState para manejar el estado de user, 
que almacena la información del usuario.*/
function App() {
    const [user, setUser] = useState([])


    /*Renderización condicional de componentes Se realiza una renderización condicional 
    para decidir si mostrar el componente Formulario o el componente Home basado en la longitud 
    del arreglo user. Si la longitud de user es cero, se muestra el formulario 
    (el usuario no ha iniciado sesión), de lo contrario, se muestra la página de inicio (Home).*/
  return (
   <div className='App'> 
   {
    !user.length > 0
      ?<Formulario setUser = {setUser} />
      :<Home user= {user} setUser= {setUser}  />
   } 
    
      


   </div>
  )
}
/*Exportación del componente App Se exporta el componente App como el componente predeterminado 
para ser utilizado en otros archivos.*/
export default App
