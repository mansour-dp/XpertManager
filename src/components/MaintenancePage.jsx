import { motion } from "framer-motion";
import Logo from "../assets/images/logo.png";

const MaintenancePage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-primary/5 flex items-center justify-center px-4">
			<motion.div
				className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				{/* Logo */}
				<motion.div
					className="flex justify-center mb-8"
					animate={{
						scale: [1, 1.1, 1],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					<img
						src={Logo}
						alt="xPertManager Logo"
						className="w-32 h-32 object-contain"
					/>
				</motion.div>

				{/* Icône de maintenance */}
				<motion.div
					className="text-8xl mb-6"
					animate={{
						rotate: [0, 10, -10, 0],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					🔧
				</motion.div>

				{/* Titre */}
				<motion.h1
					className="text-4xl md:text-5xl font-bold text-primary mb-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
				>
					Site Inaccessible
				</motion.h1>

				{/* Description */}
				<motion.p
					className="text-txt text-lg mb-8 leading-relaxed"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
				>
					Nous effectuons actuellement des travaux de maintenance.
					<br />
					Le site sera de retour très bientôt.
				</motion.p>

				{/* Animation de chargement */}
				<motion.div
					className="flex justify-center gap-2"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7 }}
				>
					{[0, 1, 2].map((index) => (
						<motion.div
							key={index}
							className="w-3 h-3 bg-primary rounded-full"
							animate={{
								scale: [1, 1.5, 1],
								opacity: [1, 0.5, 1],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								delay: index * 0.2,
							}}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default MaintenancePage;
