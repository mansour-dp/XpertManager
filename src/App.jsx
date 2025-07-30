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
					<div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl">
						<motion.h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-center max-w-4xl drop-shadow-lg">
							Transformez vos idées en solutions digitales exceptionnelles
						</motion.h1>
						<p className="text-sm sm:text-base md:text-lg text-center max-w-2xl mt-4 text-gray-100 drop-shadow-md">
							XpertManager - Votre partenaire digital pour développer, innover et réussir 
							dans l'écosystème numérique d'aujourd'hui
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
							XpertManager - Votre partenaire digital
						</h2>
						<motion.div
							className="bg-card rounded-lg p-6 shadow-md mb-6"
							whileHover={hoverScale}
						>
							<h3 className="text-xl font-bold text-txtLight mb-2">
								Qui sommes-nous ?
							</h3>
							<p className="text-txt mb-4">
								XpertManager est une agence digitale spécialisée dans l'accompagnement 
								des entreprises vers leur transformation numérique. Nous combinons 
								expertise technique, créativité et vision stratégique pour donner 
								vie à vos projets les plus ambitieux.
							</p>
						</motion.div>
						<motion.div
							className="bg-card rounded-lg p-6 shadow-md"
							whileHover={hoverScale}
							transition={{ delay: 0.1 }}
						>
							<h3 className="text-xl font-bold text-primary mb-2">
								Notre mission
							</h3>
							<p className="text-txt">
								Nous mettons notre savoir-faire au service de votre réussite. 
								De la conception de sites web modernes au développement d'applications 
								sur mesure, en passant par le marketing digital et la gestion 
								de projets, nous vous accompagnons à chaque étape de votre croissance.
							</p>
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

			{/* 3. SERVICES */}
			<section
				className="bg-primary/5 py-12 md:py-16 w-full"
				id="services"
			>
				<div className="container mx-auto px-4">
					<motion.h2
						className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						Nos Services Experts
					</motion.h2>
					<motion.div
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
					>
						<motion.div
							className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center border-l-4 border-primary"
							variants={cardVariant}
							whileHover={hoverScale}
						>
							<div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-full mb-4">
								<span className="text-primary text-2xl">
									💻
								</span>
							</div>
							<h3 className="font-bold text-lg mb-2 text-dark">Développement Web</h3>
							<p className="text-txt">
								Sites web modernes, responsives et optimisés pour vos besoins
							</p>
						</motion.div>

						<motion.div
							className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
							variants={cardVariant}
							whileHover={hoverScale}
						>
							<div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-full mb-4">
								<span className="text-primary text-2xl">📱</span>
							</div>
							<h3 className="font-bold text-lg mb-2">
								Applications Mobile
							</h3>
							<p className="text-txt">
								Applications natives et cross-platform pour iOS et Android
							</p>
						</motion.div>

						<motion.div
							className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
							variants={cardVariant}
							whileHover={hoverScale}
						>
							<div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-full mb-4">
								<span className="text-primary text-2xl">
									�
								</span>
							</div>
							<h3 className="font-bold text-lg mb-2">Marketing Digital</h3>
							<p className="text-txt">
								Stratégies digitales pour augmenter votre visibilité en ligne
							</p>
						</motion.div>

						<motion.div
							className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
							variants={cardVariant}
							whileHover={hoverScale}
						>
							<div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-full mb-4">
								<span className="text-primary text-2xl">
									⚙️
								</span>
							</div>
							<h3 className="font-bold text-lg mb-2">Conseil Tech</h3>
							<p className="text-txt">
								Accompagnement dans vos choix technologiques et stratégiques
							</p>
						</motion.div>

						<motion.div
							className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
							variants={cardVariant}
							whileHover={hoverScale}
						>
							<div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-full mb-4">
								<span className="text-primary text-2xl">
									🎨
								</span>
							</div>
							<h3 className="font-bold text-lg mb-2">Design UI/UX</h3>
							<p className="text-txt">
								Interfaces utilisateur intuitives et expériences optimales
							</p>
						</motion.div>
					</motion.div>
				</div>
			</section>

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
						to={whatsApp.replace('commander%20des%20patchs%20Luna%20Soulage', 'discuter%20d%27un%20projet%20avec%20XpertManager')}
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
