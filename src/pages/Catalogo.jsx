import { useState, useMemo } from "react";
import { useArticulos } from "../hooks/useArticulos";
import Articulo from "../components/Articulo";
import Contenedor from "../components/Contenedor";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";


/**
 * Componente que muestra el catálogo completo de artículos.
 * Renderiza un título, subtítulo y un grid con todos los artículos disponibles.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la página de catálogo.
 */


function Catalogo() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: articulos, loading, error, refetch } = useArticulos();

  const filteredArticulos = useMemo(() => {
    if (!articulos) return [];
    return articulos.filter((item) =>
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [articulos, searchTerm]);

  if (loading) return <Spinner />;

  if (error) return <div className="text-center p-10 text-red-500">Error: {error}</div>;
  if (!articulos) return <div className="text-center p-10">Producto no encontrado.</div>;


  return (
    <main className="main--nav" aria-label="Catálogo de Artículos">
      <Contenedor>
        <h1 className="text--h1">Catálogo de Artículos</h1>
        <h2 className="text--h2" id="main-section-title">Listado de articulos disponibles</h2>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Buscar artículos..."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
          {articulos.map((item) => (
            <Link key={item.id} to={`/catalogo/${item.id}`}>
              <Articulo {...item} onDelete={refetch} />
            </Link>
          ))}
        </div>

        {!loading && articulos.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No se han encontrado artículos en el catálogo.
          </p>
        )}
      </Contenedor>
    </main>
  );
}
export default Catalogo