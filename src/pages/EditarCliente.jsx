import {useLoaderData, useNavigate ,Form } from "react-router-dom";
import Formulario from "../components/Formulario";
import { editarCliente } from "../data/clientes";


export async function loader({ params }) {
    
    const cliente = await editarCliente(params.clienteId);

      if (Object.values(cliente).length == 0) {
           throw new Response('', {
             status: 404,
            statusText: 'El cliente no existe'
           })
     }



    return cliente
    
    

}

function EditarCliente() {

    const navegate = useNavigate()
    const cliente = useLoaderData()
    return (

        <>

            <h1 className="text-5xl uppercase font-black text-emerald-600 text-center">Editar cliente</h1>
            <p className="text-xl text-slate-500 text-center mt-4">Edita y guarda los cambios del cliente</p>
            <div className="flex justify-end">
                <button type="button"
                    className="rounded-md px-5 py-4 text-md bg-emerald-700 uppercase text-white font-bold transition-all duration-300 hover:bg-emerald-500 hover:scale-110"
                    onClick={() => navegate('/')}>
                    Volver
                </button>

            </div>

            <div className="md:w-3/5 mx-auto bg-white mt-12 p-5 shadow-md rounded-md">

                {/* {errores?.length && errores.map((error, i) => <Mensaje key={i}>{error}</Mensaje>)} */}
                <Form
                    method="post"
                    //Deshabilita la validacion de html
                    noValidate
                >
        
                    <Formulario />

                    <div className="flex justify-center">
                        <input type="submit"
                            value="Editar cliente"
                            className="w-1/2 bg-emerald-700 p-4 uppercase rounded-md text-white font-bold transition-bg duration-300 hover:bg-emerald-500 hover:cursor-pointer" />
                    </div>

                </Form>


            </div>
        </>
    )
}

export default EditarCliente;