import { useState } from "react";
import { createArticulo } from "../service/ArticulosService";


export const useCreateArticulo = () => {
    const [loading, setLoading] = useState(false);
    const [errorHook, setError] = useState(null);

    const addArticulo = async (data) => {
        try {
            setLoading(true);
            setError(null);
            await createArticulo(data);
            return true;
        } catch (error) {
            setError(error.message || "No se ha podido guardar el artículo");
            return false;
        } finally {
            setLoading(false);
        }
    };
    return { addArticulo, loading, errorHook }
}



