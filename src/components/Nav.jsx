/**
 * Componente de navegación principal.
 * Muestra el logo, el título de la empresa y un menú de navegación
 * responsive que se adapta a pantallas grandes y móviles.
 *
 * @component
 * @returns {JSX.Element} Barra de navegación con enlaces y botón hamburguesa.
 */

import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from '../assets/img/Logo.png';
import { UserContext } from "../context/userContext";


function Nav() {

    const { userLogged, logout } = useContext(UserContext);
    // Estado del menú: abierto o cerrado
    const [open, setOpen] = useState(false);



    return (
        <>
            {/* Botón hamburguesa */}

            <nav className="nav-header">

                <div className="flex flex-col items-center justify-center relative w-full">

                    <img
                        src={Logo}
                        alt="Logo de la empresa La Casa Del PC"
                        className="h-25 absolute left-4 top-1/2 -translate-y-1/2 md:left-4 hidden md:block"
                    />

                    {/* Título centrado */}
                    <h1 className="text--h1 text-center">
                        La Casa Del PC
                    </h1>

                    {/* Botón hamburguesa a la izquierda en móvil */}
                    <button
                        onClick={() => setOpen(!open)}
                        aria-label="Abrir o cerrar menú de navegación"
                        aria-expanded={open}
                        aria-controls="menu-principal"
                        className="text-3xl text-black p-2 absolute right-4 md:hidden"
                    >
                        ☰
                    </button>

                    {/* Menú debajo del título, links en línea */}
                    <nav className={`${open ? "block" : "hidden"} md:flex mt-2`} id="menu-principal">
                        <div className="flex space-x-4">
                            <NavLink to="/inicio" onClick={() => setOpen(false)} className="px-3 py-2 rounded transition hover:[background-color:rgba(226,185,59,1)]">Inicio</NavLink>
                            <NavLink to="/catalogo" onClick={() => setOpen(false)} className="px-3 py-2 rounded transition hover:[background-color:rgba(226,185,59,1)]">Catalogo</NavLink>
                            {/* <NavLink to="/articuloDescripcion" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-gray-700 transition">ArticuloDescripcion</NavLink> */}
                            <NavLink to="/home" onClick={() => setOpen(false)} className="px-3 py-2 rounded transition hover:[background-color:rgba(226,185,59,1)]">Home</NavLink>
                            <NavLink to="/admin" onClick={() => setOpen(false)} className="px-3 py-2 rounded transition hover:[background-color:rgba(226,185,59,1)]">Admin</NavLink>
                            <NavLink to="/login" onClick={() => setOpen(false)} className="px-3 py-2 rounded transition hover:[background-color:rgba(226,185,59,1)]">Login</NavLink>
                        </div>
                        {userLogged && (
                            <button
                                onClick={logout}
                                className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                                Logout
                            </button>
                        )}
                    </nav>

                </div>
            </nav>
        </>
    );
}

export default Nav;