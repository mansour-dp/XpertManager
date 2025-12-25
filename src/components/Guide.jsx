import React from "react";
// Importation des images utilisées dans le guide
import generalImg from '../assets/images/general.png';
import dashboardImg from '../assets/images/dashboard.png';
import activitiesImg from '../assets/images/activities.png';
import eventsImg from '../assets/images/events.png';
import newImg from '../assets/images/new.png';
import structureCreationImg from '../assets/images/structureCreation.png';
import staffCategoriesImg from '../assets/images/staffCategories.png';
import typesOfActivitiesImg from '../assets/images/typesOfActivities.png';
import addStructureImg from '../assets/images/addStructure.png';
import modifImg from '../assets/images/modif.png';
import deleteImg from '../assets/images/delete.png';
import addImg from '../assets/images/add.png';
import employeeCreationImg from '../assets/images/employeeCreation.png';
import activityCreationImg from '../assets/images/activityCreation.png';
import involvedAgentImg from '../assets/images/involvedAgent.png';
import attachDocImg from '../assets/images/attachDoc.png';
import postActivityImg from '../assets/images/postActivity.png';
import closeActivityImg from '../assets/images/closeActivity.png';
import openImg from '../assets/images/open.png';
import planEventImg from '../assets/images/planEvent.png';
import visioInstantImg from '../assets/images/visioInstant.png';
import launchImg from '../assets/images/launch.png';
import groupImg from '../assets/images/group.png';
import stopMicroImg from '../assets/images/stopMicro.png';
import stopShareImg from '../assets/images/stopShare.png';
import handOffImg from '../assets/images/handOff.png';
import stopEditNotesImg from '../assets/images/stopEditNotes.png';
import voteImg from '../assets/images/vote.png';
import stopImg from '../assets/images/stop.png';
import videoConfImg from '../assets/images/videoConf.png';
import materialRessourceCategoriesImg from '../assets/images/materialRessourceCategories.png';
import materialRessoureCreationImg from '../assets/images/materialRessoureCreation.png';
import phoneCallImg from '../assets/images/phoneCall.png';
import audioCallImg from '../assets/images/audioCall.png';
import messageImg from '../assets/images/message.png';
import stickyImg from '../assets/images/sticky.png';
import strashImg from '../assets/images/strash.png';
import textMessageImg from '../assets/images/textMessage.png';
import chatImg from '../assets/images/chat.png';
import textChatImg from '../assets/images/textChat.png';
import createVoteImg from '../assets/images/createVote.png';
import votingImg from '../assets/images/voting.png';
import voteResultImg from '../assets/images/voteResult.png';
import affectpriorityImg from '../assets/images/affectpriority.png';
import createStickyNoteImg from '../assets/images/createStickyNote.png';
import showStickyNoteImg from '../assets/images/showStickyNote.png';
import diffusionGroupImg from '../assets/images/diffusionGroup.png';

