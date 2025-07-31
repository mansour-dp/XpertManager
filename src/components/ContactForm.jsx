import { useState } from "react";
import { useForm } from "react-hook-form";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { fadeInUp, cardVariant, hoverScale } from "../constants/animationVariants";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        
        try {
            // Configuration EmailJS (vous devrez configurer vos clés)
            const templateParams = {
                from_name: data.name,
                from_email: data.email,
                phone: data.phone,
                message: data.message,
                to_name: "XpertManager",
            };

            // Remplacez par vos véritables clés EmailJS
            await emailjs.send(
                'YOUR_SERVICE_ID', // À remplacer
                'YOUR_TEMPLATE_ID', // À remplacer
                templateParams,
                'YOUR_PUBLIC_KEY' // À remplacer
            );
            
            toast.success("Message envoyé avec succès ! Nous vous répondrons rapidement.");
            reset();
        } catch (error) {
            console.error("Erreur lors de l'envoi:", error);
            toast.error("Erreur lors de l'envoi. Essayez WhatsApp ou appelez-nous directement.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-20" id="contact">
            <Toaster position="top-right" />
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Démarrons votre projet ensemble
                    </h2>
                    <p className="text-txt text-lg max-w-2xl mx-auto">
                        Prêt à transformer votre vision en réalité ? Contactez-nous pour discuter 
                        de votre projet et découvrir comment nous pouvons vous aider.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Formulaire */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-8"
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={hoverScale}
                    >
                        <h3 className="text-2xl font-bold text-primary mb-6">
                            Envoyez-nous un message
                        </h3>
                        
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nom complet *
                                    </label>
                                    <input
                                        type="text"
                                        {...register("name", { required: "Le nom est requis" })}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${
                                            errors.name ? "border-red-500" : "border-gray-300"
                                        }`}
                                        placeholder="Votre nom complet"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        {...register("email", {
                                            required: "L'email est requis",
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: "Email invalide"
                                            }
                                        })}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${
                                            errors.email ? "border-red-500" : "border-gray-300"
                                        }`}
                                        placeholder="votre@email.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Téléphone
                                </label>
                                <input
                                    type="tel"
                                    {...register("phone")}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                                    placeholder="+221 XX XXX XX XX"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    {...register("message", { required: "Le message est requis" })}
                                    rows={5}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none ${
                                        errors.message ? "border-red-500" : "border-gray-300"
                                    }`}
                                    placeholder="Décrivez votre projet en détail..."
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                )}
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-white font-bold py-4 px-6 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                whileHover={isSubmitting ? {} : { scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Envoi en cours...
                                    </span>
                                ) : (
                                    "Envoyer le message"
                                )}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Informations de contact */}
                    <motion.div
                        className="space-y-6"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-6">
                                Autres moyens de contact
                            </h3>
                            
                            <div className="space-y-6">
                                <motion.div 
                                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                                    whileHover={hoverScale}
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <span className="text-primary text-xl">📧</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Email</h4>
                                        <a href="mailto:contact@xpertmanager.com" className="text-primary hover:underline">
                                            contact@xpertmanager.com
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                                    whileHover={hoverScale}
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <span className="text-primary text-xl">📱</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Téléphone</h4>
                                        <a href="tel:+221775937679" className="text-primary hover:underline">
                                            +221 77 593 76 79
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.a
                                    href="https://wa.me/221775937679?text=Bonjour%2C%20je%20souhaite%20discuter%20d%27un%20projet%20avec%20XpertManager"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors"
                                    whileHover={hoverScale}
                                >
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <PiWhatsappLogoFill className="text-green-600 text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                                        <p className="text-green-600">Discussion immédiate</p>
                                    </div>
                                </motion.a>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-xl font-bold text-primary mb-4">
                                Pourquoi nous choisir ?
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center gap-2">
                                    <span className="text-primary">✓</span>
                                    Réponse sous 24h garantie
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-primary">✓</span>
                                    Devis gratuit et détaillé
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-primary">✓</span>
                                    Accompagnement personnalisé
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-primary">✓</span>
                                    Expertise technique avérée
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
