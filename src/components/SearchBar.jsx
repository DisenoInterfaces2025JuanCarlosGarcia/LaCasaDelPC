import React, { useState, useEffect, useRef } from 'react';
import useVoiceRecognition from '../hooks/useVoiceRecognition';

/**
 * Componente de barra de búsqueda mejorado con NUI (Voz y Gestos).
 * 
 * @param {Object} props
 * @param {string} props.searchTerm - El término de búsqueda actual.
 * @param {function} props.onSearchChange - Función para manejar el cambio en la búsqueda.
 * @param {string} props.placeholder - Texto de placeholder para el input.
 */
function SearchBar({ searchTerm, onSearchChange, placeholder = "Buscar..." }) {
    const {
        transcript,
        isListening,
        startListening,
        stopListening,
        hasSupport,
        error
    } = useVoiceRecognition();

    // Ref para detectar gestos de deslizamiento
    const touchStartX = useRef(null);
    const containerRef = useRef(null);
    const [swipeMessage, setSwipeMessage] = useState(false);

    // Actualizar búsqueda cuando el dictado termina
    useEffect(() => {
        if (transcript) {
            onSearchChange(transcript);
        }
    }, [transcript, onSearchChange]);

    // Manejo de gestos táctiles (Swipe Horizontal)
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;

        const touchEndX = e.changedTouches[0].clientX;
        const diffX = touchEndX - touchStartX.current;
        const threshold = 50; // Pixeles necesarios para activar

        // Deslizamiento hacia la derecha (swipe right)
        if (diffX > threshold && !isListening) {
            startListening();
        }

        touchStartX.current = null;
    };

    // Mostrar mensaje de ayuda para móviles
    useEffect(() => {
        const checkMobile = () => {
            if (window.innerWidth < 768) {
                setSwipeMessage(true);
            } else {
                setSwipeMessage(false);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div
            ref={containerRef}
            className="mb-8 w-full max-w-lg mx-auto relative group"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <label htmlFor="search-input" className="sr-only">
                {placeholder}
            </label>

            <div className="relative flex items-center w-full">
                <input
                    id="search-input"
                    type="text"
                    placeholder={isListening ? "Escuchando..." : placeholder}
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className={`w-full p-3 pr-12 border-2 rounded-lg shadow-inner focus:outline-none focus:ring-2 transition duration-150 ease-in-out ${isListening
                        ? "border-red-500 ring-2 ring-red-200 animate-pulse"
                        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        }`}
                    aria-label={placeholder}
                />

                <button
                    type="button"
                    disabled={!hasSupport}
                    onClick={isListening ? stopListening : startListening}
                    className={`absolute right-2 p-2 rounded-full transition-colors ${!hasSupport
                        ? "opacity-30 cursor-not-allowed text-gray-400"
                        : isListening
                            ? "bg-red-500 text-white animate-bounce"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        }`}
                    title={
                        !hasSupport
                            ? "Tu navegador no soporta búsqueda por voz (se recomienda Chrome/Edge)"
                            : isListening
                                ? "Detener dictado"
                                : "Buscar por voz"
                    }
                >
                    <span className="sr-only">Voz</span>
                    {isListening ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mensajes visuales de la NUI */}
            {!hasSupport && (
                <p className="text-center text-[10px] text-gray-400 mt-2 italic">
                    NUI Voz no soportada en este navegador
                </p>
            )}

            {hasSupport && swipeMessage && !isListening && (
                <p className="text-center text-xs text-blue-500 mt-2 animate-pulse font-medium">
                    Pulsa el icono para buscar por voz
                </p>
            )}

            {isListening && (
                <p className="text-center text-xs text-red-500 mt-2 font-bold uppercase tracking-wider">
                    Escuchando voz... hable claro
                </p>
            )}

            {error && (
                <p className="text-center text-xs text-orange-600 mt-2">
                    {error === 'not-allowed' ? 'Permiso de micrófono denegado' : `Error: ${error}`}
                </p>
            )}
        </div>
    );
}

export default SearchBar;
