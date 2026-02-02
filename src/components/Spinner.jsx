import React from 'react';

const Spinner = () => {
    return (
        <div className="spinner-container" role="status" aria-live="polite">
            <div className="spinner"></div>
            <span className="sr-only">Cargando...</span>
        </div>
    );
};

export default Spinner;
