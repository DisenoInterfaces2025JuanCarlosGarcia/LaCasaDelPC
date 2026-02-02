import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/productos";

const mapProductoFromAPI = (producto) => ({
    id: producto._id || producto.id,
    nombre: producto.name || producto.nombre,
    descripcion: producto.description || producto.descripcion,
    precio: producto.price || producto.precio,
    puntuacion: producto.puntuacion,
    imagen: producto.photo || producto.photoUrl || producto.image || producto.imagen,
    categoria: producto.category || producto.categoria,
});

export const createArticulo = async (data) => {
    try {
        const response = await axios.post(API_URL, data);
        const newData = response.data.savedProducto || response.data;
        return mapProductoFromAPI(newData);
    } catch (error) {
        console.error("Error al guardar el artículo:", error);
        throw new Error(error.response?.data?.message || error.response?.data?.mensaje || "Error al guardar el articulo");
    }
};

export const getArticulo = async () => {
    try {
        const response = await axios.get(API_URL);
        // getAllProducts devuelve { data: [productos] }
        const newData = response.data.data || response.data;

        if (!Array.isArray(newData)) {
            console.warn("La API no devolvió un array en 'data':", newData);
            return [];
        }

        return newData.map(mapProductoFromAPI);
    } catch (error) {
        console.error("Error al cargar los datos en el servicio:", error);
        throw new Error(error.response?.data?.message || error.response?.data?.mensaje || "Error al cargar los datos");
    }
}

export const getArticuloById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        const newData = response.data.data ?? response.data;
        return mapProductoFromAPI(newData);
    } catch (error) {

        throw new Error(error.response?.data?.message || "Error al cargar el artículo");
    }
}

export const updateArticulo = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, data);
        const newData = response.data.data || response.data;
        return mapProductoFromAPI(newData);
    } catch (error) {
        console.error("Error al actualizar el articulo:", error);
        throw new Error(error.response?.data?.message || error.response?.data?.mensaje || "Error al actualizar el articulo")
    }
}

export const deleteArticulo = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        // deleteOneProduct devuelve { message, data: [productos_actualizados] }
        const newData = response.data;
        return newData;
    } catch (error) {
        console.error("Error al eliminar el articulo:", error);
        throw new Error(error.response?.data?.message || error.response?.data?.mensaje || "Error al eliminar el articulo")
    }
}

export const eliminarProductos = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error("error al borrar");
        }

        const result = await response.json();
        const data = result.data
        return data
    } catch (error) {
        console.error('Error en eliminarProductos:', error);
        throw error;
    }
};
