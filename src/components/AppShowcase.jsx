import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Capture de l'application dans une fenêtre de bureau inclinée en perspective,
 * qui se redresse quand on fait défiler la page. CSS 3D + framer-motion uniquement :
 * aucun moteur 3D, poids quasi nul.
 */
const AppShowcase = ({ src, alt, title = "xPertManager" }) => {
	const ref = useRef(null);
	const reduce = useReducedMotion();
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });

	const rotateX = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 22, 0]);
	const rotateY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -14, 0]);
	const scale = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0.9, 1]);
	const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 40, 0]);

	return (
		<div ref={ref} className="relative" style={{ perspective: "1400px" }}>
			{/* Halo coloré derrière la fenêtre */}
			<div
				className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-primary/40 via-secondary/30 to-accent/30 blur-3xl opacity-70"
				aria-hidden="true"
			/>
			<motion.div
				className="relative rounded-xl overflow-hidden bg-white border border-black/10 shadow-[0_30px_60px_-15px_rgba(69,18,62,0.45)]"
				style={{ rotateX, rotateY, scale, y, transformStyle: "preserve-3d" }}
				whileHover={reduce ? undefined : { rotateX: 0, rotateY: 0, scale: 1.02 }}
				transition={{ type: "spring", stiffness: 120, damping: 18 }}
			>
				{/* Barre de titre façon fenêtre macOS */}
				<div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 border-b border-black/5">
					<span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
					<span className="w-3 h-3 rounded-full bg-[#febc2e]" />
					<span className="w-3 h-3 rounded-full bg-[#28c840]" />
					<span className="ml-3 text-xs font-medium text-gray-500">{title}</span>
				</div>
				<img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
			</motion.div>
		</div>
	);
};

export default AppShowcase;
