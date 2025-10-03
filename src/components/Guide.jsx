import React from 'react';

// Import des images nécessaires
import xPertCLogo from '../assets/images/xPertC.png';
import newIcon from '../assets/images/new.png';
import structureCreation from '../assets/images/structureCreation.png';
import staffCategories from '../assets/images/staffCategories.png';
import typesOfActivities from '../assets/images/typesOfActivities.png';
import addIcon from '../assets/images/add.png';
import addStructure from '../assets/images/addStructure.png';
import modifIcon from '../assets/images/modif.png';
import deleteIcon from '../assets/images/delete.png';
import employeeCreation from '../assets/images/employeeCreation.png';
import activityCreation from '../assets/images/activityCreation.png';
import involvedAgent from '../assets/images/involvedAgent.png';
import attachDoc from '../assets/images/attachDoc.png';
import postActivity from '../assets/images/postActivity.png';
import closeActivity from '../assets/images/closeActivity.png';
import ganntDiagram from '../assets/images/ganntDiagram.png';
import MPMdiagram from '../assets/images/MPMdiagram.png';
import planEvent from '../assets/images/planEvent.png';
import launch from '../assets/images/launch.png';
import visioInstant from '../assets/images/visioInstant.png';
import videoConf from '../assets/images/videoConf.png';
import phoneCall from '../assets/images/phoneCall.png';
import message from '../assets/images/message.png';
import group from '../assets/images/group.png';
import chat from '../assets/images/chat.png';
import vote from '../assets/images/vote.png';

