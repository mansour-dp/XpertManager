// Captures de l'application (version actuelle), converties en WebP.
// Ajouter une image : déposer le fichier dans src/assets/images/app/ puis l'appeler avec img("nom").
const appImages = import.meta.glob("../assets/images/app/*.webp", { eager: true, import: "default" });
export const img = (name) => appImages[`../assets/images/app/${name}.webp`];

// Données des rubriques avec leurs galeries d'images
export const rubrics = [
	{
		id: 1,
		title: "Interface d'accueil",
		description: "Accès sécurisé à votre compte avec gestion complète selon vos droits d'utilisateur. Interface principale pour organiser votre structure, gérer les ressources et accéder aux fonctionnalités de communication.",
		thumbnail: img("general"),
		images: [
			{
				src: img("login"),
				title: "Connexion sécurisée",
				description: "Connectez-vous avec votre identifiant et votre mot de passe, et choisissez votre langue de travail : français ou anglais.\n\nLa fenêtre de connexion propose aussi Nouveau projet, pour créer une nouvelle structure et sa base de données."
			},
			{
				src: img("general"),
				title: "Interface principale xPertManager",
				description: "Accès sécurisé à votre compte. En fonction des droits qui vous sont accordés, vous pouvez :\n\n• Créer, modifier, réorganiser la structuration de votre organisation\n• Gérer les ressources humaines et matérielles\n• Accéder à l'interface de création et de gestion des activités\n• Accéder à l'interface de création et de gestion des événements\n• Accéder à votre tableau de bord qui est automatiquement mis à jour, en fonction des événements et activités à faire\n• Accéder aux différentes fonctionnalités de communication entre utilisateurs :\n  • Appels audio inter-ordinateurs\n  • Messagerie instantanée\n  • Messages texte\n  • Création de groupes de diffusion\n  • Centre des notifications\n  • Et bien plus encore"
			},
			{
				src: img("structureCreation"),
				title: "Création d'une structure",
				description: "Créez votre organisation : nom, logo, adresse, contacts, catégories de personnel et types d'activités."
			},
			{
				src: img("addStructure"),
				title: "Départements et services",
				description: "Ajoutez des sous-structures (départements, services) et désignez leur dirigeant pour refléter l'organigramme réel."
			},
			{
				src: img("staffCategories"),
				title: "Catégories de personnel",
				description: "Définissez les catégories de personnel propres à votre organisation."
			},
			{
				src: img("typesOfActivities"),
				title: "Types d'activités",
				description: "Définissez les types d'activités utilisés pour classer vos projets et tâches."
			},
		]
	},
	{
		id: 2,
		title: "Interface de Gestion de projets",
		description: "L'interface vous permet de gérer vos activités professionnelles (ou aussi personnelles), aussi bien celles que vous avez créées ou celles auxquelles vous avez été associées.\n\nVous pouvez entre autres :\n• Créer les activités de votre projet\n• Associer vos collaborateurs dans la création, la gestion et le suivi de votre projet\n• Affecter des équipes et des ressources matérielles à des tâches\n• Faire la planification et l'ordonnancement des tâches\n• Joindre des documents de travail dans les activités créées\n• Travailler sur des activités auxquelles vous avez été associées\n• Suivre en temps réels l'avancement de votre projet à travers une animation dans le diagramme de Gantt ou la méthode des potentiels métra MPM (similaire au diagramme de PERT)",
		thumbnail: img("activities"),
		images: [
			{
				src: img("activities"),
				title: "Onglet Activités",
				description: "Retrouvez vos activités professionnelles et personnelles, celles que vous avez créées comme celles auxquelles vous êtes associé, avec leur description, leur structure et leurs auteurs."
			},
			{
				src: img("activityCreation"),
				title: "Création d'une activité",
				description: "Créez une activité : type, structure, désignation, durée, date de démarrage, activités prédécesseurs, co-auteurs et ressources affectées."
			},
			{
				src: img("ganttDiagram"),
				title: "Diagramme de Gantt",
				description: "Suivez en temps réel l'avancement de votre projet grâce à l'animation du diagramme de Gantt."
			},
			{
				src: img("mpmDiagram"),
				title: "Méthode des potentiels métra (MPM)",
				description: "Visualisez l'ordonnancement des tâches avec la méthode MPM, similaire au diagramme de PERT."
			},
		]
	},
	{
		id: 3,
		title: "Interface de Gestion des Événements",
		description: "Interface complète pour créer, gérer et suivre des événements, incluant les visioconférences. Planifiez vos événements avec vos collaborateurs, gérez vos discussions en temps réel et obtenez automatiquement le compte rendu et la transcription de vos réunions grâce à l'IA.",
		thumbnail: img("events"),
		images: [
			{
				src: img("events"),
				title: "Onglet Événements",
				description: "Retrouvez vos événements planifiés et archivés, lancez une visioconférence instantanée ou planifiée, et consultez les comptes rendus de réunion."
			},
			{
				src: img("planEvent"),
				title: "Création d'événements",
				description: "L'interface vous permet de créer, gérer ou suivre des événements (par exemple des visioconférences) que ce soit ceux que vous avez créés ou ceux auxquels vous êtes associés.\n\nVous pouvez entre autres :\n• Créer et planifier un événement en indiquant les acteurs impliqués qui le verront automatiquement dans leur interface\n• Créer un événement instantané\n• Lancer un événement planifié\n• Archiver des événements passés"
			},
			{
				src: img("videoConf"),
				title: "Visioconférence intégrée",
				description: "L'interface de visioconférence vous permet :\n• d'organiser et de gérer des discussions et des échanges en temps réel entre vos collaborateurs, avec possibilité de partage d'écrans\n• de gérer les prises de parole\n• de faire des consultations ou de prendre des décisions collectives à travers un vote électronique sécurisé et anonyme\n• d'enregistrer la réunion avec l'IA : à la fin, le compte rendu (résumé, décisions, actions, points en suspens) et la transcription horodatée de chaque intervenant sont disponibles dans l'onglet Événements\n• etc."
			},
		]
	},
	{
		id: 4,
		title: "Tableau de Bord ",
		description: "Système de gestion des priorités basé sur la matrice d'Eisenhower pour une organisation optimale de vos tâches et activités.",
		thumbnail: img("dashboard"),
		images: [
			{
				src: img("dashboard"),
				title: "Matrice d'Eisenhower",
				description: "Le tableau de bord vous permet de gérer les priorités et de mieux vous organiser. Il est basé sur la matrice d'Eisenhower implémentée dans la plateforme, où :\n\n• les tâches importantes et urgentes sont présentées dans la liste des tâches à faire en premier lieu\n• les tâches non urgentes et importantes sont planifiées\n• les tâches urgentes et non importantes sont déléguées\n• les tâches qui ne sont ni importantes ni urgentes sont ignorées\n\nChaque fois qu'une activité ou un événement arrive à l'utilisateur, il peut juger de la priorité à accorder, et l'activité ou l'événement est systématiquement introduit dans la matrice d'Eisenhower au bon endroit."
			},
			{
				src: img("createStickyNote"),
				title: "Notes autocollantes",
				description: "Créez des notes autocollantes pour garder vos rappels et idées sous les yeux."
			},
			{
				src: img("notifications"),
				title: "Centre de notifications",
				description: "Appels manqués, messages, invitations en visioconférence, nouveaux évènements et nouvelles activités qui vous concernent : tout est regroupé dans le centre de notifications, avec les non lus mis en évidence."
			},
		]
	},
	{
		id: 5,
		title: "Interface Finances / Comptabilité",
		description: "Interface permettant de gérer les ventes, les achats, les clients, les fournisseurs, les commandes, les factures, la finance, les payes, etc.",
		thumbnail: img("financeHubCompta"),
		images: [
			{
				src: img("financeHubCompta"),
				title: "Hub Finance et comptabilité",
				description: "Le hub regroupe tous les modules financiers, chacun dans sa propre fenêtre :\n\n• Ventes et achats : clients, fournisseurs, commandes, factures\n• Catalogue et stock : produits, stocks\n• Finance et paie : trésorerie, rapprochement bancaire, règlement de la paie, comptabilité générale SYSCOHADA"
			},
			{
				src: img("clientCreation"),
				title: "Clients",
				description: "Gérez vos fiches clients : identité, coordonnées et contacts."
			},
			{
				src: img("supplierCreation"),
				title: "Fournisseurs",
				description: "Gérez vos fiches fournisseurs et leurs contacts."
			},
			{
				src: img("orderCreation"),
				title: "Commandes",
				description: "Saisissez les commandes de vente et d'achat et suivez leur statut."
			},
			{
				src: img("ordersList"),
				title: "Liste des commandes",
				description: "Toutes vos commandes de vente et d'achat, filtrables par type et par statut, avec génération de la facture en un clic."
			},
			{
				src: img("invoiceCreation"),
				title: "Factures",
				description: "Émettez vos factures, suivez les règlements et les montants restant à payer."
			},
			{
				src: img("invoicesList"),
				title: "Suivi des factures",
				description: "Liste des factures avec statut (payée, émise, en retard), montants, reste à payer et aperçu du document prêt à imprimer ou à exporter en PDF."
			},
			{
				src: img("productCreation"),
				title: "Création d'un produit",
				description: "Catalogue de produits et services : prix d'achat et de vente, TVA, stock et seuil d'alerte."
			},
			{
				src: img("productsList"),
				title: "Catalogue produits et services",
				description: "Catalogue avec prix de vente, niveau de stock et alerte de stock bas."
			},
			{
				src: img("stockMovements"),
				title: "Mouvements de stock",
				description: "Journal des entrées, sorties et ajustements de stock par produit, avec vérification de la cohérence."
			},
			{
				src: img("treasuryDashboard"),
				title: "Tableau de bord de la trésorerie",
				description: "Recettes, dépenses, solde et taux de marge, avec l'évolution mensuelle de la trésorerie et la répartition des dépenses."
			},
			{
				src: img("bankReconciliation"),
				title: "Rapprochement bancaire",
				description: "Comparez ligne à ligne le relevé de la banque aux écritures de trésorerie saisies dans l'application, pour vérifier qu'ils concordent."
			},
		]
	},
	{
		id: 6,
		title: "Comptabilité générale SYSCOHADA",
		description: "Une comptabilité conforme au référentiel SYSCOHADA, presque sans saisie : factures, règlements, bulletins de paie, écritures de trésorerie et immobilisations sont transformés automatiquement en écritures comptables. Journaux, grand livre, balance, bilan, compte de résultat, flux de trésorerie et clôture d'exercice.",
		thumbnail: img("accSynthese"),
		images: [
			{
				src: img("accSynthese"),
				title: "Synthèse de l'exercice",
				description: "Les indicateurs clés de l'exercice — chiffre d'affaires, résultat net, trésorerie nette, créances clients, dettes fournisseurs, total du bilan — et les contrôles comptables automatiques : débits égaux aux crédits, bilan équilibré, compte d'attente soldé…\n\nUn clic sur « Comptabiliser les pièces » transforme en écritures les nouvelles factures, règlements, bulletins de paie, écritures de trésorerie et immobilisations."
			},
			{
				src: img("accJournaux"),
				title: "Journaux et saisie d'écritures",
				description: "Journaux Ventes, Achats, Banque, Caisse, Paie, Opérations diverses et À-nouveaux, avec recherche par période, compte, libellé ou tiers. Une écriture n'est jamais modifiée sur place : elle est contre-passée puis comptabilisée à nouveau."
			},
			{
				src: img("accBalance"),
				title: "Grand livre et balance",
				description: "La balance des comptes et le grand livre, à la date de situation choisie."
			},
			{
				src: img("accBilan"),
				title: "Bilan SYSCOHADA",
				description: "Actif (brut, amortissements et dépréciations, net) et passif selon les rubriques SYSCOHADA, avec le contrôle de l'écart actif / passif. Chaque état est prêt à exporter ou à imprimer."
			},
			{
				src: img("accCompteResultat"),
				title: "Compte de résultat",
				description: "Produits et charges de l'exercice jusqu'au résultat net. Également disponibles : tableau des flux de trésorerie, créances et dettes, registre des immobilisations avec amortissements calculés automatiquement, plan comptable, clôture et réouverture d'exercice."
			},
			{
				src: img("cashFlowStatement"),
				title: "Tableau des flux de trésorerie",
				description: "Tableau des flux de trésorerie (TFT) SYSCOHADA : flux des activités opérationnelles, d'investissement et de financement, calculés automatiquement."
			},
			{
				src: img("fixedAssets"),
				title: "Immobilisations et amortissements",
				description: "Registre des immobilisations avec dotation de l'exercice, amortissements cumulés, valeur nette comptable et plan d'amortissement de chaque bien."
			},
		]
	},
	{
		id: 7,
		title: "Ressources humaines et paie",
		description: "Gestion complète du personnel : fiches des agents, demandes et validation des congés, soldes de congés, génération des bulletins de paie avec calcul automatique des cotisations IPRES et de l'impôt sur le revenu, et consultation des bulletins par chaque agent.",
		thumbnail: img("hrHub"),
		images: [
			{
				src: img("hrHub"),
				title: "Gestion des ressources humaines",
				description: "Un hub qui regroupe le répertoire des agents, les congés (demandes, soldes, types de congé) et la paie (bulletins, modèle de bulletin)."
			},
			{
				src: img("employeeCreation"),
				title: "Fiche d'un agent",
				description: "Photo, identité, situation matrimoniale, nombre de parts fiscales, coordonnées, structure et catégorie : tout ce qu'il faut pour la gestion du personnel et le calcul de la paie."
			},
			{
				src: img("leaveRequestsMine"),
				title: "Mes demandes de congé",
				description: "Chaque agent dépose ses demandes de congé, suit leur statut et consulte ses jours restants."
			},
			{
				src: img("leaveApproval"),
				title: "Validation des congés",
				description: "Le responsable approuve ou refuse les demandes en attente et garde l'historique des décisions."
			},
			{
				src: img("payslipGeneration"),
				title: "Génération des bulletins de paie",
				description: "Générez les bulletins par agent ou par équipe. Les cotisations IPRES (régime général et régime cadre, parts salariale et patronale) et l'impôt sur le revenu sont calculés automatiquement selon le barème officiel."
			},
			{
				src: img("payslipsMine"),
				title: "Mes bulletins de paie",
				description: "Chaque agent consulte ses bulletins de paie et les exporte en PDF."
			},
		]
	},
	{
		id: 8,
		title: "Présences : badgeage par QR code",
		description: "Les agents pointent leurs arrivées et leurs départs en scannant avec leur téléphone le QR code affiché à l'entrée des locaux. Aucune application à installer, un QR code qui change toutes les 30 secondes et un pointage accepté uniquement depuis le Wi-Fi des locaux.",
		thumbnail: img("attendanceWindow"),
		images: [
			{
				src: img("attendanceWindow"),
				title: "Présences (badgeage par QR code)",
				description: "Le scan du QR code de la borne ouvre une simple page web : aucune application à installer. Le QR code change toutes les 30 secondes et le pointage n'est accepté que depuis le Wi-Fi des locaux, ce qui empêche les pointages à distance.\n\nLes responsables consultent les présences par période, structure et agent, ajoutent un pointage manuel si besoin et exportent la liste."
			},
		]
	},
	{
		id: 9,
		title: "Assistant IA",
		description: "Un assistant intelligent qui connaît le logiciel et l'écran sur lequel vous êtes. Il répond à vos questions, remplit les formulaires à votre place sans jamais valider sans vous, et rédige les comptes rendus de vos réunions.",
		thumbnail: img("iaFormulaireRempli"),
		images: [
			{
				src: img("iaAssistantCarte"),
				title: "Poser une question",
				description: "Le bouton Assistant ouvre un panneau à droite de l'écran. Posez votre question (« Comment est calculé l'IR sur un bulletin de paie ? ») : l'assistant explique la démarche et vous indique l'écran à ouvrir. Il ne voit que ce que vos droits vous permettent de voir."
			},
			{
				src: img("iaFormulaireRempli"),
				title: "Remplir un formulaire (IA Pro)",
				description: "Demandez simplement : « Planifie une réunion visio Point hebdo le 6 novembre à 10 h avec Fatou Sow et Bamba Fall ». L'assistant ouvre le vrai formulaire déjà rempli, les champs remplis sont encadrés, et c'est vous qui enregistrez. L'IA ne supprime rien et ne touche ni aux droits ni aux mots de passe."
			},
			{
				src: img("iaCompteRendu"),
				title: "Comptes rendus de réunion",
				description: "Pendant une visioconférence, l'enregistrement IA produit à la fin de la réunion un compte rendu structuré — résumé, décisions, actions avec responsable et échéance, points en suspens — ainsi que la transcription horodatée de chaque intervenant."
			},
		]
	},
	{
		id: 10,
		title: "Communications et votes électroniques",
		description: "Appels audio entre ordinateurs, messages texte, messagerie instantanée, groupes de diffusion et votes électroniques sécurisés et anonymes. Un centre de notifications regroupe l'historique de toutes vos communications, y compris les appels manqués.",
		thumbnail: img("createVote"),
		images: [
			{
				src: img("audioCall"),
				title: "Appels audio",
				description: "Appelez un collègue directement depuis xPertManager, d'ordinateur à ordinateur. Les appels manqués, refusés ou sans réponse sont conservés dans le centre des notifications."
			},
			{
				src: img("textChat"),
				title: "Messagerie instantanée",
				description: "Discutez en temps réel avec vos collaborateurs."
			},
			{
				src: img("textMessage"),
				title: "Messages texte",
				description: "Envoyez des messages texte à un agent ou à un groupe, même s'il n'est pas connecté."
			},
			{
				src: img("diffusionGroup"),
				title: "Groupes de diffusion",
				description: "Créez des groupes de diffusion pour joindre plusieurs personnes en une fois, par message ou en visioconférence."
			},
			{
				src: img("createVote"),
				title: "Création d'un vote",
				description: "Préparez les propositions, choisissez le mode de vote (choix unique ou multiple) et l'heure de fin du vote."
			},
			{
				src: img("voting"),
				title: "Vote électronique",
				description: "Chaque participant vote pour, contre ou s'abstient, de façon sécurisée et anonyme."
			},
			{
				src: img("voteResult"),
				title: "Résultats du vote",
				description: "Les résultats s'affichent proposition par proposition, avec la liste des votants."
			},
		]
	},
	{
		id: 11,
		title: "Ressources matérielles",
		description: "Enregistrez le matériel de l'organisation, classez-le par catégories, affectez-le à une structure ou à un agent et planifiez son utilisation dans les activités.",
		thumbnail: img("materialRessoureCreation"),
		images: [
			{
				src: img("materialRessoureCreation"),
				title: "Ajout d'une ressource matérielle",
				description: "Désignation, identifiant, catégorie et affectation à une structure ou à un agent."
			},
			{
				src: img("materialRessourceCategories"),
				title: "Catégories de ressources matérielles",
				description: "Définissez les catégories de matériel propres à votre organisation."
			},
		]
	},
];
