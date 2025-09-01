import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiX, FiMaximize2 } from "react-icons/fi";

const Gallery = ({ isOpen, onClose, rubric }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isFullscreen, setIsFullscreen] = useState(false);

	if (!isOpen || !rubric) return null;

	const { title, description, images } = rubric;

	const nextImage = () => {
		setCurrentImageIndex((prev) => (prev + 1) % images.length);
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
	};

	const goToImage = (index) => {
		setCurrentImageIndex(index);
	};

	const toggleFullscreen = () => {
		setIsFullscreen(!isFullscreen);
	};

	return (
		<AnimatePresence>
			<motion.div
				className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center ${isFullscreen ? 'p-0' : 'p-4'}`}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={onClose}
			>
				<motion.div
					className={`bg-white rounded-2xl overflow-hidden shadow-2xl ${
						isFullscreen 
							? "w-full h-full max-w-none max-h-none rounded-none overflow-y-auto" 
							: "max-w-4xl max-h-[85vh] w-full overflow-hidden"
					}`}
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.8, opacity: 0 }}
					onClick={(e) => e.stopPropagation()}
				>
					{/* Header avec titre et contrôles */}
					<div className="bg-gradient-to-r from-primary to-primary/80 text-white p-3 md:p-4">
						<div className="flex items-center justify-between">
							<div>
								<h2 className="text-lg md:text-xl font-bold">{title}</h2>
								<p className="text-white/90 text-xs mt-1">
									{currentImageIndex + 1} sur {images.length} images
								</p>
							</div>
							<div className="flex items-center gap-2">
								<button
									onClick={toggleFullscreen}
									className="p-2 hover:bg-white/20 rounded-lg transition-colors"
									title={isFullscreen ? "Quitter le plein écran" : "Plein écran"}
								>
									<FiMaximize2 size={20} />
								</button>
								<button
									onClick={onClose}
									className="p-2 hover:bg-white/20 rounded-lg transition-colors"
									title="Fermer"
								>
									<FiX size={24} />
								</button>
							</div>
						</div>
					</div>

					{/* Zone d'affichage de l'image - HAUTEUR ADAPTATIVE */}
					<div className={`relative ${isFullscreen ? "h-[60vh]" : "h-64 md:h-80"} bg-gray-50`}>
						<AnimatePresence mode="wait">
							<motion.img
								key={currentImageIndex}
								src={images[currentImageIndex].src}
								alt={images[currentImageIndex].title}
								className="w-full h-full object-contain"
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -100 }}
								transition={{ duration: 0.3 }}
							/>
						</AnimatePresence>

						{/* Boutons de navigation */}
						{images.length > 1 && (
							<>
								<button
									onClick={prevImage}
									className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 hover:scale-110"
									title="Image précédente"
								>
									<FiChevronLeft size={24} />
								</button>
								<button
									onClick={nextImage}
									className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 hover:scale-110"
									title="Image suivante"
								>
									<FiChevronRight size={24} />
								</button>
							</>
						)}

						{/* Indicateur de progression */}
						{images.length > 1 && (
							<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 rounded-full px-3 py-1">
								<span className="text-white text-sm font-medium">
									{currentImageIndex + 1} / {images.length}
								</span>
							</div>
						)}
					</div>

					{/* Description - Intelligente selon le contenu */}
					<div className="p-4 md:p-6 bg-white border-t border-gray-100">
						{/* Si l'image actuelle a une description, on l'affiche */}
						{images[currentImageIndex].description ? (
							<div className="bg-gray-50 rounded-lg p-4 mb-4">
								<h3 className="text-lg font-bold text-dark mb-2 flex items-center">
									<div className="w-1 h-5 bg-primary rounded-full mr-3"></div>
									{images[currentImageIndex].title}
								</h3>
								<div className="text-txt text-sm leading-relaxed whitespace-pre-line">
									{images[currentImageIndex].description}
								</div>
							</div>
						) : null}
						
						{/* Description générale de la rubrique (toujours affichée si pas de descriptions d'images) */}
						{!images.some(img => img.description) && (
							<div className="bg-primary/5 rounded-lg p-4">
								<h4 className="font-semibold text-primary mb-3 flex items-center">
									<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									{title}
								</h4>
								<div className="text-txt text-sm leading-relaxed whitespace-pre-line">
									{description}
								</div>
							</div>
						)}
					</div>

					{/* Miniatures en bas (si plus d'une image) */}
					{images.length > 1 && (
						<div className="p-2 pt-0 bg-white">
							<div className="flex gap-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 justify-center">
								{images.map((image, index) => (
									<button
										key={index}
										onClick={() => goToImage(index)}
										className={`relative flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
											currentImageIndex === index
												? "border-primary scale-105 shadow-lg"
												: "border-gray-200 hover:border-primary/50"
										}`}
									>
										<img
											src={image.src}
											alt={image.title}
											className="w-full h-full object-cover"
										/>
										{currentImageIndex === index && (
											<div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
												<div className="w-2 h-2 bg-white rounded-full shadow-sm"></div>
											</div>
										)}
									</button>
								))}
							</div>
						</div>
					)}
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Gallery;
