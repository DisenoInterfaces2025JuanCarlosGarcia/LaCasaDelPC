/**
 * Componente que sirve como contenedor principal de páginas.
 * Proporciona un layout base con un máximo ancho y centrado.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido que se renderiza dentro del contenedor.
 * @param {string} [props.titulo] - Título opcional de la sección principal.
 *
 * @returns {JSX.Element} Elemento JSX que envuelve el contenido de la página.
 */

import { Outlet } from "react-router-dom";


function Contenedor({children, titulo }) {
  return (
   <main
  id="main-content"
  role="main"
  tabIndex="-1"
  className="bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center p-8"
>
  <section
    aria-labelledby="main-section-title"
    className="w-full max-w-7xl text-center"
  >
    {titulo && (
      <h1
        id="main-section-title"
        className="font-heading-h1 leading-(--heading-h1-line-height) text-(--colorprimary) [text-shadow:0px_4px_4px_#00000040]"
      >
        {titulo}
      </h1>
    )}
    {children}
    <Outlet/>
  </section>
</main>
  );
}

export default Contenedor;