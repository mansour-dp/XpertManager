import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BtnCustom } from "./components/Btn";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Loader from "./components/Loader";
import Gallery from "./components/Gallery";
import Guide from "./components/Guide";
import { WA_BUSINESS_NUMBER } from "./constants/info";
import { rubrics } from "./constants/rubrics";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ContactForm from "./components/ContactForm";
import MaintenancePage from "./components/MaintenancePage";

// 🔧 VARIABLE DE CONTRÔLE MAINTENANCE - Changez TRUE/FALSE ici
const IS_MAINTENANCE_MODE = false; // Mettre 'true' pour activer la maintenance

// Images - Assurez-vous d'avoir ces images dans vos assets
import PatchApplication from "./assets/images/xPertManager-image.png";

// Images du carrousel pour la page d'accueil
import XpertManager from "./assets/images/1-xPertManager-starting.png";
import Activity_creation from "./assets/images/2_0-Activity-creation.png";
import Activity_grannt from "./assets/images/2_1-Activity-Gannt.png";
import Activity_MPM from "./assets/images/2_2-Activity-MPM.png";
import Event_creation from "./assets/images/3_0-Event-creation.png";
import Event_visioConf from "./assets/images/3_1-Event-visioConf.png";
import Dashboard_Eisenhover from "./assets/images/4_Dashborad-Eisenhover-matrix.png";


// Animations
import {
	fadeInUp,
	staggerContainer,
	cardVariant,
	hoverScale,
	bannerAnimation,
	bannerContentAnimation,
} from "./constants/animationVariants";

