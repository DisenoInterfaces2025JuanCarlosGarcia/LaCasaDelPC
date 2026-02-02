import { useState, useEffect, useRef } from "react";
import { getArticuloById } from "../service/ArticulosService";



export const useArticulo = (id) => {
    const fetched = useRef(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (fetched.current) return;
        fetched.current = true;

        const Articulo = async () => {
            try {
                setLoading(true);
                const response = await getArticuloById(id);
                setData(response);
            } catch (err) {
                setError(err.message || "No se ha podido obtener el artículo");
            } finally {
                setLoading(false);
            }
        };

        Articulo();
    }, [id]);

    return { data, loading, error };
};