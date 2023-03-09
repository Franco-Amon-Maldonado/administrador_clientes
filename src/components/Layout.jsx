import { Outlet, Link} from "react-router-dom";
import './style.css'

function Layout() {


    return ( 
        <div className="md:flex md:min-h-screen">

            <aside className="md:w-1/5 px-5 py-10 fondo">
                <h2 className="text-4xl text-center p-4 text-slate-500 border-b-4 border-emerald-600">CRM - Clientes</h2>
                <nav className="mt-10">
                    <ul className="text-slate-300 text-2xl">
                        <Link className="block transition-colors duration-300 hover:bg-emerald-500 rounded-md -cursor-pointer focus:bg-emerald-500 focus:font-bold mb-5 p-3" to="/">Inicio</Link>
                        <Link className="block transition-colors duration-300 hover:bg-emerald-500 rounded-md -cursor-pointer focus:bg-emerald-500 focus:font-bold p-3" to="/clientes/nuevo/">Nuevo cliente</Link>
                    </ul>
                </nav>
            </aside>

            <main className="md:w-4/5 p-10 lg:h-screen bg-slate-200 xl:overflow-scroll">
                <Outlet/>
            </main>
        </div>
       
     )
}

export default Layout;