const Guide = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-6">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 text-center">
                    <div className="flex items-center justify-center gap-4 mb-2">
                        <div className="w-16 h-16 bg-white rounded-full p-2 shadow-lg flex items-center justify-center">
                            <img 
                                src={xPertCLogo} 
                                alt="xPertManager Logo" 
                                className="w-full h-full object-contain" 
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<span class="text-blue-600 font-bold text-2xl">X</span>';
                                }}
                            />
                        </div>
                        <h1 className="text-4xl font-bold">xPertManager</h1>
                    </div>
                    <p className="text-xl opacity-90">Guide d'utilisation complet</p>
                </div>
                
                <div className="p-8">
                    {/* Table des matières */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">Table des matières</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <a href="#xPertManagerDoc" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-300 text-blue-700 hover:text-blue-900 font-medium">📖 Description du produit</a>
                        <a href="#structureDoc" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-300 text-blue-700 hover:text-blue-900 font-medium">🏢 Créer et organiser des structures</a>
                        <a href="#agentDoc" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-300 text-blue-700 hover:text-blue-900 font-medium">👥 Gérer le personnel</a>
                        <a href="#activityDoc" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-300 text-blue-700 hover:text-blue-900 font-medium">📊 Créer et gérer des projets</a>
                        <a href="#eventDoc" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-300 text-blue-700 hover:text-blue-900 font-medium">📅 Créer et organiser des évènements</a>
                        <a href="#meetingDoc" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-300 text-blue-700 hover:text-blue-900 font-medium">📹 Organiser des visioconférences</a>
                        <a href="#materialRessourceDoc" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-300 text-blue-700 hover:text-blue-900 font-medium">🔧 Gérer des ressources matérielles</a>
                        <a href="#communicateDoc" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-300 text-blue-700 hover:text-blue-900 font-medium">💬 Appels audio inter-ordinateurs, messages texte et messagerie instantanée</a>
                        <a href="#votingDoc" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-300 text-blue-700 hover:text-blue-900 font-medium">🗳️ Organisation de votes électroniques</a>
                        <a href="#toolstDoc" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-300 text-blue-700 hover:text-blue-900 font-medium">📝 Outils d'aide</a>
                    </div>

                    {/* Description du produit */}
                    <h2 id="xPertManagerDoc" className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b-2 border-blue-500">Description du produit</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <b>xPertManager</b> est une plateforme intégrée de gestion qui optimise le fonctionnement des organisations. Elle permet entre autres:
                        <ul className="list-none list-inside space-y-2 mb-4 text-gray-700">
                            <li className="mb-2">la gestion des ressources humaines et matérielles</li>
                            <li className="mb-2">la gestion de projets: conception, planification/ordonnancement, suivi et organisation des activités</li>
                            <li className="mb-2">la gestion d'évènements: création, planification, partage</li>
                            <li className="mb-2">la gestion des communications: appels audio inter-ordinateurs, messages texte, messagerie instantanée, visio conférencee</li>
                            <li className="mb-2">l'organisation de votes électroniques</li>
                            <li className="mb-2">Outils d'aide à l'organisation (tableau de bord avec une matrice de Eisenhover, post-it, rappels, etc.)</li>
                        </ul>
                    </p>

                    {/* Créer et organiser des structures */}
                    <section id="structureDoc" className="mb-12 p-6 bg-gray-50 rounded-xl">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">🏢 Créer et organiser des structures</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <ul className="list-none list-inside space-y-2 mb-4 text-gray-700">
                                <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Créer une structure</h3></li>    
                                <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">    
                                    <li className="mb-2">Après lancement de l'application, choisir la langue de travail et cliquer sur le bouton <b>Annuler</b>.</li>    
                                    <li className="mb-2"> Dans l'onglet <b>Général</b>, cliquer sur le bouton     
                                        <img src={newIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" alt="Nouveau" />. </li>     
                                    <li className="mb-2">Dans la boîte de dialogue qui s'affiche, renseigner le nom de la structure ainsi que le nom de la base de données associée à la structure.    
                                        Définir également les catégories de personnel de la structure et les types d'activités,     
                                        en cliquant sur les boutons prévus à cet effet.    
                                        Vous pouvez également renseigner la zone <b>description de la structure</b>.</li>    
                                    <li className="mb-2">Cliquer ensuite sur le bouton<b> Créer</b>.</li>   
                                    <div>
                                        <img src={structureCreation} className="max-w-full h-auto rounded-lg shadow-md my-2" alt="Création structure" width="400" />
                                        <img src={staffCategories} className="max-w-full h-auto rounded-lg shadow-md my-2" alt="Catégories de personnel" width="400" />
                                        <img src={typesOfActivities} className="max-w-full h-auto rounded-lg shadow-md my-2" alt="Types d'activités" width="400" />
                                    </div> 
                                </ol>    
                                <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Ajouter une sous structure</h3></li>    
                                Pour ajouter une sous structure à une structure existante    
                                <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">    
                                    <li className="mb-2">Sélectionner la structure de base</li>    
                                    <li className="mb-2"> Cliquer sur le bouton     
                                        <img src={addIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" /> de l'onglet <b>Général</b> </li>    
                                    <li className="mb-2">Dans la boîte de dialogue qui s'affiche, saisir les données requises.     
                                        Le choix du responsable de la structure à créer n'est pas obligatoire et peut être fait ultérieurement.</li>    
                                    <li className="mb-2"> Cliquer sur le bouton <b>Créer</b>.</li>
                                    <li className="mb-2"> Vous pouvez continuer à créer d'autres structures, ou fermer la boîte de dialogue.</li>
                                </ol>    
                                <img src={addStructure} className="max-w-full h-auto rounded-lg shadow-md my-2" alt="Types d'activités" width="400" />
                                
                                <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Modifier/supprimer une structure</h3></li>    
                                <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">    
                                    <li className="mb-2">Pour modifier une structure, sélectionner la structure et cliquer sur le bouton     
                                        <img src={modifIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" /> de l'onglet <b>Général</b> </li>    
                                    <li className="mb-2">Pour supprimer une structure, sélectionner la structure et cliquer sur le bouton     
                                        <img src={deleteIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" /> de l'onglet <b>Général</b> </li>    
                                </ol>    
                            </ul>          
                        </p>
                    </section>

                    {/* Gérer le personnel */}
                    <h2 id="agentDoc" className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b-2 border-blue-500">Gérer le personnel</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <ul className="list-none list-inside space-y-2 mb-4 text-gray-700">
                           <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Ajouter un agent</h3></li>
                                Pour ajouter un agent dans une structure
                                <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                                    <li className="mb-2">Sélectionner la structure dans l'onglet <b>Général</b></li>
                                    <li className="mb-2">Dans l'onglet <b>Ressources humaines</b>, cliquer sur le bouton 
                                        <img src={addIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" /> </li>
                                      <li className="mb-2">Dans la boîte de dialogue qui s'affiche, saisir les données requises.</li>   
                                      <li className="mb-2"> Cliquer sur le bouton <b>Insérer</b>.</li>
                                      <li className="mb-2"> Vous pouvez continuer à insérer d'autres agents, ou fermer la boîte de dialogue.</li>
                                </ol>
                                <img src={employeeCreation} className="max-w-full h-auto rounded-lg shadow-md my-2" alt="Création d'un employé" width="500" /> 
                            <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Modifier/supprimer un agent</h3></li>
                                <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                                    <li className="mb-2">Pour modifier un agent, sélectionner l'agent et cliquer sur le bouton 
                                      <img src={modifIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" /> de l'onglet <b>Ressources humaines</b></li>
                                      <li className="mb-2">Pour supprimer un agent, sélectionner l'agent et cliquer sur le bouton 
                                      <img src={deleteIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" /> de l'onglet <b>Ressources humaines</b></li>
                                </ol>
                        </ul>    
                    </p>

                    {/* Créer et gérer des projets */}
                    <h2 id="activityDoc" className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b-2 border-blue-500">Créer et gérer des projets ou des activités</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <ul className="list-none list-inside space-y-2 mb-4 text-gray-700">
                            <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Créer un projet ou une activité</h3></li>
                                <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                                    <li className="mb-2">Sélectionner dans l'onglet <b>Général</b> la structure où le projet ou l'activité doit être créé</li>
                                    <li className="mb-2">Dans l'onglet <b>Activités</b>, sélectionner le projet ou l'activité de base. S'il n'y en a pas, 
                                    sélectioner le type (professionnelle ou personnelle)</li> 
                                    <li className="mb-2"> Cliquer sur le bouton  
                                    <img src={addIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" /> </li>
                                    <li className="mb-2">Dans la boîte de dialogue qui s'affiche, saisir les données requises.  
                                    Si les types d'activités n'ont pas été définies, il faut le faire en modifiant la structure de base.</li>
                                    <li className="mb-2"> Cliquer sur le bouton <b>Insérer</b>.</li>
                                    <li className="mb-2"> Vous pouvez continuer à créer d'autres projets ou activités, ou fermer la boîte de dialogue.</li>
                                </ol>
                            Pendant la création du projet (ou de l'activité), il est possible de définir des co-auteurs 
                            qui pourront modifier et/ou créer des sous-activités.<br/>
                            <img src={activityCreation} className="max-w-full h-auto rounded-lg shadow-md my-2" alt="Création d'une activité (ou d'un projet)" width="500" /> 
                            <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Modifier/supprimer un projet ou une activité</h3></li>
                                <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                                    <li className="mb-2">Pour modifier un projet ou une activité, sélectionner le et cliquer sur le bouton 
                                    <img src={modifIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" /> de l'onglet <b>Activités</b> </li>
                                    <li className="mb-2">Pour supprimer un projet ou une activité, sélectionner le et cliquer sur le bouton 
                                    <img src={deleteIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" /> de l'onglet <b>Activités</b>  </li>
                                </ol>
                            <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Gérer un projet ou une activité</h3></li>
                                <ul className="list-none list-inside space-y-2 mb-4 text-gray-700">
                                    <li className="mb-2">Pour définir les agents impliqués dans un projet (ou une activité), en dehors du responsable de l'équipe, cliquer sur le bouton 
                                        <img src={involvedAgent} className="max-w-full h-auto rounded-lg shadow-md my-2" /> de l'onglet <b>Activités</b> et renseigner 
                                        les données requises dans la boîte de dialogue qui s'affiche. </li>
                                    <li className="mb-2">Pour attacher un document à un projet ou une activité, cliquer sur le bouton 
                                        <img src={attachDoc} className="max-w-full h-auto rounded-lg shadow-md my-2" /> de l'onglet <b>Activités</b> et renseigner 
                                        les données requises dans la boîte de dialogue qui s'affiche. </li>
                                    <li className="mb-2">Pour publier un projet ou une activité, cliquer sur le bouton 
                                        <img src={postActivity} className="max-w-full h-auto rounded-lg shadow-d my-2" /> de l'onglet <b>Activités</b>.  
                                        Les agents impliqués dans le projet (ou l'activité) le verront dans leur interface lorsque viendra 
                                        leur tour d'y travailler, selon la planification faite. Les auteurs du projet (ou de l'activité) ainsi que 
                                        les responsables verront toujours le projet (ou l'activité) dans leur interface, tant qu'il est actif.</li>
                                    <li className="mb-2">Pour terminer une activité sur laquelle vous travaillez, cliquer sur le bouton 
                                        <img src={closeActivity} className="max-w-full h-auto rounded-lg shadow-md my-2" /> de l'onglet <b>Activités</b>. 
                                        L'activité sera alors transmise à l'agent (ou aux agents) impliqué(s), conformément à la planification faite.</li>
                                    <li className="mb-2">Après avoir défini toutes les activités d'un projet (ou d'une activité de base), il faut faire la planification 
                                        (définir l'antériorité des tâches). Pour cela, sélectionner une des activités du projet et cliquer sur le bouton 
                                        <img src={modifIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" /> 
                                        Dans la boîte de dialogue de modification, cliquer sur le bouton <b> Activités précédentes</b> et définir l'antériorité des actvités.</li>
                                    <li className="mb-2">Pour affecter des ressources matérielles à une activité, sélectionner l'activité, cliquer sur le bouton de modification. 
                                        Dans la boîte de dialogue de modification, cliquer sur le bouton <b>Affecter des ressources</b> pour planifier l'utilisation de la ressources.</li>
                                     <li className="mb-2">On peut visualiser la planification et l'ordonnancement des activités d'un projet avec le <b>diagramme de Gannt</b> ou 
                                        le <b>diagramme MPM</b> (Méthode des Potentiels Metra) en choisissant la méthode en bas dans l'onglet <b>Activités</b>. En cochant la case <b>Animer</b>, 
                                        on peut suivre l'évolution du projet.</li>
                                </ul>
                                
                                <img src={ganntDiagram} className="max-w-full h-auto rounded-lg shadow-md my-2" alt="Diagramme de Gannt d'un projet" width="700" /> 
                                <img src={MPMdiagram} className="max-w-full h-auto rounded-lg shadow-md my-2" alt="Diagramme MPM d'un projet" width="700" /> 
                        </ul>
                    </p>

                    {/* Créer et organiser des évènements */}
                    <h2 id="eventDoc" className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b-2 border-blue-500">Créer et organiser des évènements</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                       <ul className="list-none list-inside space-y-2 mb-4 text-gray-700">
                            <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Créer un évènement</h3></li>  
                                <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                                    <li className="mb-2">Sélectionner l'onglet <b>Evènement</b></li>
                                    <li className="mb-2"> Cliquer sur le bouton  
                                        <img src={addIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" /></li>
                                    <li className="mb-2">Dans la boîte de dialogue qui s'affiche, saisir les données requises.  
                                    Ajouter les agents concernés par l'évènement afin qu'ils puissent le voir dans leur interface. 
                                    Pour ajouter un participant à l'évènement, cliquer sur le bouton 
                                    <img src={addIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" />.  
                                    Dans l'onglet <b>Ressources humaines</b> de l'onglet <b>Général</b> qui est affiché, 
                                    sélectionner le participant et cliquer sur le bouton 
                                    <img src={addIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" />.</li> 
                                    <li className="mb-2"> Vous pouvez ajouter d'autres participants à l'évènement en suivant la même procédure.</li>
                                </ol>
                                <img src={planEvent} className="max-w-full h-auto rounded-lg shadow-md my-2" alt="Créer et planifier un évènement" width="500" /> 
                                
                            <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Modifier/supprimer un évènement</h3></li>
                                <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                                    <li className="mb-2">Pour modifier un évènement, sélectionner le et cliquer sur le bouton 
                                    <img src={modifIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" /> </li>
                                    <li className="mb-2">Pour supprimer un évènement, sélectionner le et cliquer sur le bouton 
                                    <img src={deleteIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" /> </li>
                                </ol>
                        </ul>
                    </p>

                    {/* Organiser une visioconférence */}
                    <h2 id="meetingDoc" className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b-2 border-blue-500">Organiser une visioconférence</h2>
                     <p className="text-gray-700 leading-relaxed mb-4">
                         <ul className="list-none list-inside space-y-2 mb-4 text-gray-700">
                             <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Pour organiser une visioconférence instantanée</h3></li>  
                             <ul className="list-none list-inside space-y-2 mb-4 text-gray-700">
                                  <li className="mb-2">Dans l'onglet <b>Evènements</b>, cliquer sur le bouton 
                                  <img src={visioInstant} className="max-w-full h-auto rounded-lg shadow-md my-2" /> </li> 
                                 <li className="mb-2">Dans la fenêtre de la visio conférence, ajouter les participants en cliquant sur le bouton 
                                 <img src={addIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" /> </li>
                             </ul>
                             <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Pour démarrer une visioconférence planifiée</h3></li> 
                             <ul className="list-none list-inside space-y-2 mb-4 text-gray-700">
                                  <li className="mb-2">Sélectionner l'évènement dans l'onglet <b>Evènements</b> et cliquer sur le bouton 
                                  <img src={launch} className="max-w-full h-auto rounded-lg shadow-md my-2" /> </li> 
                                 <li className="mb-2">Les agents devant participer à la visio conférence recevront une invitation à commencer 
                                 la réunion, s'ils sont connectés. </li>
                             </ul>
                         </ul>
                         <img src={videoConf} className="max-w-full h-auto rounded-lg shadow-md my-2" alt="Créer et planifier un évènement" width="600" /> 
                     </p>

                    {/* Gérer des ressources matérielles */}
                    <h2 id="materialRessourceDoc" className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b-2 border-blue-500">Gérer des ressources matérielles</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <ul className="list-none list-inside space-y-2 mb-4 text-gray-700">
                                <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Ajouter une ressource matérielle</h3></li>  
                                    <ul className="list-none list-inside space-y-2 mb-4 text-gray-700">
                                        <li className="mb-2">Sélectionner l'onglet <b>Général</b></li>
                                        <li className="mb-2">Sélectionner la structure où affecter la ressource matérielle</li>
                                        <li className="mb-2">Sélectionner l'onglet <b>Ressources matérielles</b> dans la partie inférieure de l'interface</li> 
                                        <li className="mb-2">Cliquer sur le bouton <img src={addIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" /> </li> 
                                        <li className="mb-2">Dans la boîte de dialogue qui s'affiche, renseigner les informations requises.</li>
                                        <li className="mb-2">Au besoin définir les catégories de ressources matérielles. </li>
                                        <li className="mb-2">Cliquer sur le bouton <b>Ajouter</b> pour ajouter la ressource. </li>
                                        <li className="mb-2">On peut continuer à ajouter d'autres ressources ou fermer la boîte de dialogue.</li>
                                    </ul>
                                <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Modifier/supprimer une ressource matérielle</h3></li> 
                                    <ul className="list-none list-inside space-y-2 mb-4 text-gray-700">
                                        <li className="mb-2">Pour modifier une ressource matérielle, sélectionner la ressource dans l'onglet <b>Ressources matérielles</b> et 
                                              cliquer sur le bouton <img src={modifIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" />. 
                                               Effectuer les modifications nécessaires dans la boîte de dialogue qui s'affiche.</li> 
                                        <li className="mb-2">Pour supprimer une ressource matérielle, sélectionner la ressource dans l'onglet <b>Ressources matérielles</b> et 
                                                cliquer sur le bouton  <img src={deleteIcon} className="max-w-full h-auto rounded-lg shadow-md my-2" />. </li>
                                    </ul>
                                <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Planifier une ressource matérielle</h3></li> 
                                    La planification des ressources matérielles se fait dans la rubrique <b>Gérer un projet ou une activité.</b>
                                </ul>
                            </p>

                    {/* Appels téléphoniques et messagerie */}
                    <h2 id="communicateDoc" className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b-2 border-blue-500">Appels téléphoniques et messagerie instantanée</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <ul className="list-none list-inside space-y-2 mb-4 text-gray-700">
                                    <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Pour faire un appel téléphonique</h3></li>  
                                        <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                                         <li className="mb-2">Sélectionner l'onglet <b>Général</b></li>
                                         <li className="mb-2">Sélectionner l'onglet <b>Ressources humaines</b> dans la partie inférieure de l'interface</li>
                                         <li className="mb-2">Sélectionner l'agent qu'on veut appeler (il doit être connecté)</li>
                                         <li className="mb-2">Cliquer sur le bouton 
                                         <img src={phoneCall} className="max-w-full h-auto rounded-lg shadow-md my-2" /> </li> 
                                         </ol>
                                </ul>
                                <ul className="list-none list-inside space-y-2 mb-4 text-gray-700">
                                    <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Pour envoyer un message texte</h3></li>  
                                        <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                                         <li className="mb-2">Sélectionner l'onglet <b>Général</b></li>
                                         <li className="mb-2">Sélectionner l'onglet <b>Ressources humaines</b> dans la partie inférieure de l'interface</li>
                                         <li className="mb-2">Sélectionner l'agent à qui on veut envoyer un message (même s'il n'est pas connecté)</li>
                                         <li className="mb-2">Cliquer sur le bouton 
                                         <img src={message} className="max-w-full h-auto rounded-lg shadow-md my-2" /> </li> 
                                         <li className="mb-2">Rédiger le message et cliquer sur envoyer. Si le destinataire est connecté, 
                                         il verra le message s'affiché dans son interface. Sinon il le verra dès qu'il se connecte. 
                                         Il est possible d'envoyer un message à un groupe de destinataires (groupe de diffusion 
                                         <img src={group} className="max-w-full h-auto rounded-lg shadow-md my-2" /> ) </li>
                                         </ol>
                                </ul>
                                <ul className="list-none list-inside space-y-2 mb-4 text-gray-700">
                                    <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Pour démarrer une messagerie instantanée</h3></li>  
                                        <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                                         <li className="mb-2">Sélectionner l'onglet <b>Général</b></li>
                                         <li className="mb-2">Sélectionner l'onglet <b>Ressources humaines</b> dans la partie inférieure de l'interface</li>
                                         <li className="mb-2">Sélectionner l'agent avec qui on veut comuniquer (il doit être connecté)</li>
                                         <li className="mb-2">Cliquer sur le bouton 
                                         <img src={chat} className="max-w-full h-auto rounded-lg shadow-md my-2" /> </li> 
                                         </ol>
                                </ul>
                            </p>

                    {/* Vote électronique */}    
                    <h2 id="votingDoc" className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b-2 border-blue-500">Vote électronique</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                             Le vote électronique est intégré dans un évènement. il peut donc être planifié ou réalisé en 
                             instantané. Pour Organiser un vote électronique: 
                             <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                                <li className="mb-2">Lancer l'évènement associé </li> 
                                <li className="mb-2">Cliquer sur le bouton 
                                <img src={vote} className="max-w-full h-auto rounded-lg shadow-md my-2" /> </li> 
                                <li className="mb-2">Renseigner le libellé du vote dans la boîte de dialogue qui s'affiche et cliquer sur <b>OK</b> </li> 
                                <li className="mb-2">Créer et ajouter les propositions de vote</li>
                                 <li className="mb-2">Indiquer l'heure de fin du vote</li>
                                <li className="mb-2">Cliquer sur <b>Démarrer</b> pour lancer le vote. Les propositions de vote vont s'afficher dans 
                                les interfaces de tous les participants qui pourront alors voter</li>
                                <li className="mb-2">A la fin du vote, cliquer sur <b>Arrêter</b>. Les résultats du vote 
                                s'afficheront dans les interfaces de tous les participants.</li>
                             </ol>
                            </p>

                    {/* Post-it */}          
                    <h2 id="postItDoc" className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b-2 border-blue-500">Post-it</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                            <ul className="list-none list-inside space-y-2 mb-4 text-gray-700">
                           <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Pour créer un post-it</h3></li>  
                               <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                                   <li className="mb-2">Cliquer sur le bouton <b>Post-it</b> et choisir <b>Editer</b></li>
                                   <li className="mb-2">Dans la boîte de dialogue qui s'affiche, cliquer sur le bouton <b>Ajouter</b> pour créer un post-it</li>
                                   <li className="mb-2">On peut continuer à créer d'autres post-it ou fermer la boîte de dialogue.</li>
                               </ol>
                            <li className="mb-2"><h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">Pour afficher les post-it</h3></li> 
                               <ul className="list-none list-inside space-y-2 mb-4 text-gray-700">
                                      <li className="mb-2">Cliquer sur le bouton <b>Post-it</b> et choisir <b>Afficher/Cacher</b></li>
                                      <li className="mb-2">Les post-it vont s'afficher et défilier les uns après les autres</li>
                                      <li className="mb-2">Pour fermer la fenêtre des post-it, cliquer sur le bouton <b>-</b> 
                                      de la fenêtre ou sur le bouton <b>Post-it</b> et choisir <b>Afficher/Cacher</b></li>
                               </ul>
                            </ul>
                            </p>
                </div>
                
                {/* Section Auteur */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 text-center rounded-b-2xl">
                    <h2 className="text-2xl font-bold mb-4">👨‍💻 Auteur</h2>
                    <div className="bg-white/10 rounded-lg p-4 max-w-md mx-auto">
                        <p className="font-bold text-lg">Prof. Lamine THIAW</p>
                        <p className="text-gray-300">Département Génie Électrique</p>
                        <p className="text-gray-300">École Supérieure Polytechnique</p>
                        <p className="text-gray-300">Université Cheikh Anta Diop de Dakar</p>
                        <p className="text-blue-300 mt-2">📧 lamine.thiaw@ucad.edu.sn</p>
                    </div>
                </div>
            </div>
            
            {/* Bouton retour en haut */}
            <button 
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg transition-all duration-300 hover:scale-110"
            >
                ↑
            </button>
        </div>
    );
};

export default Guide;