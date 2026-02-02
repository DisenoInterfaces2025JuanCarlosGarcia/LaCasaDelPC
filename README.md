# La Casa Del PC 

## Despliegue del Proyecto
Este proyecto se encuentra dividido en dos partes principales desplegadas en la nube:

*   **Frontend (Web):** Desplegado en **Vercel**.
    *   URL: [https://la-casa-del-pc.vercel.app](https://la-casa-del-pc.vercel.app)
*   **Backend (API/Base de datos):** Desplegado en **Render**.
    *   URL: [https://ut05-actividad4.onrender.com](https://ut05-actividad4.onrender.com)

## Problemas encontrados durante el despliegue
Durante el proceso de configuración y despliegue, surgieron los siguientes inconvenientes técnicos:
1.  **Permisos de Ejecución en Electron:** Al intentar ejecutar los comandos de Electron (`npm run electron-pack`), el sistema denegaba el acceso por falta de permisos y lo tube que hacer desde el powerSell como administrador.
2.  **Variables de Entorno (Node Path):** Se tuvo que actualizar manualmente el `PATH` de Node.js en las variables de entorno , una vez hecho esto pude instalar las dependencias y compilar el proyecto.

## Reflexión Técnica: Web vs Escritorio

### ¿Qué ventajas tiene el despliegue web frente al de escritorio?
*   **Accesibilidad:** Se puede acceder desde cualquier lugar siempre que tengas conexión a internet.
*   **Actualizaciones:** Desde el navegador web se actualiza automaticamente, con lo cual siempre se tiene la ultima version disponible.
*   **Ahorro de recursos:** No ocupa espacio en el disco duro del usuario y consume menos memoria RAM.

### ¿Por qué Electron no sustituye a una web?
Aunque Electron es muy bueno, no sirve para todo:
*   **Tamaño:** La aplicación descargada pesa mucho más que una web, porque tiene que llevar un navegador entero dentro para funcionar.
*   **Seguridad:** Navegar por internet es más seguro; instalar un programa da un poco más de miedo porque tiene más acceso a tus archivos.
*   **Uso:** se utiliza Electron si necesitas que la app esté en la barra de tareas, envíe notificaciones nativas, funcione sin internet o interactúe con los archivos del ordenador del cliente.

## Capturas de la aplicación funcionando

![Captura Comprobación 01](./src/assets/img/Captura%20comprobacion%20aplicacion%2001.png)

![Captura Comprobación 02](./src/assets/img/Captura%20comprobacion%20aplicacion%2002.png)

