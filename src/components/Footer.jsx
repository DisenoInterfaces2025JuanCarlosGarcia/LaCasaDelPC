/**
 * Componente Footer de la página.
 * Muestra el copyright y enlaces a redes sociales.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX del footer.
 */

function Footer() {
  return (
    <footer className="[background-color:rgb(248,240,217)] text-black py-6 mt-12 w-full text-center">
      <p>© 2025 La Casa Del PC. Todos los derechos reservados.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="hover:text-yellow-500">Facebook</a>
        <a href="#" className="hover:text-yellow-500">Twitter</a>
        <a href="#" className="hover:text-yellow-500">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;