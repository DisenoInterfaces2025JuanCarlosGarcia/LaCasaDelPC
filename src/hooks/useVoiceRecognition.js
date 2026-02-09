import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Hook personalizado para simulacion de Natural User Interface (NUI) mediante voz.
 * Utiliza la Web Speech API para convertir voz en texto.
 * 
 * @returns {Object} { transcript, isListening, startListening, stopListening, error, hasSupport }
 */
const useVoiceRecognition = () => {
    const [transcript, setTranscript] = useState("");
    const [isListening, setIsListening] = useState(false);
    const [error, setError] = useState(null);
    const recognitionRef = useRef(null);

    // Verificar soporte del navegador
    const hasSupport = !!(window.SpeechRecognition || window.webkitSpeechRecognition);

    useEffect(() => {
        if (!hasSupport) {
            setError("Tu navegador no soporta el reconocimiento de voz.");
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();

        // Configuraciones basicas
        recognitionRef.current.continuous = false; // Parar despues de dictar una frase
        recognitionRef.current.interimResults = false; // Solo resultados finales
        recognitionRef.current.lang = "es-ES"; // Idioma español

        // Eventos
        recognitionRef.current.onresult = (event) => {
            const currentTranscript = event.results[0][0].transcript;
            setTranscript(currentTranscript);
            setIsListening(false);
        };

        recognitionRef.current.onerror = (event) => {
            console.error("Error en reconocimiento de voz:", event.error);
            setError(event.error);
            setIsListening(false);
        };

        recognitionRef.current.onend = () => {
            setIsListening(false);
        };

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    }, [hasSupport]);

    const startListening = useCallback(() => {
        if (!recognitionRef.current) return;

        setError(null);
        setTranscript("");
        try {
            recognitionRef.current.start();
            setIsListening(true);
        } catch (err) {
            console.error("Fallo al iniciar el microfono:", err);
            setError("Error al iniciar el microfono.");
        }
    }, []);

    const stopListening = useCallback(() => {
        if (!recognitionRef.current) return;
        recognitionRef.current.stop();
        setIsListening(false);
    }, []);

    return {
        transcript,
        isListening,
        startListening,
        stopListening,
        error,
        hasSupport
    };
};

export default useVoiceRecognition;
