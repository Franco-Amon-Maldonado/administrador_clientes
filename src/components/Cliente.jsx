import { useNavigate, Form, redirect } from "react-router-dom";
import Swal from "sweetalert2";
import { eliminarCliente } from "../data/clientes";


export async function action({params}){
    await eliminarCliente(params.clienteId)
    return redirect('/')      
}

function Cliente({cliente}) {
    const navigate = useNavigate()
    const {id, nombre, telefono, email, empresa} = cliente

    
    
    return ( 
        <>
        <tr>
            <td className="p-5">
                <p className="text-2xl">{nombre}</p>
                <p className="text-slate-400"><span className="font-bold">Empresa: </span>{empresa}</p>
            </td>

            <td className="p-5 text-center">
                <p className="text-slate-400"><span className="font-bold">Tel: </span>{telefono}</p>
                <p className="text-slate-400"><span className="font-bold">Email: </span>{email}</p>
            </td>

            <td className="p-5 text-md gap-5 flex justify-center">
                <button type="button" 
                        className="uppercase font-bold text-emerald-700 hover:text-emerald-400 transition-colors duration-300"
                        onClick={()=>navigate(`/clientes/${id}/editar`)}
                    >Editar
                </button>
            
            <Form
                method="POST"
                action= {`/clientes/${id}/eliminar`}
                onSubmit={(e)=>{

                     if(!confirm('Desea eliminar el cliente?')){
                         e.preventDefault()
                         
                     }else{
                         Swal.fire('', 'Eliminado exitosamente', 'success')
                      }

                    
                //      Swal.fire({
                //          title: '¿Desea eliminar este cliente?',
                //          text: "Esta acción no puede revertirse",
                //          icon: 'warning',
                //          showCancelButton: true,
                //         confirmButtonColor: '#3085d6',
                //          cancelButtonColor: '#d33',
                //          confirmButtonText: 'Si, eliminar!'
                //        }).then((result) => {
                //          if (result.isConfirmed) {


                //            Swal.fire(
                //              'Borrado',
                //              'El cliente ha sido eliminado',
                //              'success'
                //            )
                //          }
                //        })
             }}
            >
                 <button 
                        type="submit" 
                        className="uppercase font-bold transition-all duration-300 text-red-700 hover:scale-125 hover:text-red-500"
                        >Eliminar
                </button>
            </Form>
                
            </td>
        </tr>
    </>
     )
}

export default Cliente;