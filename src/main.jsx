import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, {action as nuevoCienteAction} from './pages/NuevoCliente'
import Index, {loader as clientesLoader} from './pages/Index'
import Error from './components/Error'
import EditarCliente, {loader as editarClienteLoader} from './pages/EditarCliente'

const router = createBrowserRouter ([
  {
    path: '/',
    //Los hijos van a heredar de Layout. Por ejemplo podria tener una navegacion la cual mostrar en todas las paginas
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement: <Error/>
      }
      ,{
        path: '/clientes/nuevo',
        element: <NuevoCliente/>,
        action: nuevoCienteAction
    },
  {
    path: '/clientes/:clienteId/editar',
    element: <EditarCliente/>,
    loader: editarClienteLoader,
    errorElement: <Error/>
  }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
  </React.StrictMode>,
)
