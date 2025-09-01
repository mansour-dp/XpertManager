// Images par défaut - vous devrez remplacer ces imports par vos vraies images
import XpertManager from "../assets/images/1-xPertManager-starting.png";
import Activity_creation from "../assets/images/2_0-Activity-creation.png";
import Activity_grannt from "../assets/images/2_1-Activity-Gannt.png";
import Activity_MPM from "../assets/images/2_2-Activity-MPM.png"; 
import Event_creation from "../assets/images/3_0-Event-creation.png";
import Event_visioConf from "../assets/images/3_1-Event-visioConf.png";
import Dashboard_Eisenhover from "../assets/images/4_Dashborad-Eisenhover-matrix.png";



    import { CreativeCommons } from "lucide-react";
// Données des rubriques avec leurs galeries d'images
export const rubrics = [
	{
		id: 1,
		title: "Presentation d'interfaces",
		description: "Accès sécurisé à votre compte avec gestion complète selon vos droits d'utilisateur. Interface principale pour organiser votre structure, gérer les ressources et accéder aux fonctionnalités de communication.",
		thumbnail: XpertManager,
		images: [
			{
				src: XpertManager,
				title: "Interface principale XpertManager",
				description: "Accès sécurisé à votre compte. En fonction des droits qui vous sont accordés, vous pouvez :\n\n• Créer, modifier, réorganiser la structuration de votre organisation\n• Gérer les ressources humaines et matérielles\n• Accéder à l'interface de création et de gestion des activités\n• Accéder à l'interface de création et de gestion des événements\n• Accéder à votre tableau de bord qui est automatiquement mis à jour, en fonction des événements et activités à faire\n• Accéder aux différentes fonctionnalités de communication entre utilisateurs :\n  - Appels audio inter-ordinateurs\n  - Messagerie instantanée\n  - Messages texte\n  - Création de groupes de diffusion\n  - Et bien plus encore"
			},
		]
	},
	{
		id: 2,
		title: "Gestion de projets",
		description: "L'interface vous permet de gérer vos activités professionnelles (ou aussi personnelles), aussi bien celles que vous avez créées ou celles auxquelles vous avez été associées.\n\nVous pouvez entre autres :\n• Créer les activités de votre projet\n• Associer vos collaborateurs dans la création, la gestion et le suivi de votre projet\n• Affecter des équipes et des ressources matérielles à des tâches\n• Faire la planification et l'ordonnancement des tâches\n• Joindre des documents de travail dans les activités créées\n• Travailler sur des activités auxquelles vous avez été associées\n• Suivre en temps réels l'avancement de votre projet à travers une animation dans le diagramme de Gantt ou la méthode des potentiels métra MPM (similaire au diagramme de PERT)",
		thumbnail: Activity_creation,
		images: [
			{
				src: Activity_creation
			},
			{
				src: Activity_grannt
			},
			{
				src: Activity_MPM
			},
		]
	},
	{
		id: 3,
		title: "Gestion des Événements",
		description: "Interface complète pour créer, gérer et suivre des événements, incluant les visioconférences. Planifiez vos événements avec vos collaborateurs et gérez vos discussions en temps réel.",
		thumbnail: Event_creation,
		images: [
			{
				src: Event_creation,
				title: "Création d'événements",
				description: "L'interface vous permet de créer, gérer ou suivre des événements (par exemple des visioconférences) que ce soit ceux que vous avez créés ou ceux auxquels vous êtes associés.\n\nVous pouvez entre autres :\n• Créer et planifier un événement en indiquant les acteurs impliqués qui le verront automatiquement dans leur interface\n• Créer un événement instantané\n• Lancer un événement planifié\n• Archiver des événements passés"
			},
			{
				src: Event_visioConf,
				title: "Visioconférence intégrée",
				description: "L'interface de visioconférence vous permet :\n• d'organiser et de gérer des discussions et des échanges en temps réel entre vos collaborateurs, avec possibilité de partage d'écrans\n• de gérer les prises de parole\n• de faire des consultations ou de prendre des décisions collectives à travers un vote électronique sécurisé et anonyme\n• etc."
			},
		]
	},
	{
		id: 4,
		title: "Tableau de Bord (Gestion des Tâches)",
		description: "Système de gestion des priorités basé sur la matrice d'Eisenhower pour une organisation optimale de vos tâches et activités.",
		thumbnail: Dashboard_Eisenhover,
		images: [
			{
				src: Dashboard_Eisenhover,
				title: "Matrice d'Eisenhower",
				description: "Le tableau de bord vous permet de gérer les priorités et de mieux vous organiser. Il est basé sur la matrice d'Eisenhower implémentée dans la plateforme, où :\n\n• les tâches importantes et urgentes sont présentées dans la liste des tâches à faire en premier lieu\n• les tâches non urgentes et importantes sont planifiées\n• les tâches urgentes et non importantes sont déléguées\n• les tâches qui ne sont ni importantes ni urgentes sont ignorées\n\nChaque fois qu'une activité ou un événement arrive à l'utilisateur, il peut juger de la priorité à accorder, et l'activité ou l'événement est systématiquement introduit dans la matrice d'Eisenhower au bon endroit."
			},
		]
	},
	
];
