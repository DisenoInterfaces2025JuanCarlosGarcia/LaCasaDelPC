/**
 * Componente principal de la aplicación.
 * Configura las rutas de la aplicación usando react-router-dom
 * y renderiza el header y footer comunes en todas las páginas.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX con la estructura principal de la app.
 */

import './assets/styles/index.css'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer";
import Routers from "./components/Routers";
import { UserProvider } from './context/userContext.jsx';

function App() {
  return (
    <>
      <UserProvider>
        <Header />

        <Routers />
      </UserProvider>
      <Footer />
    </>
  );
}

export default App
