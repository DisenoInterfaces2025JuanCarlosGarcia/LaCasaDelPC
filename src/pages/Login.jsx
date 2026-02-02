import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const { userLogged, login } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogin = () => {
        login(); // Llama a la función de login del contexto
        navigate("/admin"); // Redirige al admin tras login
    };
    if (userLogged) {
        return (
            <div className="p-6 text-center">
                <h2 className="text-xl font-bold mb-4">Ya estás logueado</h2>
                <p>Puedes acceder al panel de administración.</p>
            </div>
        );
    }
    return (
        <>
            <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg text-center">
                <h2 className="text-xl font-bold mb-4">Login Simulado</h2>
                <button
                    onClick={handleLogin}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                    Login
                </button>
            </div>
        </>
    );
}
export default Login;