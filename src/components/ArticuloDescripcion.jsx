/**
 * Componente que muestra la descripción completa de un artículo.
 * Busca el artículo por ID desde los parámetros de la URL y lo renderiza.
 * Si el artículo no existe, muestra un mensaje de error con enlace al catálogo.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX con la información del artículo o mensaje de error.
 */

import { useParams, Link } from "react-router-dom";
import { useArticulo } from "../hooks/useArticulo";
import Spinner from "../components/Spinner";



function ArticuloDescripcion() {
    const { idArticulo } = useParams()
    const { data: articulo, loading, error } = useArticulo(idArticulo)

    if (loading) return <Spinner />;

    if (error) return <div className="text-center p-10 text-red-500">Error: {error}</div>;
    if (!articulo) return <div className="text-center p-10">Artículo no encontrado</div>;




    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
            <Link
                to="/catalogo"
                className="inline-block mb-6 text-blue-600 hover:text-blue-800 transition-colors"
            >
                &larr; Volver al catálogo
            </Link>

            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">{articulo.nombre}</h1>

            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2">
                    <img
                        src={articulo.imagen}
                        alt={articulo.nombre}
                        className="w-full rounded-xl shadow-lg object-cover max-h-[400px]"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=No+Image"; }}
                    />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-between">
                    <div>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                            {articulo.categoria || "General"}
                        </span>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6 whitespace-pre-line">
                            {articulo.descripcion}
                        </p>
                    </div>

                    <div className="mt-auto">
                        <p className="text-3xl font-bold text-gray-900 mb-4">
                            {articulo.precio} €
                        </p>
                        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticuloDescripcion;