const Guide = () => {
  // Smooth scroll pour les ancres internes
  React.useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 20, color: '#333', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif', lineHeight: 1.6 }}>
      {/* Style global identique au HTML */}
      <style>{`
        :root {
          --primary: #3498db;
          --primary-dark: #2980b9;
          --text: #2c3e50;
          --muted-text: #333;
          --bg-toc: #f8f9fa;
        }
        body {
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          line-height: 1.6;
          color: var(--muted-text);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        h1, h2, h3 {
          color: var(--text);
          font-weight: 700;
          margin-top: 1.2rem;
          margin-bottom: 0.6rem;
        }
        h1 {
          font-size: 2rem;
          margin-top: 0;
        }
        h2 {
          font-size: 1.5rem;
          border-bottom: 2px solid var(--primary);
          padding-bottom: 6px;
          margin-top: 2rem;
          scroll-margin-top: 20px;
        }
        h3 {
          font-size: 1.1rem;
          margin-top: 1rem;
          margin-bottom: 0.3rem;
        }
        p {
          margin: 0.5rem 0 0.8rem 0;
        }
        b, strong {
          font-weight: 700;
        }
        a {
          color: var(--primary-dark);
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        img {
          max-width: 100%;
          height: auto;
        }
        img.screenshot {
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 5px;
          margin: 10px 0;
          display: block;
        }
        img.icon {
          display: inline-block !important;
          vertical-align: middle;
          margin: 0 3px;
          border: none;
          padding: 0;
          max-width: 24px;
          width: auto;
          height: auto;
          max-height: 20px;
        }
        ul, ol {
          margin: 0.4rem 0 1rem 1.25rem;
        }
        ul {
          list-style-type: disc;
        }
        ol {
          list-style-type: decimal;
        }
        li {
          margin: 0.25rem 0;
        }
        .toc {
          background-color: var(--bg-toc);
          padding: 15px;
          border-radius: 5px;
          margin: 16px 0 24px 0;
          border-left: 4px solid var(--primary);
        }
        .toc h2 {
          border: none;
          padding: 0;
          margin: 0 0 8px 0;
        }
        .toc p {
          margin: 0;
          line-height: 1.8;
        }
        .back-to-top {
          display: inline-block;
          margin-top: 14px;
          padding: 8px 14px;
          background-color: var(--primary);
          color: white;
          border-radius: 4px;
          font-size: 0.9em;
          cursor: pointer;
        }
        .back-to-top:hover {
          background-color: var(--primary-dark);
          text-decoration: none;
        }
        .section {
          margin-bottom: 36px;
        }
      `}</style>

      {/* Point d'ancrage pour le retour en haut */}
      <div id="top"></div>

      <h1>xPertManager</h1>
      <p><b>version 1.0</b></p>
      <p><b>Septembre 2025</b></p>

      <div className="toc">
        <h2>Table des matières</h2>
        <p>
          <a href="#description-produit">Description du produit</a><br />
          <a href="#creer-structures">Créer et organiser des structures</a><br />
          <a href="#gerer-personnel">Gérer le personnel</a><br />
          <a href="#gerer-projets">Créer et gérer des projets</a><br />
          <a href="#creer-evenements">Créer et organiser des événements</a><br />
          <a href="#conferences-video">Organiser des visioconférences</a><br />
          <a href="#ressources-materielles">Gérer les ressources matérielles</a><br />
          <a href="#communication">Appels audio, messages texte et messagerie instantanée</a><br />
          <a href="#votes-electroniques">Organisation de votes électroniques</a><br />
          <a href="#divers">Divers : Matrice d'Eisenhower, notes autocollantes, groupes de diffusion</a><br />
        </p>
      </div>

      {/* Description du produit */}
      <div className="section" id="description-produit">
        <h2>Description du produit</h2>
        <p>
          <b>xPertManager</b> est une plateforme de gestion intégrée qui optimise le fonctionnement des organisations. Elle permet entre autres :
        </p>
        <ul>
          <li>la gestion des ressources humaines et matérielles</li>
          <li>la gestion de projets : conception, planification/ordonnancement, suivi et organisation des activités</li>
          <li>la gestion d'événements : création, planification et partage</li>
          <li>la gestion des communications : appels audio, messages texte, messagerie instantanée, visioconférence</li>
          <li>l'organisation de votes électroniques</li>
          <li>des outils d'organisation (tableau de bord avec matrice d'Eisenhower, notes autocollantes, rappels, etc.)</li>
        </ul>
        <p>Le côté serveur utilise une base de données MySQL. L'interface client de l'application décrite ici comprend quatre onglets :</p>
        <ol>
          <li>
            <b>Onglet Général</b> : Cette interface sert à la configuration générale de l'organisation :
            <ul>
              <li>création de structures et sous-structures,</li>
              <li>création et affectation d'agents aux structures,</li>
              <li>création et affectation de ressources matérielles,</li>
              <li>communications entre agents.</li>
            </ul>
            <img className="screenshot" src={generalImg} alt="Général" width="650" />
          </li>
          <li>
            <b>Onglet Tableau de bord</b> : Permet à l'utilisateur de mieux s'organiser et de voir la priorité des tâches à faire.
            <br />
            <img className="screenshot" src={dashboardImg} alt="Tableau de bord" width="650" />
          </li>
          <li>
            <b>Onglet Activités</b> : Cette interface permet :
            <ul>
              <li>la création de projets ou d'activités</li>
              <li>le partage et le traitement de projets ou d'activités</li>
              <li>le suivi de projets ou d'activités</li>
            </ul>
            <img className="screenshot" src={activitiesImg} alt="Activités" width="650" />
          </li>
          <li>
            <b>Onglet Événement</b> : Cette interface permet :
            <ul>
              <li>la création d'événements</li>
              <li>le suivi d'événements</li>
              <li>le lancement d'événements tels que les visioconférences organisées sur la plateforme</li>
            </ul>
            <img className="screenshot" src={eventsImg} alt="Événement" width="650" />
          </li>
        </ol>
        <a href="#top" className="back-to-top">Retour en haut</a>
      </div>

      {/* Créer des structures */}
      <div className="section" id="creer-structures">
        <h2>Créer et organiser des structures</h2>
        <ul>
          <li>
            <h3>Créer une structure</h3>
            <ol>
              <li>Après le lancement de l'application, choisissez la langue de travail et cliquez sur le bouton <b>Annuler</b>.</li>
              <li>Dans l'onglet <b>Général</b>, cliquez sur le bouton <img className="icon" src={newImg} alt="Nouveau" /></li>
              <li>Dans la boîte de dialogue qui apparaît, entrez le nom de la structure et le nom de la base de données associée. Définissez également les catégories de personnel et les types d'activités en cliquant sur les boutons correspondants. Vous pouvez également remplir la zone <b>description de la structure</b>.</li>
              <li>Cliquez ensuite sur le bouton <b>Créer</b>.</li>
            </ol>
            <div>
              <img className="screenshot" src={structureCreationImg} alt="Création de structure" width="450" />
              <img className="screenshot" src={staffCategoriesImg} alt="Catégories de personnel" width="450" />
              <img className="screenshot" src={typesOfActivitiesImg} alt="Types d'activités" width="450" />
            </div>
          </li>

          <li>
            <h3>Ajouter une sous-structure</h3>
            <p>Pour ajouter une sous-structure à une structure existante :</p>
            <ol>
              <li>Sélectionnez la structure de base.</li>
              <li>Cliquez sur le bouton <img className="icon" src={addImg} alt="Ajouter" /> dans l'onglet <b>Général</b>.</li>
              <li>Dans la boîte de dialogue, entrez les données requises. La sélection du responsable de la nouvelle structure est optionnelle et peut être faite ultérieurement.</li>
              <li>Cliquez sur le bouton <b>Créer</b>.</li>
              <li>Vous pouvez continuer à créer d'autres structures ou fermer la boîte de dialogue.</li>
            </ol>
            <img className="screenshot" src={addStructureImg} alt="Ajouter une structure" width="400" />
          </li>

          <li>
            <h3>Modifier/Supprimer une structure</h3>
            <ol>
              <li>Pour modifier une structure, sélectionnez-la et cliquez sur <img className="icon" src={modifImg} alt="Modifier" /> dans l'onglet <b>Général</b>.</li>
              <li>Pour supprimer une structure, sélectionnez-la et cliquez sur <img className="icon" src={deleteImg} alt="Supprimer" /> dans l'onglet <b>Général</b>.</li>
            </ol>
          </li>
        </ul>
        <a href="#top" className="back-to-top">Retour en haut</a>
      </div>

      {/* Gérer le personnel */}
      <div className="section" id="gerer-personnel">
        <h2>Gérer le personnel</h2>
        <ul>
          <li>
            <h3>Ajouter un agent</h3>
            <p>Pour ajouter un agent à une structure :</p>
            <ol>
              <li>Sélectionnez la structure dans l'onglet <b>Général</b>.</li>
              <li>Dans l'onglet <b>Ressources Humaines</b>, cliquez sur <img className="icon" src={addImg} alt="Ajouter" />.</li>
              <li>Dans la boîte de dialogue, entrez les données requises.</li>
              <li>Cliquez sur <b>Insérer</b>.</li>
              <li>Vous pouvez continuer à ajouter d'autres agents ou fermer la boîte de dialogue.</li>
            </ol>
            <img className="screenshot" src={employeeCreationImg} alt="Création d'employé" width="500" />
          </li>

          <li>
            <h3>Modifier/Supprimer un agent</h3>
            <ol>
              <li>Pour modifier un agent, sélectionnez-le et cliquez sur <img className="icon" src={modifImg} alt="Modifier" /> dans l'onglet <b>Ressources Humaines</b>.</li>
              <li>Pour supprimer un agent, sélectionnez-le et cliquez sur <img className="icon" src={deleteImg} alt="Supprimer" /> dans l'onglet <b>Ressources Humaines</b>.</li>
            </ol>
          </li>
        </ul>
        <a href="#top" className="back-to-top">Retour en haut</a>
      </div>

      {/* Gérer les projets */}
      <div className="section" id="gerer-projets">
        <h2>Créer et gérer des projets ou activités</h2>
        <ul>
          <li>
            <h3>Créer un projet ou une activité</h3>
            <ol>
              <li>Sélectionnez dans l'onglet <b>Général</b> la structure où le projet ou l'activité doit être créé.</li>
              <li>Dans l'onglet <b>Activités</b>, sélectionnez le projet ou l'activité de base. S'il n'y en a pas, sélectionnez le type (professionnel ou personnel).</li>
              <li>Cliquez sur <img className="icon" src={addImg} alt="Ajouter" />.</li>
              <li>Dans la boîte de dialogue, remplissez les données requises. Si les types d'activités ne sont pas définis, ils doivent être paramétrés en modifiant la structure de base.</li>
              <li>Cliquez sur <b>Insérer</b>.</li>
              <li>Vous pouvez continuer à créer d'autres projets ou activités ou fermer la boîte de dialogue.</li>
            </ol>
            <p>Lors de la création, des co-auteurs peuvent être définis qui pourront modifier ou créer des sous-activités.</p>
            <div><img className="screenshot" src={activityCreationImg} alt="Création d'activité" width="500" /></div>
          </li>

          <li>
            <h3>Modifier/Supprimer</h3>
            <ol>
              <li>Pour modifier un projet ou une activité, sélectionnez-le et cliquez sur <img className="icon" src={modifImg} alt="Modifier" /> dans l'onglet <b>Activités</b>.</li>
              <li>Pour supprimer un projet ou une activité, sélectionnez-le et cliquez sur <img className="icon" src={deleteImg} alt="Supprimer" /> dans l'onglet <b>Activités</b>.</li>
            </ol>
          </li>

          <li>
            <h3>Gérer un projet ou une activité</h3>
            <ul>
              <li><b>Ajouter des agents impliqués :</b> Cliquez sur <img className="icon" src={involvedAgentImg} alt="Ajouter agent impliqué" /> pour choisir le personnel qui participera au projet ou à l'activité.</li>
              <li><b>Attacher un document :</b> Cliquez sur <img className="icon" src={attachDocImg} alt="Attacher document" /> pour attacher un fichier au projet.</li>
              <li><b>Publier un projet :</b> Cliquez sur <img className="icon" src={postActivityImg} alt="Publier projet" /> pour le rendre accessible aux collaborateurs.</li>
              <li><b>Marquer comme terminé :</b> Cliquez sur <img className="icon" src={closeActivityImg} alt="Clôturer activité" /> une fois terminé.</li>
              <li><b>Définir des dépendances :</b> Utilisez l'option "Activités précédentes".</li>
              <li><b>Attribuer des ressources :</b> Utilisez l'option "Attribuer des ressources" pour allouer des ressources matérielles ou humaines.</li>
              <li><b>Visualisation :</b> Affichez sous forme de diagramme de Gantt ou de diagramme MPM, animez la progression du projet et exportez les diagrammes.</li>
            </ul>
          </li>
        </ul>
        <a href="#top" className="back-to-top">Retour en haut</a>
      </div>

      {/* Créer des événements */}
      <div className="section" id="creer-evenements">
        <h2>Créer et organiser des événements</h2>
        <ul>
          <li>
            <h3>Créer un événement</h3>
            <ol>
              <li>Sélectionnez l'onglet <b>Événement</b>.</li>
              <li>Cliquez sur le bouton <img className="icon" src={addImg} alt="Ajouter" />.</li>
              <li>
                Dans la boîte de dialogue qui apparaît, entrez les informations requises.
                Ajoutez les agents impliqués dans l'événement afin qu'ils puissent le voir dans leur interface.
                Pour ajouter un participant à l'événement, cliquez sur le bouton <img className="icon" src={addImg} alt="Ajouter" />.
                Dans l'onglet <b>Ressources Humaines</b> sous l'onglet <b>Général</b> qui apparaît,
                sélectionnez le participant et cliquez sur le bouton <img className="icon" src={addImg} alt="Ajouter" />.
              </li>
              <li>
                Vous pouvez ajouter d'autres participants à l'événement en suivant la même procédure
                ou en chargeant un groupe de diffusion déjà créé (<img className="icon" src={openImg} alt="Ouvrir" />).
              </li>
            </ol>
            <div><img className="screenshot" src={planEventImg} alt="Créer et planifier un événement" width="500" /></div>
          </li>

          <li>
            <h3>Modifier/Supprimer un événement</h3>
            <ol>
              <li>Pour modifier un événement, sélectionnez-le et cliquez sur <img className="icon" src={modifImg} alt="Modifier" />.</li>
              <li>Pour supprimer un événement, sélectionnez-le et cliquez sur <img className="icon" src={deleteImg} alt="Supprimer" />.</li>
            </ol>
          </li>
        </ul>
        <a href="#top" className="back-to-top">Retour en haut</a>
      </div>

      {/* Conférences vidéo */}
      <div className="section" id="conferences-video">
        <h2>Organiser une visioconférence</h2>
        <ul>
          <li>
            <h3>Pour organiser une visioconférence instantanée</h3>
            <ul>
              <li>Dans l'onglet <b>Événements</b>, cliquez sur <img className="icon" src={visioInstantImg} alt="Visio instantanée" />.</li>
              <li>Dans la fenêtre de visioconférence, ajoutez des participants en cliquant sur <img className="icon" src={addImg} alt="Ajouter" />.</li>
            </ul>
          </li>

          <li>
            <h3>Pour démarrer une visioconférence planifiée</h3>
            <ul>
              <li>Sélectionnez l'événement dans l'onglet <b>Événements</b> et cliquez sur <img className="icon" src={launchImg} alt="Lancer" />.</li>
              <li>Les agents qui doivent participer à la visioconférence recevront une invitation pour rejoindre la réunion, s'ils sont connectés.</li>
            </ul>
            <p>Dans la fenêtre de visioconférence, les boutons suivants permettent :</p>
            <ul>
              <li><img className="icon" src={addImg} alt="Ajouter" /> Inviter un participant à la réunion.
                Après avoir cliqué sur ce bouton, sélectionnez le participant dans la liste du personnel
                sous l'onglet Ressources Humaines, puis cliquez à nouveau sur <img className="icon" src={addImg} alt="Ajouter" />.</li>
              <li><img className="icon" src={groupImg} alt="Groupe" /> Inviter un groupe de participants d'un groupe de diffusion précédemment créé.
                Après avoir cliqué sur ce bouton, chargez le fichier du groupe depuis son emplacement.</li>
              <li><img className="icon" src={stopMicroImg} alt="Micro" /> Activer/désactiver le microphone.</li>
              <li><img className="icon" src={stopShareImg} alt="Partage écran" /> Activer/désactiver le partage d'écran.</li>
              <li><img className="icon" src={handOffImg} alt="Prendre la parole" /> S'inscrire/se désinscrire de la liste des orateurs pour prendre la parole.</li>
              <li><img className="icon" src={stopEditNotesImg} alt="Édition notes" /> Activer/désactiver le mode d'édition des notes de réunion.
                Le participant qui active le mode d'édition des notes peut écrire des notes dans la zone dédiée,
                qui seront affichées en temps réel dans les interfaces de tous les participants.
                Un seul participant peut activer le mode d'édition des notes à la fois.</li>
              <li><img className="icon" src={voteImg} alt="Vote" /> Lancer un vote électronique.
                Tous les participants pourront voter et voir les résultats dans leurs interfaces.</li>
              <li><b>{'>>'}</b> Envoyer un message texte saisi à tous les participants.</li>
              <li><img className="icon" src={stopImg} alt="Quitter" /> Quitter la visioconférence.</li>
            </ul>
          </li>
        </ul>
        <div><img className="screenshot" src={videoConfImg} alt="Visioconférence" width="600" /></div>
        <a href="#top" className="back-to-top">Retour en haut</a>
      </div>

      {/* Ressources matérielles */}
      <div className="section" id="ressources-materielles">
        <h2>Gérer les ressources matérielles</h2>
        <ul>
          <li>
            <h3>Ajouter une ressource matérielle</h3>
            <ul>
              <li>Sélectionnez l'onglet <b>Général</b>.</li>
              <li>Sélectionnez la structure où la ressource matérielle sera affectée.</li>
              <li>Sélectionnez l'onglet <b>Ressources Matérielles</b> en bas de l'interface.</li>
              <li>Cliquez sur le bouton <img className="icon" src={addImg} alt="Ajouter" />.</li>
              <li>Dans la boîte de dialogue qui apparaît, remplissez les informations requises.</li>
              <li>Définissez les catégories de ressources matérielles si nécessaire.</li>
              <li>Cliquez sur <b>Ajouter</b> pour ajouter la ressource.</li>
              <li>Vous pouvez continuer à ajouter d'autres ressources ou fermer la boîte de dialogue.</li>
            </ul>
          </li>

          <li>
            <h3>Modifier/Supprimer une ressource matérielle</h3>
            <ul>
              <li>Pour modifier une ressource matérielle, sélectionnez-la dans l'onglet <b>Ressources Matérielles</b>
                et cliquez sur <img className="icon" src={modifImg} alt="Modifier" />.
                Effectuez les modifications nécessaires dans la boîte de dialogue qui apparaît.</li>
              <li>Pour supprimer une ressource matérielle, sélectionnez-la dans l'onglet <b>Ressources Matérielles</b>
                et cliquez sur <img className="icon" src={deleteImg} alt="Supprimer" />.</li>
            </ul>
          </li>

          <li>
            <h3>Planifier une ressource matérielle</h3>
            <p>La planification des ressources matérielles se fait dans la section <b>Gérer un projet ou une activité</b>.</p>
          </li>
        </ul>

        <div><img className="screenshot" src={materialRessourceCategoriesImg} alt="Création de catégories de ressources matérielles" width="450" /></div>
        <div><img className="screenshot" src={materialRessoureCreationImg} alt="Affectation de ressources matérielles" width="400" /></div>

        <a href="#top" className="back-to-top">Retour en haut</a>
      </div>

      {/* Communication */}
      <div className="section" id="communication">
        <h2>Appels audio, messages texte et messagerie instantanée</h2>
        <ul>
          <li>
            <h3>Passer un appel audio</h3>
            <ol>
              <li>Sélectionnez l'onglet <b>Général</b>.</li>
              <li>Sélectionnez l'onglet <b>Ressources Humaines</b> en bas de l'interface.</li>
              <li>Sélectionnez l'agent que vous souhaitez appeler (doit être en ligne).</li>
              <li>Cliquez sur le bouton <img className="icon" src={phoneCallImg} alt="Appel" />.</li>
            </ol>
          </li>
        </ul>
        <div><img className="screenshot" src={audioCallImg} alt="Appel audio" width="300" /></div>

        <ul>
          <li>
            <h3>Envoyer un message texte</h3>
            <ol>
              <li>Sélectionnez l'onglet <b>Général</b>.</li>
              <li>Sélectionnez l'onglet <b>Ressources Humaines</b> en bas de l'interface.</li>
              <li>Sélectionnez l'agent à qui vous souhaitez envoyer un message (même s'il est hors ligne).</li>
              <li>Cliquez sur le bouton <img className="icon" src={messageImg} alt="Message" />.</li>
              <li>
                Écrivez le message et cliquez sur envoyer.
                Si le destinataire est en ligne, il le verra immédiatement ; sinon, il le verra lors de sa connexion.
                Il est possible d'envoyer un message à un groupe de destinataires (<img className="icon" src={groupImg} alt="Groupe" />).
              </li>
            </ol>
          </li>
        </ul>

        <p>
          Un message texte reçu peut être converti en note autocollante pour les rappels (<img className="icon" src={stickyImg} alt="Note autocollante" />)
          ou supprimé si nécessaire (<img className="icon" src={strashImg} alt="Supprimer" />).
        </p>
        <div><img className="screenshot" src={textMessageImg} alt="Message texte" width="500" /></div>

        <ul>
          <li>
            <h3>Démarrer un chat de messagerie instantanée</h3>
            <ol>
              <li>Sélectionnez l'onglet <b>Général</b>.</li>
              <li>Sélectionnez l'onglet <b>Ressources Humaines</b> en bas de l'interface.</li>
              <li>Sélectionnez l'agent avec qui vous souhaitez chatter (doit être en ligne).</li>
              <li>Cliquez sur le bouton <img className="icon" src={chatImg} alt="Chat" />.</li>
            </ol>
            <div><img className="screenshot" src={textChatImg} alt="Messagerie instantanée" width="400" /></div>
          </li>
        </ul>

        <a href="#top" className="back-to-top">Retour en haut</a>
      </div>

      {/* Votes électroniques */}
      <div className="section" id="votes-electroniques">
        <h2>Votes électroniques</h2>
        <p>
          Le vote électronique est intégré à un événement. Il peut être planifié ou effectué instantanément.
          Pour organiser un vote électronique :
        </p>
        <ol>
          <li>Lancez l'événement associé.</li>
          <li>Cliquez sur le bouton <img className="icon" src={voteImg} alt="Vote" />.</li>
          <li>Entrez le libellé du vote dans la boîte de dialogue qui apparaît et cliquez sur <b>OK</b>.</li>
          <li>Créez et ajoutez les options de vote.</li>
          <li>Spécifiez l'heure de fin du vote.</li>
          <li>Cliquez sur <b>Démarrer</b> pour lancer le vote. Les options apparaîtront dans les interfaces de tous les participants afin qu'ils puissent voter.</li>
          <li>À la fin du vote, cliquez sur <b>Arrêter</b>. Les résultats du vote apparaîtront dans les interfaces de tous les participants.</li>
        </ol>
        <div>
          <img className="screenshot" src={createVoteImg} alt="Créer un vote" width="400" />
          <img className="screenshot" src={votingImg} alt="Vote" width="400" />
          <img className="screenshot" src={voteResultImg} alt="Résultats du vote" width="400" />
        </div>
        <a href="#top" className="back-to-top">Retour en haut</a>
      </div>

      {/* Divers */}
      <div className="section" id="divers">
        <h2>Divers : Matrice d'Eisenhower, notes autocollantes, groupes de diffusion</h2>
        <ul>
          <li>
            <h3>Matrice d'Eisenhower</h3>
            <p>La matrice d'Eisenhower est intégrée au tableau de bord. Elle permet à l'utilisateur d'avoir une vision claire de :</p>
            <ol>
              <li>Les tâches importantes et urgentes (à faire immédiatement)</li>
              <li>Les tâches importantes mais non urgentes (à planifier)</li>
              <li>Les tâches non importantes mais urgentes (à déléguer)</li>
              <li>Les tâches non importantes et non urgentes (peuvent être ignorées)</li>
            </ol>
            <p>
              Les activités ou événements créés par l'utilisateur ou reçus d'autres personnes sont automatiquement intégrés dans
              la matrice d'Eisenhower — dans la zone <b>Tâches importantes et urgentes</b> si l'échéance est proche,
              sinon dans la zone <b>Tâches importantes mais non urgentes</b>.
              L'utilisateur peut attribuer ou réattribuer des priorités pour les activités et événements
              depuis les onglets <b>Activités</b> et <b>Événements</b> en sélectionnant un élément
              et en cliquant sur le bouton <img className="icon" src={affectpriorityImg} alt="Affecter priorité" />.
            </p>
          </li>

          <li>
            <h3>Créer des notes autocollantes</h3>
            <ol>
              <li>Cliquez sur le bouton <b>Post-it</b> et choisissez <b>Modifier</b>.</li>
              <li>Dans la boîte de dialogue qui apparaît, cliquez sur <b>Ajouter</b> pour créer une note autocollante.</li>
              <li>Vous pouvez continuer à créer d'autres notes autocollantes ou fermer la boîte de dialogue.</li>
            </ol>
          </li>

          <li>
            <h3>Afficher les notes autocollantes</h3>
            <ul>
              <li>Cliquez sur le bouton <b>Post-it</b> et choisissez <b>Afficher/Masquer</b>.</li>
              <li>Les notes autocollantes apparaîtront et défileront les unes après les autres.</li>
              <li>Pour fermer la fenêtre des notes autocollantes, cliquez sur le bouton <img className="icon" src={stopImg} alt="Fermer" />
                dans la fenêtre ou cliquez sur <b>Post-it</b> → <b>Afficher/Masquer</b>.</li>
            </ul>
            <div>
              <img className="screenshot" src={createStickyNoteImg} alt="Créer une note autocollante" width="400" />
              <img className="screenshot" src={showStickyNoteImg} alt="Afficher les notes autocollantes" width="400" />
            </div>
          </li>

          <li>
            <h3>Créer des groupes de diffusion</h3>
            <p>Pour créer un groupe de diffusion :</p>
            <ol>
              <li>Sélectionnez l'onglet <b>Général</b>.</li>
              <li>Sélectionnez l'onglet <b>Ressources Humaines</b> en bas de l'interface.</li>
              <li>Cliquez sur le bouton <img className="icon" src={groupImg} alt="Groupe" />.</li>
              <li>Dans la boîte de dialogue qui apparaît, entrez le nom du groupe et ajoutez des membres.</li>
              <li>Sauvegardez le groupe dans un fichier pour une utilisation future.</li>
            </ol>
            <div><img className="screenshot" src={diffusionGroupImg} alt="Groupe de diffusion" width="400" /></div>
          </li>
        </ul>
        <a href="#top" className="back-to-top">Retour en haut</a>
      </div>

      {/* Auteur */}
      <h2>Auteur</h2>
      <p>
        Prof. Lamine THIAW<br/>
        Département de Génie Électrique<br/>
        École Supérieure Polytechnique<br/>
        Université Cheikh Anta Diop, Dakar<br/>
        Email : lamine.thiaw@ucad.edu.sn<br/>
      </p>
      <div>Septembre 2025</div>
    </div>
  );
};

export default Guide;
