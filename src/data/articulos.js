

/*
const articulos = [
  {
    id: 1,
    nombre: "Acer aspire 3",
    descripcion: "Acer aspire portátil de 15.6 pulgadas 32GB RAM 1TB disco duro",
    precio: 599,
    imagen: new URL("../assets/img/Acer Aspire 3.png", import.meta.url).href
  },
  {
    id: 2,
    nombre: "Lenovo idea pad 1",
    descripcion: "Lenovo IdeaPad portátil de 15.6 pulgadas 16GB RAM 512GB disco duro",
    precio: 499,
    imagen: new URL("../assets/img/Lenovo IdeaPad 1.png", import.meta.url).href
  },
  {
    id: 3,
    nombre: "HP Pavilion",
    descripcion: "HP Pavilion portátil de 15.6 pulgadas 8GB RAM 256GB disco duro",
    precio: 399,
    imagen: new URL("../assets/img/HP Portátil.png", import.meta.url).href
  },
  {
    id: 4,
    nombre: "Lenovo ThinkBook 15",
    descripcion: "Lenovo ThinkBook portátil de 15.6 pulgadas 16GB RAM 1TB disco duro",
    precio: 699,
    imagen: new URL("../assets/img/Lenovo ThinkBook 15.png", import.meta.url).href
  },
  {
    id: 5,
    nombre: "Acer Nitro 27",
    descripcion: "Monitor Acer Nitro de 27 pulgadas Full HD 165Hz",
    precio: 279,
    imagen: new URL("../assets/img/Acer Nitro 27.png", import.meta.url).href
  },
  {
    id: 6,
    nombre: "Acer Nitro V",
    descripcion: "Acer Nitro V portátil gamer de 15.6 pulgadas 32GB RAM 1TB disco duro",
    precio: 899,
    imagen: new URL("../assets/img/Acer Nitro V.png", import.meta.url).href
  },
  {
    id: 7,
    nombre: "Acer Swift 14",
    descripcion: "Acer Swift 14 portátil ultraligero de 14 pulgadas 16GB RAM 512GB SSD",
    precio: 799,
    imagen: new URL("../assets/img/Acer Swift 14.png", import.meta.url).href
  },
  {
    id: 8,
    nombre: "ASUS ROG G13CH (2024)",
    descripcion: "PC gaming ASUS ROG G13CH con Intel i7, RTX 4070 y 32GB RAM",
    precio: 1799,
    imagen: new URL("../assets/img/ASUS ROG G13CH (2024).png", import.meta.url).href
  },
  {
    id: 9,
    nombre: "Corsair K70 RGB PRO",
    descripcion: "Teclado mecánico Corsair K70 RGB PRO con switches Cherry MX",
    precio: 169,
    imagen: new URL("../assets/img/Corsair K70 RGB PRO.png", import.meta.url).href
  },
  {
    id: 10,
    nombre: "CyberPowerPC Gamer Xtreme",
    descripcion: "PC de escritorio gamer CyberPowerPC con RTX 3060, 16GB RAM y 1TB SSD",
    precio: 1299,
    imagen: new URL("../assets/img/CyberPowerPC.png", import.meta.url).href
  },
  {
    id: 11,
    nombre: "G305 LIGHTSPEED",
    descripcion: "Ratón inalámbrico Logitech G305 LIGHTSPEED con sensor HERO",
    precio: 59,
    imagen: new URL("../assets/img/G 305 LIGHTSPEED.png", import.meta.url).href
  },
  {
    id: 12,
    nombre: "Image3 iBuyPower SlateMesh",
    descripcion: "PC gaming iBuyPower SlateMesh con Intel i5 y RTX 4060",
    precio: 1399,
    imagen: new URL("../assets/img/Image3iBuyPower SlateMesh.png", import.meta.url).href
  },
  {
    id: 13,
    nombre: "LG 34WP60C-B",
    descripcion: "Monitor LG curvo de 34 pulgadas UltraWide QHD 160Hz",
    precio: 399,
    imagen: new URL("../assets/img/LG 34WP60C-B.png", import.meta.url).href
  },
  {
    id: 14,
    nombre: "MSI Aegis ZS",
    descripcion: "PC gaming MSI Aegis ZS con Ryzen 7, RTX 4070 y 32GB RAM",
    precio: 1699,
    imagen: new URL("../assets/img/MSI Aegis ZS.png", import.meta.url).href
  },
  {
    id: 15,
    nombre: "Philips 221V8LB",
    descripcion: "Monitor Philips 221V8LB de 21.5 pulgadas Full HD",
    precio: 149,
    imagen: new URL("../assets/img/PHILIPS 221V8LB.png", import.meta.url).href
  },
  {
    id: 16,
    nombre: "Razer Basilisk V3",
    descripcion: "Ratón gamer Razer Basilisk V3 con 11 botones programables",
    precio: 89,
    imagen: new URL("../assets/img/Razer Basilisk V3.png", import.meta.url).href
  },
  {
    id: 17,
    nombre: "Razer DeathAdder Essential",
    descripcion: "Ratón gamer Razer DeathAdder Essential ergonómico con sensor óptico",
    precio: 49,
    imagen: new URL("../assets/img/Razer DeathAdder E.png", import.meta.url).href
  },
  {
    id: 18,
    nombre: "Rii RK100+",
    descripcion: "Teclado retroiluminado Rii RK100+ con diseño compacto",
    precio: 39,
    imagen: new URL("../assets/img/Rii RK100+.png", import.meta.url).href
  },
  {
    id: 19,
    nombre: "Samsung Monitor 24”",
    descripcion: "Monitor Samsung de 24 pulgadas Full HD 75Hz",
    precio: 179,
    imagen: new URL("../assets/img/SAMSUNG Monitor.png", import.meta.url).href
  },
  {
    id: 20,
    nombre: "Sceptre Monitor curvo",
    descripcion: "Monitor Sceptre curvo de 27 pulgadas Full HD 165Hz",
    precio: 199,
    imagen: new URL("../assets/img/Sceptre Monitor curvo.png", import.meta.url).href
  },
  {
    id: 21,
    nombre: "Skytech Gaming Nebula",
    descripcion: "PC gamer Skytech Nebula con RTX 4060, Ryzen 5 y 16GB RAM",
    precio: 1399,
    imagen: new URL("../assets/img/Skytech Gaming Nebula.png", import.meta.url).href
  },
  {
    id: 22,
    nombre: "SteelSeries Apex Pro",
    descripcion: "Teclado mecánico SteelSeries Apex Pro con switches ajustables",
    precio: 229,
    imagen: new URL("../assets/img/SteelSeries Apex Pro.png", import.meta.url).href
  },
  {
    id: 23,
    nombre: "Thermaltake LCGS Quartz",
    descripcion: "PC gamer Thermaltake LCGS Quartz con Ryzen 7, RTX 4070 y refrigeración líquida",
    precio: 1899,
    imagen: new URL("../assets/img/Thermaltake LCGS Quartz.png", import.meta.url).href
  }


]

export default articulos;*/