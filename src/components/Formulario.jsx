
const Formulario = ({cliente}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Nombre:</label>
                <input 
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 rounded-md bg-gray-50 outline-none focus:border-2 focus:border-emerald-600"
                    placeholder="Nombre del Cliente"
                    name="nombre"
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="empresa"
                >Empresa:</label>
                <input 
                    id="empresa"
                    type="text"
                    className="mt-2 inline-block w-full p-3 rounded-md bg-gray-50 outline-none focus:border-2 focus:border-emerald-600"
                    placeholder="Empresa del Cliente"
                    name="empresa"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 rounded-md bg-gray-50 outline-none focus:border-2 focus:border-emerald-600"
                    placeholder="Email del Cliente"
                    name="email"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input 
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 rounded-md bg-gray-50 outline-none focus:border-2 focus:border-emerald-600"
                    placeholder="Teléfono del Cliente"
                    name="telefono"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notas"
                >Notas:</label>
                <textarea
                    as="textarea"
                    id="notas"
                    type="text"
                    className="mt-2 block w-full p-3 rounded-md bg-gray-50 outline-none focus:border-2 focus:border-emerald-600 h-40 align-self"
                    placeholder="Notas del Cliente"
                    name="notas"
                />
            </div>
        </>
    )
}
        
export default Formulario

     

