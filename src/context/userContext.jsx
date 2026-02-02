import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    // Estado para el login del usuario
    const [userLogged, setUserLogged] = useState(false);

    // Función para hacer login (simulado)
    const login = () => {
        setUserLogged(true);
    };

    // Función para hacer logout
    const logout = () => {
        setUserLogged(false);
    };

    return (
        <UserContext.Provider value={{ userLogged, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
export { UserContext };