import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();        
        const form = e.target;

        const nameRegex = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
        if (!nameRegex.test(form.name.value)) {
            return toast.error("Por favor, ingresa un nombre válido.");
        }

        setLoading(true);

        // SIMULACIÓN DE ENVÍO
        setTimeout(() => {
            toast.success("Gracias por su consulta", {
                description: "Le responderemos a la brevedad."
            });

            form.reset();
            setLoading(false);

        }, 2000);
    };

    return (
        <form className="footer-contact-form" onSubmit={handleSubmit}>
            <div className="footer-input-group">
                <span className="footer-label">Nombre:</span>
                <input 
                    type="text"
                    name="name"
                    className="footer-framed-input"
                    required 
                />
            </div>

            <div className="footer-input-group">
                <span className="footer-label">Email:</span>
                <input 
                    type="email"
                    name="email"
                    className="footer-framed-input"
                    required 
                />
            </div>

            <div className="footer-input-group">
                <span className="footer-label">Mensaje:</span>
                <textarea 
                    name="message"
                    className="footer-framed-input footer-textarea"
                    required 
                />
            </div>

            <div className="footer-submit-container">
                <button 
                    type="submit"
                    className="footer-submit-btn"
                    disabled={loading}
                >
                    {loading ? 'Enviando...' : 'Enviar'}
                </button>
            </div>
        </form>
    );
}