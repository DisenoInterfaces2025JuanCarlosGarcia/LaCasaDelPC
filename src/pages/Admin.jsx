import { useState, useRef } from "react";
import { useCreateArticulo } from "../hooks/useCreateArticulo";
import { useNavigate } from "react-router-dom";



/**
 * @file Admin.jsx
 * @description
 * Componente que representa el panel de administración.
 * Permite crear un artículo mediante un formulario con validaciones básicas
 * antes de enviar los datos.
 */
function Admin() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        photo: "",
        category: "",
    });

    const navigate = useNavigate();

    const { addArticulo, loading, errorHook } = useCreateArticulo()



    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        // 1. Validaciones previas
        if (formData.name.length < 5) {
            setError("El nombre tiene que ser mayor que 5 caracteres");
            return;
        }
        if (formData.price === "") {
            setError("El precio es obligatorio");
            return;
        }
        const precio = Number(formData.price);
        if (precio <= 0) {
            setError("El precio tiene que ser mayor que 0");
            return;
        }
        if (!formData.photo.startsWith("http")) {
            setError("La foto tiene que empezar por http");
            return;
        }
        if (formData.category === "") {
            setError("Debes seleccionar una categoría");
            return;
        }

        /*
        const ok = await addArticulo(formData);

        if (!ok) {
            setError(errorHook || "No se ha podido guardar el artículo. Revisa la consola.");
            return;
        }
            */
        const ok = await addArticulo(formData)
        if (!ok) {
            setError("no se ha creado el articulo")
        }

        console.log("Datos enviados:", formData);
        alert("¡Artículo guardado con éxito!");
        navigate("/catalogo");


        setFormData({
            name: "",
            description: "",
            price: "",
            photo: "",
            category: "",
        });
    };

    return (
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-10">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Panel de Administración</h1>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre del articulo</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={!!error}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                        minLength={5}
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                    <textarea
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        aria-invalid={!!error}
                        rows={3}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                    />
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Precio del articulo</label>
                    <input
                        type="number"
                        id="price"
                        value={formData.price}
                        onChange={handleChange}
                        aria-invalid={!!error}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                        min={0}
                    />
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                    <select
                        id="category"
                        value={formData.category}
                        onChange={handleChange}
                        aria-invalid={!!error}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none bg-white"
                        required
                    >
                        <option value="" disabled>Selecciona una categoría</option>
                        <option value="Portátiles">Portátiles</option>
                        <option value="Sobremesa">Sobremesa</option>
                        <option value="Componentes">Componentes</option>
                        <option value="Periféricos">Periféricos</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">URL de la Foto</label>
                    <input
                        type="text"
                        id="photo"
                        value={formData.photo}
                        onChange={handleChange}
                        aria-invalid={!!error}
                        placeholder="https://ejemplo.com/foto.jpg"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                    />
                </div>
                <div>
                    {error && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2"> {error}</p>}
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-200 disabled:bg-gray-400"
                >
                    {loading ? "Enviando..." : "Enviar"}
                </button>
            </form>
        </div>
    );
}

export default Admin;

