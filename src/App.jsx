import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { BtnCustom } from "./components/Btn";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Loader from "./components/Loader";
import { WA_BUSINESS_NUMBER } from "./constants/info";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ContactForm from "./components/ContactForm";

// Images - Assurez-vous d'avoir ces images dans vos assets
import BannerHome from "./assets/images/banner.jpg";
import PatchApplication from "./assets/images/propos.png";


// Animations
import {
	fadeInUp,
	staggerContainer,
	cardVariant,
	hoverScale,
	bannerAnimation,
	bannerContentAnimation,
} from "./constants/animationVariants";

const App = () => {
	const [loading, setLoading] = useState(true);
	const [selectedImage, setSelectedImage] = useState(null);

	const whatsApp =
		WA_BUSINESS_NUMBER +
		"?text=Bonjour,%20je%20souhaite%20discuter%20d%27un%20projet%20avec%20XpertManager";

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<div className="flex flex-col w-full">
			{/* 0. HEADER */}
			<Header />

			{/* 1. HERO SECTION */}
			<motion.div
				className="bg-cover bg-center bg-no-repeat md:h-[700px] sm:h-[600px] h-[500px] shadow-lg relative"
				style={{ backgroundImage: `url(${BannerHome})` }}
				variants={bannerAnimation}
				initial="hidden"
				animate="visible"
				id="hero"
			>
				{/* Overlay professionnel pour la lisibilité */}
				<div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
				<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
				
				<motion.div
					className="relative flex flex-col items-center justify-center gap-3 md:gap-5 h-full text-white p-4 md:p-5"
					variants={bannerContentAnimation}
				>
					{/* Conteneur avec fond semi-transparent pour le texte */}
					<div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl max-w-5xl mx-auto">
						<motion.h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-center max-w-4xl mx-auto drop-shadow-lg">
							Donnez vie à votre organisation avec XpertManager
						</motion.h1>
						<p className="text-sm sm:text-base md:text-lg text-center max-w-3xl mx-auto mt-4 text-gray-100 drop-shadow-md">
							XpertManager - Solutions numériques puissantes pour booster la performance, l'innovation et la collaboration dans votre organisation.
						</p>
					</div>
					
					<motion.div
						whileHover={hoverScale}
						whileTap={{ scale: 0.98 }}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.8, duration: 0.4 }}
						className="mt-6"
					>
						<BtnCustom
							to={whatsApp}
							className="mt-2 sm:mt-4 flex items-center gap-2 text-lg px-8 py-3"
						>
							<motion.span
								animate={{
									rotate: [0, 10, -10, 10, 0],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatDelay: 3,
								}}
							>
								<PiWhatsappLogoFill size={24} />
							</motion.span>
							Discuter de votre projet
						</BtnCustom>
					</motion.div>
				</motion.div>
			</motion.div>

			{/* 2. À PROPOS */}
			<motion.section
				className="container mx-auto px-4 py-12 md:py-16"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				variants={fadeInUp}
				id="about"
			>
				<div className="flex flex-col md:flex-row gap-8 items-center">
					<motion.div className="md:w-1/2" variants={fadeInUp}>
						<h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
							XpertManager
						</h2>
						<motion.div
							className="bg-card rounded-lg p-6 shadow-md mb-6"
							whileHover={hoverScale}
						>
							<h3 className="text-xl font-bold text-txtLight mb-2">
								Qu'est-ce que XpertManager ?
							</h3>
							<p className="text-txt mb-4">
								XpertManager est une plateforme intégrée de gestion,
								qui regroupe dans un environnement unique des fonctionnalités clés,
								indispensables pour toute organisation moderne : qu'elle soit publique,
								privée ou associative.
							</p>
						</motion.div>
						<motion.div
							className="bg-card rounded-lg p-6 shadow-md"
							whileHover={hoverScale}
							transition={{ delay: 0.1 }}
						>
							<h3 className="text-xl font-bold text-primary mb-2">
								Pourquoi avoir développé XpertManager ?
							</h3>
							<p className="text-txt mb-4">
								Parce que nous ne devons plus dépendre systématiquement de solutions importées, souvent
								mal adaptées à nos contextes ou financièrement inaccessibles.
							</p>
							<p className="text-txt mb-4">
								Mon objectif, à travers ce projet, est clair :
							</p>
							<ul className="text-txt space-y-2">
								<li className="flex items-start">
									<span className="text-primary mr-2">•</span>
									Valoriser nos compétences locales
								</li>
								<li className="flex items-start">
									<span className="text-primary mr-2">•</span>
									Répondre à nos besoins spécifiques
								</li>
								<li className="flex items-start">
									<span className="text-primary mr-2">•</span>
									Offrir à nos communautés des outils puissants, accessibles, et conçus sur mesure
								</li>
							</ul>
						</motion.div>
					</motion.div>
					<motion.div
						className="md:w-1/2"
						variants={fadeInUp}
					>
						<motion.div
							className="relative overflow-hidden rounded-lg shadow-lg"
							whileHover={{ scale: 1.01 }}
							transition={{ duration: 0.4, ease: "easeOut" }}
						>
							<img
								src={PatchApplication}
								alt="Équipe XpertManager au travail"
								className="w-full h-auto object-cover"
								loading="lazy"
							/>
							{/* Overlay subtil pour effet professionnel */}
							<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
						</motion.div>
					</motion.div>
				</div>
			</motion.section>

			{/* 3. GALERIE FONCTIONNALITÉS */}
			<section
				className="bg-primary/5 py-12 md:py-16 w-full"
				id="fonctionnalites"
			>
				<div className="container mx-auto px-4">
					<motion.h2
						className="text-2xl md:text-3xl font-bold text-primary text-center mb-4"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						Fonctionnalités XpertManager
					</motion.h2>
					<motion.p
						className="text-txt text-center mb-12 max-w-3xl mx-auto"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.6 }}
					>
						Découvrez les puissantes fonctionnalités de notre plateforme de gestion intégrée.
						Cliquez sur les images pour les voir en détail.
					</motion.p>
					
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
					>
						{/* Fonctionnalité 1 - Dashboard */}
						<motion.div
							className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
							variants={cardVariant}
							whileHover={{ y: -8, scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<div 
								className="relative group cursor-pointer"
								onClick={() => setSelectedImage({
									src: PatchApplication, // Remplacez par votre image
									title: "Dashboard Principal",
									description: "Interface principale de gestion avec vue d'ensemble de toutes vos données et indicateurs clés de performance."
								})}
							>
								<img
									src={PatchApplication} // Remplacez par votre image de dashboard
									alt="Dashboard XpertManager"
									className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
									loading="lazy"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<span className="text-primary text-lg">🔍</span>
								</div>
							</div>
							<div className="p-6">
								<h3 className="font-bold text-xl mb-3 text-dark">Dashboard Principal</h3>
								<p className="text-txt leading-relaxed">
									Interface principale de gestion avec vue d'ensemble de toutes vos données 
									et indicateurs clés de performance en temps réel.
								</p>
							</div>
						</motion.div>

						{/* Fonctionnalité 2 - Gestion des utilisateurs */}
						<motion.div
							className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
							variants={cardVariant}
							whileHover={{ y: -8, scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<div 
								className="relative group cursor-pointer"
								onClick={() => setSelectedImage({
									src: PatchApplication, // Remplacez par votre image
									title: "Gestion des Utilisateurs",
									description: "Module complet de gestion des utilisateurs avec rôles, permissions et suivi des activités."
								})}
							>
								<img
									src={PatchApplication} // Remplacez par votre image de gestion utilisateurs
									alt="Gestion des utilisateurs XpertManager"
									className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
									loading="lazy"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<span className="text-primary text-lg">🔍</span>
								</div>
							</div>
							<div className="p-6">
								<h3 className="font-bold text-xl mb-3 text-dark">Gestion des Utilisateurs</h3>
								<p className="text-txt leading-relaxed">
									Module complet de gestion des utilisateurs avec attribution de rôles, 
									permissions personnalisées et suivi détaillé des activités.
								</p>
							</div>
						</motion.div>

						{/* Fonctionnalité 3 - Rapports et Analytics */}
						<motion.div
							className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
							variants={cardVariant}
							whileHover={{ y: -8, scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<div 
								className="relative group cursor-pointer"
								onClick={() => setSelectedImage({
									src: PatchApplication, // Remplacez par votre image
									title: "Rapports et Analytics",
									description: "Système de reporting avancé avec graphiques interactifs et export de données personnalisé."
								})}
							>
								<img
									src={PatchApplication} // Remplacez par votre image de rapports
									alt="Rapports XpertManager"
									className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
									loading="lazy"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<span className="text-primary text-lg">🔍</span>
								</div>
							</div>
							<div className="p-6">
								<h3 className="font-bold text-xl mb-3 text-dark">Rapports et Analytics</h3>
								<p className="text-txt leading-relaxed">
									Système de reporting avancé avec graphiques interactifs, 
									tableaux de bord personnalisables et export de données.
								</p>
							</div>
						</motion.div>

						{/* Fonctionnalité 4 - Gestion des projets */}
						<motion.div
							className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
							variants={cardVariant}
							whileHover={{ y: -8, scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<div 
								className="relative group cursor-pointer"
								onClick={() => setSelectedImage({
									src: PatchApplication, // Remplacez par votre image
									title: "Gestion des Projets",
									description: "Outil complet de gestion de projets avec planification, suivi et collaboration en équipe."
								})}
							>
								<img
									src={PatchApplication} // Remplacez par votre image de gestion projets
									alt="Gestion des projets XpertManager"
									className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
									loading="lazy"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<span className="text-primary text-lg">🔍</span>
								</div>
							</div>
							<div className="p-6">
								<h3 className="font-bold text-xl mb-3 text-dark">Gestion des Projets</h3>
								<p className="text-txt leading-relaxed">
									Outil complet de gestion de projets avec planification des tâches, 
									suivi du progrès et collaboration en temps réel.
								</p>
							</div>
						</motion.div>

						{/* Fonctionnalité 5 - Communication */}
						<motion.div
							className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
							variants={cardVariant}
							whileHover={{ y: -8, scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<div 
								className="relative group cursor-pointer"
								onClick={() => setSelectedImage({
									src: PatchApplication, // Remplacez par votre image
									title: "Module Communication",
									description: "Système de messagerie interne avec notifications et gestion des annonces."
								})}
							>
								<img
									src={PatchApplication} // Remplacez par votre image de communication
									alt="Communication XpertManager"
									className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
									loading="lazy"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<span className="text-primary text-lg">🔍</span>
								</div>
							</div>
							<div className="p-6">
								<h3 className="font-bold text-xl mb-3 text-dark">Module Communication</h3>
								<p className="text-txt leading-relaxed">
									Système de messagerie interne intégré avec notifications push, 
									gestion des annonces et communication d'équipe.
								</p>
							</div>
						</motion.div>

						{/* Fonctionnalité 6 - Configuration */}
						<motion.div
							className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
							variants={cardVariant}
							whileHover={{ y: -8, scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<div 
								className="relative group cursor-pointer"
								onClick={() => setSelectedImage({
									src: PatchApplication, // Remplacez par votre image
									title: "Panneau de Configuration",
									description: "Interface d'administration complète pour personnaliser et configurer votre plateforme."
								})}
							>
								<img
									src={PatchApplication} // Remplacez par votre image de configuration
									alt="Configuration XpertManager"
									className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
									loading="lazy"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<span className="text-primary text-lg">🔍</span>
								</div>
							</div>
							<div className="p-6">
								<h3 className="font-bold text-xl mb-3 text-dark">Panneau de Configuration</h3>
								<p className="text-txt leading-relaxed">
									Interface d'administration complète pour personnaliser 
									votre plateforme selon vos besoins spécifiques.
								</p>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Modal pour agrandir les images */}
			{selectedImage && (
				<motion.div
					className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setSelectedImage(null)}
				>
					<motion.div
						className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden"
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						onClick={(e) => e.stopPropagation()}
					>
						<div className="relative">
							<img
								src={selectedImage.src}
								alt={selectedImage.title}
								className="w-full max-h-[60vh] object-contain"
							/>
							<button
								onClick={() => setSelectedImage(null)}
								className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
							>
								✕
							</button>
						</div>
						<div className="p-6">
							<h3 className="text-2xl font-bold text-dark mb-3">{selectedImage.title}</h3>
							<p className="text-txt leading-relaxed">{selectedImage.description}</p>
						</div>
					</motion.div>
				</motion.div>
			)}

			{/* 4. FORMULAIRE DE CONTACT */}
			<ContactForm />

			{/* 5. CALL TO ACTION */}
			<section className="container mx-auto px-4 py-12 md:py-16 text-center">
				<motion.h2
					className="text-2xl md:text-3xl font-bold text-primary mb-6"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					Prêt à transformer votre entreprise ?
				</motion.h2>

				<motion.p
					className="text-txt mb-8 max-w-2xl mx-auto"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2, duration: 0.6 }}
				>
					Rejoignez les entreprises qui ont fait confiance à XpertManager 
					pour leur transformation digitale et leur croissance.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, duration: 0.6 }}
					whileHover={hoverScale}
					whileTap={{ scale: 0.98 }}
				>
					<BtnCustom
						to={whatsApp}
						className="mx-auto px-8 py-3 text-lg flex items-center gap-3 justify-center"
					>
						<motion.span
							animate={{
								rotate: [0, 10, -10, 10, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatDelay: 3,
							}}
						>
							<PiWhatsappLogoFill size={24} />
						</motion.span>
						Démarrer un projet maintenant
					</BtnCustom>
				</motion.div>

				{/* Badges de réassurance */}
				<motion.div
					className="flex flex-wrap justify-center gap-4 mt-8"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.div
						className="bg-primary/10 text-primary text-sm font-bold py-2 px-4 rounded-full"
						variants={cardVariant}
						whileHover={{
							scale: 1.1,
							backgroundColor: "rgba(32, 161, 146, 0.15)",
						}}
					>
						Expertise certifiée
					</motion.div>
					<motion.div
						className="bg-secondary/20 text-dark text-sm font-bold py-2 px-4 rounded-full"
						variants={cardVariant}
						whileHover={{
							scale: 1.1,
							backgroundColor: "rgba(237, 198, 106, 0.3)",
						}}
					>
						Support 24/7
					</motion.div>
					<motion.div
						className="bg-accent/10 text-accent text-sm font-bold py-2 px-4 rounded-full"
						variants={cardVariant}
						whileHover={{
							scale: 1.1,
							backgroundColor: "rgba(255, 76, 12, 0.15)",
						}}
					>
						Résultats garantis
					</motion.div>
				</motion.div>
			</section>

			{/* 9. PIED DE PAGE */}
			<Footer />

			{/* Bouton retour en haut */}
			<ScrollToTopButton />
		</div>
	);
};

export default App;
