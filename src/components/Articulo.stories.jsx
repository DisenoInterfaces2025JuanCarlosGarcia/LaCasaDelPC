import Articulo from './Articulo';

export default {
  title: "Components/Articulo",
  component: Articulo,

  //tags: ["autodocs"],
};


export const Portatiles = {
  args: {
    id: 1,
    nombre: "Acer Aspire 3",
    descripcion: "Acer aspire portátil de 15.6 pulgadas 32GB RAM 1TB disco duro",
    precio: 599,
    imagen: "/img/Acer Aspire 3.png"
  }
};

export const PcGaming = {
  args: {
    id: 14,
    nombre: "MSI Aegis ZS",
    descripcion: "PC gaming con Ryzen 7, RTX 4070 y 32GB RAM",
    precio: 1699,
    imagen: "/img/MSI Aegis ZS.png"
  }
};

export const Monitores = {
  args: {
    id: 20,
    nombre: "Sceptre Monitor curvo",
    descripcion: "Monitor curvo de 27 pulgadas Full HD 165Hz",
    precio: 199,
    imagen: "/img/Sceptre - Monitor curvo.png"
  }
};

