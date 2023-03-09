import { useRouteError } from "react-router-dom"


function Error() {
const error = useRouteError()

    return (  
        <div className="space-y-10">
            <h1 className="text-5xl font-bold text-center p-4 text-emerald-600 ">CRM - Clientes</h1>
            <p className="text-center text-xl">Uups! Hubo un error</p>
            <p className="text-center">{error.statusText || error.message}</p>
        </div>
    )
}

export default Error
