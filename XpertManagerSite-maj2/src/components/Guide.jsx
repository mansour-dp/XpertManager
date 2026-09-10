import { useEffect } from "react";

// Le guide utilisateur est le fichier HTML officiel (identique à l'aide du logiciel),
// placé dans public/aide/. Pour le mettre à jour, il suffit de remplacer
// public/aide/xPertManagerHelpfr.html et le dossier public/aide/images/.
const GUIDE_URL = "/aide/xPertManagerHelpfr.html";

const Guide = () => {
	useEffect(() => {
		const previousTitle = document.title;
		document.title = "Guide d'utilisation - xPertManager";
		return () => {
			document.title = previousTitle;
		};
	}, []);

	return (
		<div className="fixed inset-0 flex flex-col bg-white">
			<div className="flex items-center justify-between gap-3 px-4 py-2 bg-white border-b border-gray-200 shadow-sm">
				<a
					href="/"
					className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
				>
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
					</svg>
					Retour au site
				</a>
				<a
					href={GUIDE_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm text-gray-600 hover:text-primary hover:underline"
				>
					Ouvrir dans un nouvel onglet
				</a>
			</div>
			<iframe
				src={GUIDE_URL}
				title="Guide d'utilisation xPertManager"
				className="flex-1 w-full border-0"
			/>
		</div>
	);
};

export default Guide;
