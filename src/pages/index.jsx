
import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";



//Funcion similar a useEffect, el cual se va a ejecutar cuando el componente cargue. Es ideal para cargar un state o 
//consultar una api. Siempre tiene que retornar algo
export function loader(){
    
    return clientes
}


function Index() {

    const clientes = useLoaderData()

    return ( 
        <>
            <h1 className="text-5xl uppercase font-black text-emerald-600 text-center">Clientes</h1>
            <p className="text-xl text-slate-500 text-center mt-4">Administra tus clientes</p>
            {clientes.length ? (
                <table className="w-full bg-white shadow-md mt-5 table-auto">
                    <thead className="bg-emerald-600 text-white">
                        <tr>
                            <th className="p-3">Clientes</th>
                            <th className="p-3">Contacto</th>
                            <th className="p-3">Acciones</th>
                        </tr>
                    </thead>
                        <tbody>
                            {clientes.map(cliente => (
                                <Cliente
                                    key={cliente.id}
                                    cliente={cliente}
                                />
                            ))}
                        </tbody>
                </table>
            ) : (
                <p className="text-center mt10">No hay clientes aun</p>
            )}
        </>
     )
}

export default Index;