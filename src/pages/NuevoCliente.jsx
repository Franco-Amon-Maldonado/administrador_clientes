import { useNavigate, Form } from "react-router-dom";
import Formulario from "../components/Formulario";

export async function action({request}){
    const formData = await request.formData()


    const datos = Object.fromEntries(formData)
    console.log(datos)
    return { ok: true };
}

function NuevoCliente() {
    const navegation = useNavigate()

    
    return ( 
        <>
            <h1 className="text-5xl uppercase font-black text-emerald-600 text-center">Nuevo cliente</h1>
            <p className="text-xl text-slate-500 text-center mt-4">Agrega un nuevo cliente</p>
            <div className="flex justify-end">
                <button type="button" 
                        className="rounded-md px-5 py-4 text-md bg-emerald-700 uppercase text-white font-bold transition-all duration-300 hover:bg-emerald-500"
                        onClick={()=>navegation('/')}>
                    Volver
                </button>
            </div>

            <div className="md:w-3/5 mx-auto bg-white mt-12 p-5 shadow-md rounded-md">

            <Form
                method="post"
            >
                <Formulario/>

                <div className="flex justify-center">
                    <input type="submit"
                           value="Registrar cliente"
                           className="w-1/2 bg-emerald-700 p-4 uppercase rounded-md text-white font-bold transition-bg duration-300 hover:bg-emerald-500 hover:cursor-pointer"/>
                    </div>
                
            </Form>
            

            </div>
        </>
     );
}

export default NuevoCliente;