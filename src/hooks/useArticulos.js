import { useRef, useEffect, useState } from "react";
import { getArticulo } from "../service/ArticulosService";



export const useArticulos = () => {
    const fetched = useRef(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchArticulos = async () => {
        try {
            setLoading(true);
            const response = await getArticulo();
            setData(response);
        } catch (err) {
            setError(err.message || "No se han podido obtener los resultados");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (fetched.current) return;
        fetched.current = true;
        fetchArticulos();
    }, []);

    return { data, loading, error, refetch: fetchArticulos };
};
