/**
 * Componente Header de la página.
 * Contiene la barra de navegación principal importada desde Nav.jsx.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX del header.
 */

import Nav from './Nav.jsx';

function Header() {
return(
    <header>
        <Nav />
    </header>
)}

export default Header;