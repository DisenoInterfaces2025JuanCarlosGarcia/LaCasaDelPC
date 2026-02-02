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

function Articulo(props){
    const { nombre,precio,descripcion,imagen}=props

return(
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

        </header>
    </article>
);

}

export default Articulo;