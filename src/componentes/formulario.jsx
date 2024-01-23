
/*Importación de useState y estilos*/
import { useState } from "react"
import "./formulario.css"

/*Definición del componente de formulario*/
export function Formulario({setUser}){ 

    /*Estado del formulario Aquí se utilizan los hooks de estado (useState) 
    para manejar el estado del nombre, la contraseña y un indicador de error*/
    const [nombre, setNombre] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)


    /*Manejo del envío del formulario  
    La función handleSubmit se ejecuta cuando se envía el formulario. 
    Verifica si tanto el nombre como la contraseña no están vacíos. 
    Si están vacíos, se establece un indicador de error. Si no están vacíos, 
    se limpia el error y se llama a la función setUser con el nombre del usuario*/
    const handleSubmit = (e) => {
        e.preventDefault()

        if(nombre === "" || password === ""){
            setError(true)
            return
        }

        setError(false)

        setUser([nombre])
    }

    /*Renderización del formulario El componente renderiza un formulario con campos de entrada 
    para el nombre y la contraseña, un botón de envío y un mensaje de error que se 
    mostrará si hay un error.*/
    return(

        <section>
            <h1>SIFACT</h1>

            <form 
                className='formulario'
                onSubmit={handleSubmit} 
            >
                <input 
                    type="text" 
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    
                />

                <input 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    
                />
                <button>Iniciar Sesion</button>
            </form>
            {error && <p>*Todos los campos son obligatorios*</p> }
        </section>
    )
}
