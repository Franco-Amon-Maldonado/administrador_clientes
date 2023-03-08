function Mensaje({children}) {
    return ( 
        <div className="bg-red-600 w-full rounded-md text-center mb-6">
            <p className="text-white font-bold uppercase p-4">{children}</p>
        </div>
     );
}

export default Mensaje;