function Cliente({cliente}) {
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
                <button type="button" className="uppercase font-bold text-emerald-700 hover:text-emerald-400 transition-colors duration-300">Editar</button>
                <button type="button" className="uppercase font-bold transition-all duration-300 text-red-700 hover:scale-125 hover:text-red-500">Eliminar</button>
            </td>
        </tr>
    </>
     )
}

export default Cliente;