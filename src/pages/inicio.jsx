/**
 * @file Inicio.jsx
 * @description
 * Componente que representa la página de inicio de la aplicación.
 * Muestra una imagen principal y una selección de artículos destacados
 * con enlaces al catálogo.
 */

import { useArticulos } from "../hooks/useArticulos";
import Articulo from "../components/Articulo";
import Contenedor from "../components/Contenedor";
import { Link } from "react-router-dom";
import ImgPrincipal from '../assets/img/Image Background.png';

function Inicio() {
    const { data: articulos, loading, error } = useArticulos();

    // Filtramos y ordenamos por puntuación para mostrar los "mejores"
    const featuredArticulos = articulos
        ? [...articulos]
            .sort((a, b) => b.puntuacion - a.puntuacion)
            .slice(0, 4)
        : [];

    return (
        <main className="bg-gray-50 min-h-screen">
            <Contenedor>
                {/* Hero Section */}
                <section className="relative group overflow-hidden rounded-2xl mb-12 shadow-2xl">
                    <img
                        src={ImgPrincipal}
                        alt="Imagen principal de la página de inicio"
                        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <h2 className="text-4xl font-bold mb-2">Bienvenido a La Casa Del PC</h2>
                            <p className="text-xl">Encuentra la mejor tecnología al mejor precio</p>
                        </div>
                    </div>
                </section>

                <div className="flex flex-col items-center mb-10">
                    <span className="text-yellow-500 font-semibold tracking-widest uppercase text-sm mb-2">Selección Premium</span>
                    <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-4">
                        Nuestros Productos Más Valorados
                    </h2>
                    <div className="h-1 w-20 bg-yellow-500 rounded-full"></div>
                </div>

                {loading && (
                    <div className="flex justify-center items-center p-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
                    </div>
                )}

                {error && <p className="text-center text-red-500 p-4 bg-red-50 rounded-lg">Error al cargar productos: {error}</p>}

                {/* Grid de imágenes centrado */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center mx-auto mb-16">
                    {featuredArticulos.map((articulo) => (
                        <Link
                            key={articulo.id}
                            to={`/catalogo/${articulo.id}`}
                            className="transform transition-all duration-300 hover:-translate-y-2"
                        >
                            <Articulo
                                nombre={articulo.nombre}
                                precio={articulo.precio}
                                descripcion={articulo.descripcion}
                                imagen={articulo.imagen}
                            />
                        </Link>
                    ))}
                </div>

                <div className="text-center mb-16">
                    <Link
                        to="/catalogo"
                        className="inline-block bg-yellow-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition-colors uppercase tracking-wider"
                    >
                        Ver Catálogo Completo
                    </Link>
                </div>
            </Contenedor>
        </main>
    );
}

export default Inicio