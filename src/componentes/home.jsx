//Importación de estilos
import "./formulario.css"
//Definición del componente Home
export function Home({ user, setUser }){

    /*Manejo del cierre de sesión La función handleLogout se ejecuta cuando 
    se hace clic en el botón "Cerrar Sesión". Esta función llama a la función 
    setUser con un arreglo vacío, lo que indica que el usuario ha cerrado sesión*/
    const handlelogout = () => {
        setUser([])
    }
    /*Renderización del componente HomeEl componente renderiza un título de bienvenida ("Bienvenido"),
     el nombre del usuario ({user}) y un botón para cerrar sesión. Cuando se hace clic en el botón, 
     se ejecuta la función handleLogout para realizar el cierre de sesión.*/
    return(
        <div>
            <h1 className="titulo">Bienvenido</h1>
            <h2> {user} </h2>
            <button onClick={handlelogout}>Cerrar Session</button>
        </div>
    )
}