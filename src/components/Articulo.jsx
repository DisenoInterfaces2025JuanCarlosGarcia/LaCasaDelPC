/**
 * Componente que representa un artículo/producto en el catálogo.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.nombre - Nombre del artículo.
 * @param {number|string} props.precio - Precio del artículo.
 * @param {string} props.descripcion - Descripción del artículo.
 * @param {string} props.imagen - URL de la imagen del artículo.
 * 
 * @returns {JSX.Element} Elemento JSX que representa la tarjeta del artículo.
 */

import { useContext } from "react";
import { UserContext } from "../context/userContext.jsx";
import { deleteArticulo } from "../service/ArticulosService";


function Articulo(props) {

    const { nombre, precio, descripcion, imagen, id, onDelete } = props
    const { userLogged } = useContext(UserContext);

    const handleDelete5 = async (e, id) => {
        e.preventDefault();
        e.stopPropagation();

        const confirmDelete = window.confirm(`¿Estás seguro de que quieres borrar el artículo "${nombre}"?`);
        if (!confirmDelete) return;

        try {
            await deleteArticulo(id);
            if (onDelete) {
                onDelete();
            }
        } catch (error) {
            alert("Error al borrar el artículo: " + error.message);
        }
    }

    return (
        <article
            tabIndex="0"
            className="card"
            role="article">
            <figure className="card--img--wrap">
                <img role="img" className="card--img" src={imagen} alt={nombre} loading="lazy" />

            </figure>
            <header className="card--body">
                <h1 className="text--h3">
                    <strong>{nombre}</strong>
                </h1>
                <p>{descripcion}</p>
                <h2 className="text--h4">
                    <strong>Precio: {precio} €</strong>
                </h2>
                {userLogged && (
                    <button
                        onClick={(e) => handleDelete5(e, id)}
                        className="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors"
                    >
                        Eliminar
                    </button>
                )}
            </header>
        </article>
    );

}

export default Articulo;