import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaApple, FaWindows } from "react-icons/fa";
import { fadeInUp } from "../constants/animationVariants";

// Version et liens de téléchargement (Release GitHub publique).
// Pour une nouvelle version : publier une nouvelle Release puis changer VERSION ici.
const VERSION = "1.0.0";
const BASE = `https://github.com/malickt30/xpertmanager-downloads/releases/download/v${VERSION}`;

const INSTALLERS = [
	{
		id: "mac-arm",
		os: "mac",
		arch: "arm",
		icon: FaApple,
		title: "macOS — Apple Silicon",
		subtitle: "Mac M1, M2, M3, M4 (depuis fin 2020)",
		file: `xPertManager-${VERSION}-arm64.dmg`,
		size: "438 Mo",
	},
	{
		id: "mac-intel",
		os: "mac",
		arch: "x86",
		icon: FaApple,
		title: "macOS — Intel",
		subtitle: "Mac à processeur Intel (avant 2021)",
		file: `xPertManager-${VERSION}-x86_64.dmg`,
		size: "457 Mo",
	},
	{
		id: "windows",
		os: "windows",
		icon: FaWindows,
		title: "Windows",
		subtitle: "Windows 10 et 11 (64 bits)",
		file: `xPertManager-setup-${VERSION}.exe`,
		size: "233 Mo",
	},
];

// Système du visiteur, pour mettre en avant le bon installateur.
function detectOS() {
	if (typeof navigator === "undefined") return null;
	const ua = navigator.userAgent || "";
	if (/Windows/i.test(ua)) return "windows";
	if (/Macintosh|Mac OS X/i.test(ua) && !/iPhone|iPad/i.test(ua)) return "mac";
	return null;
}

const Downloads = () => {
	const [os, setOs] = useState(null);
	const [arch, setArch] = useState(null);
	useEffect(() => {
		setOs(detectOS());
		// Chrome / Edge savent dire si le Mac est Apple Silicon ou Intel ; Safari ne le dit pas.
		navigator.userAgentData?.getHighEntropyValues?.(["architecture"])
			.then((v) => setArch(v.architecture || null))
			.catch(() => {});
	}, []);

	return (
		<motion.section
			id="telecharger"
			className="w-full bg-gradient-to-b from-primary/10 to-background py-12 md:py-16 scroll-mt-20"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.15 }}
			variants={fadeInUp}
		>
			<div className="container mx-auto px-4 max-w-5xl">
				<h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-3">
					Télécharger xPertManager
				</h2>
				<p className="text-txt text-center mb-10">
					Version {VERSION} — choisissez l'installateur correspondant à votre ordinateur.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{INSTALLERS.map((it) => {
						const Icon = it.icon;
						const recommended = os && it.os === os && (!it.arch || !arch || it.arch === arch);
						return (
							<div
								key={it.id}
								className={`relative flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-md border-2 transition-shadow hover:shadow-xl ${
									recommended ? "border-primary" : "border-gray-100"
								}`}
							>
								{recommended && (
									<span className="absolute -top-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
										Votre système
									</span>
								)}
								<Icon className="text-5xl text-dark mb-4" aria-hidden="true" />
								<h3 className="font-bold text-lg text-dark mb-1">{it.title}</h3>
								<p className="text-sm text-txt/80 mb-5">{it.subtitle}</p>
								<a
									href={`${BASE}/${it.file}`}
									className="mt-auto inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl py-3 px-6 shadow transition-colors"
									download
								>
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
									</svg>
									Télécharger
								</a>
								<p className="text-xs text-txt/60 mt-3 break-all">
									{it.file} · {it.size}
								</p>
							</div>
						);
					})}
				</div>

				<p className="text-sm text-txt/80 text-center mt-8">
					Sur Mac, vous ne savez pas quel modèle choisir ? menu Pomme → « À propos de ce Mac » :
					« Puce Apple M… » = Apple Silicon, « Processeur … Intel » = Intel.
				</p>
			</div>
		</motion.section>
	);
};

export default Downloads;
