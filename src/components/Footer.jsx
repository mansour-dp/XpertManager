import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Logo from "../assets/images/logo.png";
import InstagramLogo from "../assets/images/instagram.png";
import LinkedinLogo from "../assets/images/linkedin.png";
import WhatsappLogo from "../assets/images/whatsapp.png";
import { WA_BUSINESS_NUMBER } from "../constants/info";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { 
    fadeInUp, 
    fadeInLeft, 
    fadeInRight, 
    staggerContainer, 
    hoverScale,
    listItemVariant,
    footerLinkVariant,
    socialIconVariant 
} from "../constants/animationVariants";

export function Footer() {
    // PLACEHOLDERS POUR LES LIENS RÉSEAUX SOCIAUX - À REMPLACER PAR VOS VRAIS LIENS
    const instagramLink = "https://instagram.com/votre_compte_instagram"; // Remplacez par votre lien Instagram
    const linkedinLink = "https://linkedin.com/company/votre_entreprise"; // Remplacez par votre lien LinkedIn
    const whatsApp = WA_BUSINESS_NUMBER + "?text=Bonjour,%20je%20souhaite%20discuter%20d%27un%20projet%20avec%20XpertManager";

    // Fonction pour faire défiler vers une section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <motion.footer 
            className="bg-gradient-to-tr from-dark/95 via-dark to-dark/90 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
        >
            {/* Motifs décoratifs subtils */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-2xl"></div>
            </div>
            <div className="relative text-white py-12">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={staggerContainer}
                >
                    {/* Logo et Description */}
                    <motion.div variants={fadeInLeft} className="lg:col-span-2">
                        <motion.div 
                            className="flex items-center gap-3 mb-4"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                className="w-12 h-12 object-contain"
                                loading="lazy"
                                src={Logo}
                                alt="Logo XpertManager"
                            />
                            <h2 className="text-2xl font-bold">XpertManager</h2>
                        </motion.div>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Votre partenaire digital pour transformer vos idées en solutions innovantes. 
                            Nous accompagnons les entreprises dans leur transformation numérique avec 
                            expertise et passion.
                        </p>
                        
                        {/* Informations de contact */}
                        <div className="space-y-3">
                            <motion.div 
                                className="flex items-center gap-3 text-gray-300"
                                whileHover={{ x: 5 }}
                            >
                                <MdEmail className="text-secondary" />
                                <a href="mailto:contact@xpertmanager.com" className="hover:text-white">
                                    contact@xpertmanager.com
                                </a>
                            </motion.div>
                            <motion.div 
                                className="flex items-center gap-3 text-gray-300"
                                whileHover={{ x: 5 }}
                            >
                                <MdPhone className="text-secondary" />
                                <a href="tel:+221775937679" className="hover:text-white">
                                    +221 77 593 76 79
                                </a>
                            </motion.div>
                            <motion.div 
                                className="flex items-center gap-3 text-gray-300"
                                whileHover={{ x: 5 }}
                            >
                                <MdLocationOn className="text-secondary" />
                                <span>Dakar, Sénégal</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-xl font-bold mb-4 text-secondary">Nos Services</h3>
                        <motion.div className="space-y-2" variants={staggerContainer}>
                            <motion.div variants={listItemVariant}>
                                <button 
                                    onClick={() => scrollToSection('services')} 
                                    className="text-gray-300 hover:text-white transition-colors block text-left"
                                >
                                    <motion.span whileHover="hover" variants={footerLinkVariant} className="inline-block">
                                        Développement Web
                                    </motion.span>
                                </button>
                            </motion.div>
                            <motion.div variants={listItemVariant}>
                                <button 
                                    onClick={() => scrollToSection('services')} 
                                    className="text-gray-300 hover:text-white transition-colors block text-left"
                                >
                                    <motion.span whileHover="hover" variants={footerLinkVariant} className="inline-block">
                                        Applications Mobile
                                    </motion.span>
                                </button>
                            </motion.div>
                            <motion.div variants={listItemVariant}>
                                <button 
                                    onClick={() => scrollToSection('services')} 
                                    className="text-gray-300 hover:text-white transition-colors block text-left"
                                >
                                    <motion.span whileHover="hover" variants={footerLinkVariant} className="inline-block">
                                        Marketing Digital
                                    </motion.span>
                                </button>
                            </motion.div>
                            <motion.div variants={listItemVariant}>
                                <button 
                                    onClick={() => scrollToSection('services')} 
                                    className="text-gray-300 hover:text-white transition-colors block text-left"
                                >
                                    <motion.span whileHover="hover" variants={footerLinkVariant} className="inline-block">
                                        Conseil Tech
                                    </motion.span>
                                </button>
                            </motion.div>
                            <motion.div variants={listItemVariant}>
                                <button 
                                    onClick={() => scrollToSection('services')} 
                                    className="text-gray-300 hover:text-white transition-colors block text-left"
                                >
                                    <motion.span whileHover="hover" variants={footerLinkVariant} className="inline-block">
                                        Design UI/UX
                                    </motion.span>
                                </button>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Liens rapides et Réseaux sociaux */}
                    <motion.div variants={fadeInRight}>
                        <h3 className="text-xl font-bold mb-4 text-secondary">Liens Rapides</h3>
                        <motion.div className="space-y-2 mb-6" variants={staggerContainer}>
                            <motion.div variants={listItemVariant}>
                                <button 
                                    onClick={() => scrollToSection('hero')} 
                                    className="text-gray-300 hover:text-white transition-colors block text-left"
                                >
                                    <motion.span whileHover="hover" variants={footerLinkVariant} className="inline-block">
                                        Accueil
                                    </motion.span>
                                </button>
                            </motion.div>
                            <motion.div variants={listItemVariant}>
                                <button 
                                    onClick={() => scrollToSection('about')} 
                                    className="text-gray-300 hover:text-white transition-colors block text-left"
                                >
                                    <motion.span whileHover="hover" variants={footerLinkVariant} className="inline-block">
                                        À propos
                                    </motion.span>
                                </button>
                            </motion.div>
                            <motion.div variants={listItemVariant}>
                                <button 
                                    onClick={() => scrollToSection('contact')} 
                                    className="text-gray-300 hover:text-white transition-colors block text-left"
                                >
                                    <motion.span whileHover="hover" variants={footerLinkVariant} className="inline-block">
                                        Contact
                                    </motion.span>
                                </button>
                            </motion.div>
                        </motion.div>

                        {/* Réseaux sociaux */}
                        <h4 className="text-lg font-semibold mb-3 text-secondary">Suivez-nous</h4>
                        <motion.div 
                            className="flex gap-4"
                            variants={staggerContainer}
                        >
                            <motion.a
                                href={whatsApp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                                variants={socialIconVariant}
                                whileHover="hover"
                                title="WhatsApp"
                            >
                                <img src={WhatsappLogo} alt="WhatsApp" className="w-full h-full object-contain filter brightness-90 hover:brightness-100" />
                            </motion.a>
                            <motion.a
                                href={instagramLink} // PLACEHOLDER - Remplacez par votre lien Instagram
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                                variants={socialIconVariant}
                                whileHover="hover"
                                title="Instagram"
                            >
                                <img src={InstagramLogo} alt="Instagram" className="w-full h-full object-contain filter brightness-90 hover:brightness-100" />
                            </motion.a>
                            <motion.a
                                href={linkedinLink} // PLACEHOLDER - Remplacez par votre lien LinkedIn
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                                variants={socialIconVariant}
                                whileHover="hover"
                                title="LinkedIn"
                            >
                                <img src={LinkedinLogo} alt="LinkedIn" className="w-full h-full object-contain filter brightness-90 hover:brightness-100" />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Séparateur */}
                <motion.div 
                    className="border-t border-gray-700 mt-8 pt-8"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <motion.p 
                            className="text-gray-400 text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            &copy; {new Date().getFullYear()} XpertManager. Tous droits réservés.
                        </motion.p>
                        <motion.div 
                            className="flex gap-6 text-sm text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <motion.a 
                                href="#" 
                                className="hover:text-white transition-colors"
                                whileHover={hoverScale}
                            >
                                Politique de confidentialité
                            </motion.a>
                            <motion.a 
                                href="#" 
                                className="hover:text-white transition-colors"
                                whileHover={hoverScale}
                            >
                                Conditions d'utilisation
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            </div>
        </motion.footer>
    );
}
