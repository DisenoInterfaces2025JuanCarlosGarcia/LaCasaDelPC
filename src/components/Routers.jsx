import { Route, Routes, Navigate } from "react-router-dom"
import Contenedor from "./Contenedor"
import Inicio from "../pages/inicio.jsx"
import ArticuloDescripcion from "./ArticuloDescripcion.jsx"

import Catalogo from "../pages/Catalogo.jsx"
import Admin from "../pages/Admin"
import Login from "../pages/Login.jsx";
import { UserContext } from "../context/userContext.jsx"
import { useContext } from "react"



/**
 * @file Routers.jsx
 * @description
 * Define las rutas principales de la aplicación utilizando React Router DOM.
 * Centraliza la navegación y establece un layout común mediante el componente Contenedor.
 */



const PrivateRoute = ({ children }) => {
    const { userLogged } = useContext(UserContext)
    if (!userLogged) return <Navigate to="/login" replace />
    return children;
}


function Routers() {
    return (
        <Routes>
            <Route element={<Contenedor />}>
                <Route path="/" element={<Navigate to="/inicio" replace />} />
                <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/catalogo/:idArticulo" element={<ArticuloDescripcion />} />
                <Route path="/login" element={<Login />} />
            </Route>
            <Route
                path="*"
                element={
                    <Contenedor titulo="Pagina no encontrada">
                        <p> La ruta no existe.</p>
                    </Contenedor>

                }

            />
        </Routes>
    );
}

export default Routers