const HomePage = () => {
	const [loading, setLoading] = useState(true);
	const [selectedRubric, setSelectedRubric] = useState(null);
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Images du carrousel pour la bannière
	const carouselImages = [
		XpertManager,
		Activity_creation,
		Activity_grannt,
		Activity_MPM,
		Event_creation,
		Event_visioConf,
		Dashboard_Eisenhover
	];

	const whatsApp =
		WA_BUSINESS_NUMBER +
		"?text=Bonjour,%20je%20souhaite%20discuter%20d%27un%20projet%20avec%20xPertManager";

	const openGallery = (rubric) => {
		console.log("Opening gallery for rubric:", rubric);
		setSelectedRubric(rubric);
		setIsGalleryOpen(true);
	};

	const closeGallery = () => {
		setIsGalleryOpen(false);
		setSelectedRubric(null);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, []);

	// Carrousel automatique des images
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => 
				(prevIndex + 1) % carouselImages.length
			);
		}, 5000); // Changement d'image toutes les 5 secondes
		
		return () => clearInterval(interval);
	}, [carouselImages.length]);

	if (loading) {
		return <Loader />;
	}

	return (
		<div className="flex flex-col w-full">
			{/* 0. HEADER */}
			<Header />

			{/* 1. HERO SECTION */}
			<motion.div
			className="md:h-[600px] sm:h-[500px] h-[450px] shadow-lg relative overflow-hidden"
			variants={bannerAnimation}
			initial="hidden"
			animate="visible"
			id="hero"
		>
			{/* Carrousel d'images en arrière-plan avec animations fluides */}
			{carouselImages.map((image, index) => (
				<motion.div
					key={index}
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{ 
						backgroundImage: `url(${image})`,
						filter: currentImageIndex === index ? 'brightness(0.85)' : 'brightness(0.7)'
					}}
					initial={{ opacity: 0, scale: 1.1 }}
					animate={{ 
						opacity: currentImageIndex === index ? 1 : 0,
						scale: currentImageIndex === index ? 1 : 1.1
					}}
					transition={{ 
						opacity: { duration: 1.2, ease: "easeInOut" },
						scale: { duration: 7, ease: "linear" }
					}}
				/>
			))}
			
			{/* Overlay élégant avec dégradé subtil */}
			<div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50 z-10"></div>
			<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10"></div>
			
			{/* Contenu centré */}
			<motion.div
				className="relative z-20 flex flex-col items-center justify-center gap-3 md:gap-5 h-full text-white p-4 md:p-5"
				variants={bannerContentAnimation}
			>
				{/* Conteneur avec fond semi-transparent pour le texte */}
				<div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl max-w-5xl mx-auto">
					<motion.h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-center max-w-4xl mx-auto drop-shadow-lg">
						xPertManager - Organisez mieux, gérez efficacement
					</motion.h1>
				</div>
				
				<motion.div
					whileHover={hoverScale}
					whileTap={{ scale: 0.98 }}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.8, duration: 0.4 }}
					className="mt-6"
				>
					<motion.a
						href="/guide"
						className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-accent to-accent/80 text-white font-bold rounded-xl py-4 px-8 mt-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/20"
						whileHover={{ 
							scale: 1.02,
							boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
						}}
						whileTap={{ scale: 0.98 }}
					>
						{/* Effet de brillance au survol */}
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
						
						{/* Icône avec animation */}
						<motion.span
							animate={{
								rotate: [0, 5, -5, 0],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								repeatDelay: 2,
								ease: "easeInOut"
							}}
							className="text-2xl relative z-10"
						>
							📚
						</motion.span>
						
						{/* Texte avec effet de transition */}
						<span className="relative z-10 group-hover:text-white/95 transition-colors duration-300">
							Découvrir le guide utilisateur
						</span>
						
						{/* Flèche animée */}
						<motion.svg 
							className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" 
							fill="none" 
							stroke="currentColor" 
							viewBox="0 0 24 24"
							animate={{
								x: [0, 3, 0],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								repeatDelay: 1,
								ease: "easeInOut"
							}}
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</motion.svg>
					</motion.a>
				</motion.div>
			</motion.div>
			
			{/* Indicateurs de navigation élégants en bas */}
			<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
				{carouselImages.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentImageIndex(index)}
						className={`transition-all duration-500 rounded-full ${
							currentImageIndex === index 
								? 'w-10 h-3 bg-white shadow-lg' 
								: 'w-3 h-3 bg-white/40 hover:bg-white/70 hover:scale-125'
						}`}
						aria-label={`Afficher l'image ${index + 1}`}
					/>
				))}
			</div>
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
							xPertManager
						</h2>
						<motion.div
							className="bg-card rounded-lg p-6 shadow-md mb-6"
							whileHover={hoverScale}
						>
							<h3 className="text-xl font-bold text-txtLight mb-2">
								Qu'est-ce que xPertManager ?
							</h3>
							<p className="text-txt mb-4">
								xPertManager est une plateforme intégrée de gestion,
								qui regroupe dans un environnement unique des fonctionnalités clés,
								indispensables pour toute organisation moderne : qu'elle soit publique,
								privée ou associative.
							</p>
						</motion.div>
						{/* <motion.div
							className="bg-card rounded-lg p-6 shadow-md"
							whileHover={hoverScale}
							transition={{ delay: 0.1 }}
						>
							<h3 className="text-xl font-bold text-primary mb-2">
								Pourquoi avoir développé xPertManager ?
							</h3>
							<p className="text-txt mb-4">
								Parce que nous ne devons plus dépendre systématiquement de solutions importées, souvent
								mal adaptées à nos contextes ou financièrement inaccessibles.
							</p>
							<p className="text-txt mb-4">
								L'objectif, à travers ce projet, est clair :
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
						</motion.div> */}
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
								alt="Équipe xPertManager au travail"
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
				id="services"
			>
				<div className="container mx-auto px-4">
					<motion.h2
						className="text-2xl md:text-3xl font-bold text-primary text-center mb-4"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						Fonctionnalités de xPertManager
					</motion.h2>
					<motion.p
	className="text-txt text-left mb-12 max-w-3xl"
	initial={{ opacity: 0 }}
	whileInView={{ opacity: 1 }}
	viewport={{ once: true }}
	transition={{ delay: 0.2, duration: 0.6 }}
