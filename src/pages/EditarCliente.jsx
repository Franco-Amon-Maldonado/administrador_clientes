import {useLoaderData, useNavigate ,Form, useActionData, redirect } from "react-router-dom";
import Swal from "sweetalert2";
import Formulario from "../components/Formulario";
import Mensaje from "../components/Mensaje";
import { actualizarCliente, editarCliente } from "../data/clientes";



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

export async function action({request, params}){
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    
    //Validacion 
    const errores = []
    if(Object.values(datos).includes('')){
        errores.push('Todos los campos son obligatorios')
    }

    //validar email
    const email = formData.get('email')
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
    //Se niega para determinar que si no se cumple esa condicion
    if(!regex.test(email)){
        errores.push('El email no es válido')
    }
    //Retornar datos si hay errores
    if(Object.keys(errores).length){
        return errores
    }

    //Actualizar cliente
    await actualizarCliente(params.clienteId, datos) 
    Swal.fire('',
              'Cliente editado exítosamente',
              'success')


    return redirect('/');
}

function EditarCliente() {

    const navegate = useNavigate()
    const cliente = useLoaderData()
    const errores = useActionData()
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

                {errores?.length && errores.map((error, i) => <Mensaje key={i}>{error}</Mensaje>)}
                <Form
                    method="post"
                    //Deshabilita la validacion de html
                    noValidate
                >
        
                    <Formulario 
                        cliente={cliente}
                    />

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