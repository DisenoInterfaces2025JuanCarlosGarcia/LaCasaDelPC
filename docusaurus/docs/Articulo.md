---
sidebar_label: 'Hi!'
sidebar_position: 3
---


# Componente `Articulo`

Componente presentacional y accesible que renderiza una tarjeta de artículo o producto dentro del catálogo.  
Muestra una imagen del producto, su nombre destacado, una descripción y el precio.

## Características de accesibilidad

- El elemento `<article>` es accesible mediante teclado (`tabIndex="0"`).
- Se define explícitamente el rol `article`.
- La imagen incluye un texto alternativo (`alt`) con el nombre del artículo.
- La imagen utiliza `loading="lazy"` para mejorar el rendimiento y la experiencia de usuario.
- La estructura semántica separa claramente imagen, encabezado y contenido.

## Props

| Prop | Tipo | Descripción |
|-----|------|-------------|
| `nombre` | `string` | Nombre del artículo; se muestra como título y se usa como texto alternativo de la imagen. |
| `precio` | `number \| string` | Precio del artículo, mostrado de forma destacada. |
| `descripcion` | `string` | Descripción breve del artículo. |
| `imagen` | `string` | URL de la imagen del artículo. |

## Ejemplo de uso

```jsx
<Articulo
  nombre="MSI Aegis ZS"
  precio={1500}
  descripcion="PC Gaming potente con gráfica RTX 3080"
  imagen="/img/msi-aegis.jpg"
/>