>

	xPertManager permet une gestion de projets fluide et collaborative, à travers une interface intuitive, permettant de :
	<ul className="list-disc list-inside text-left max-w-xl mt-2 mb-2">
		<li>co-construire</li>
		<li>planifier</li>
		<li>suivre l’avancement</li>
		<li>gérer les priorités et respecter les délais</li>
	</ul>
	xPertManager intègre également :
	<ul className="list-disc list-inside text-left max-w-xl mt-2 mb-2">
		<li>des fonctions avancées de planification et d’ordonnancement des tâches</li>
		<li>une gestion des activités basée sur la matrice d’Eisenhower</li>
		<li>la gestion des ressources humaines et matérielles</li>
		<li>une messagerie instantanée</li>
		<li>l’envoi de messages texte</li>
		<li>des appels audio inter-ordinateurs</li>
		<li>des visioconférences</li>
		<li>la gestion d’évènements : planification, invitation, notification et gestion des participants</li>
		<li>un système de vote électronique pour une gouvernance participative, permettant des consultations et des prises de décision collectives</li>
	</ul>
	<br />
	Découvrez les fonctions principales du logiciel xPertManager en cliquant sur les rubriques ci-dessous.
</motion.p>
					
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
					>
						{rubrics.map((rubric) => (
							<motion.div
								key={rubric.id}
								className="bg-gradient-to-br from-white to-gray-50/80 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 cursor-pointer group relative overflow-hidden"
								variants={cardVariant}
								whileHover={{ y: -8, scale: 1.02 }}
								transition={{ duration: 0.3 }}
								onClick={() => openGallery(rubric)}
							>
								{/* Décoration d'arrière-plan */}
								<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
								<div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/3 to-transparent rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-125 transition-transform duration-700"></div>

								<div className="relative p-8">
									{/* En-tête avec numéro */}
									<div className="flex items-center justify-between mb-6">
										<div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
											<span className="text-white font-bold text-lg">
												{String(rubric.id).padStart(2, '0')}
											</span>
										</div>
										<div className="flex items-center text-primary/60 text-sm">
											<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
											</svg>
											{rubric.images.length} images
										</div>
									</div>

									{/* Titre */}
									<h3 className="font-bold text-2xl mb-4 text-dark group-hover:text-primary transition-colors duration-300 leading-tight">
										{rubric.title}
									</h3>

									{/* Description */}
									<p className="text-txt leading-relaxed text-base mb-6 line-clamp-4">
										{rubric.description}
									</p>
									
									{/* Bouton call-to-action */}
									<div className="flex items-center justify-between pt-4 border-t border-gray-100/50">
										<div className="flex items-center text-primary font-semibold group-hover:text-primary-dark transition-colors duration-300">
											<svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
											</svg>
										</div>
										
										{/* Points indicateurs */}
										<div className="flex space-x-1">
											{[...Array(3)].map((_, index) => (
												<div key={index} className={`w-2 h-2 rounded-full ${index < rubric.images.length ? 'bg-primary' : 'bg-primary/20'} group-hover:scale-125 transition-transform duration-300`}></div>
											))}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Composant Gallery pour afficher les galeries d'images */}
			{isGalleryOpen && selectedRubric && (
				<Gallery 
					isOpen={isGalleryOpen}
					rubric={selectedRubric} 
					onClose={closeGallery} 
				/>
			)}

			{/* 4. FORMULAIRE DE CONTACT */}
			<ContactForm />

			{/* 5. CALL TO ACTION */}
			

			{/* 9. PIED DE PAGE */}
			<Footer />

			{/* Bouton retour en haut */}
			<ScrollToTopButton />
		</div>
	);
};

const App = () => {
	// Si le mode maintenance est activé, afficher uniquement la page de maintenance
	if (IS_MAINTENANCE_MODE) {
		return <MaintenancePage />;
	}

	// Sinon, afficher le site normal
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/guide" element={<Guide />} />
			</Routes>
		</Router>
	);
};

export default App;
