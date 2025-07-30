# 🚀 XpertManager - Site Vitrine Professionnel

![React](https://img.shields.io/badge/React-v19-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-ultra--rapide-yellow?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-blue?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-animations%20fluides-red?style=flat-square&logo=framer)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

Site vitrine moderne et professionnel pour **XpertManager**, votre agence de confiance spécialisée dans la gestion et le développement d'entreprise.

---

## 🎯 À propos du projet

XpertManager est une agence qui accompagne les entreprises dans leur croissance et leur transformation digitale. Ce site vitrine a été conçu pour :

- **Présenter nos services** de conseil et gestion d'entreprise
- **Mettre en valeur notre expertise** et nos réalisations
- **Faciliter la prise de contact** avec nos prospects
- **Inspirer confiance** grâce à un design professionnel
- **Afficher les témoignages** de nos clients satisfaits

---

## 🏗️ Architecture du projet

```
XpertManager/
├── public/                    # Ressources statiques
│   └── favicon.png           # Icône du site
├── src/
│   ├── assets/               # Images et styles
│   │   ├── images/          # Logos, bannières, icônes
│   │   └── styles/          # Fichiers CSS
│   ├── components/          # Composants React réutilisables
│   │   ├── Header.jsx       # Navigation principale
│   │   ├── Footer.jsx       # Pied de page
│   │   ├── ContactForm.jsx  # Formulaire de contact
│   │   ├── TestimonialsCarousel.jsx # Carrousel de témoignages
│   │   ├── Btn.jsx          # Boutons d'action
│   │   ├── Loader.jsx       # Indicateurs de chargement
│   │   ├── PageLoader.jsx   # Chargement de page
│   │   └── ScrollToTopButton.jsx # Retour en haut
│   ├── constants/           # Constantes et configuration
│   │   ├── info.js          # Informations de l'entreprise
│   │   └── animationVariants.js # Variants d'animation
│   ├── App.jsx              # Composant racine
│   └── main.jsx             # Point d'entrée de l'application
├── index.html               # Template HTML principal
├── package.json             # Dépendances et scripts npm
├── vite.config.js           # Configuration Vite
└── eslint.config.js         # Configuration ESLint
```

---

## 🚀 Installation et démarrage

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/mansour-dp/XpertManager.git
   cd XpertManager
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```
   Le site sera accessible sur `http://localhost:5173`

4. **Construire pour la production**
   ```bash
   npm run build
   ```

5. **Prévisualiser la version de production**
   ```bash
   npm run preview
   ```

---

## 🛠️ Stack technique

- **⚛️ React 19** - Framework JavaScript pour l'interface utilisateur
- **⚡ Vite** - Bundler et serveur de développement ultra-rapide
- **🎨 Tailwind CSS v4** - Framework CSS utilitaire pour le design
- **🎭 Framer Motion** - Bibliothèque d'animations fluides
- **📱 Responsive Design** - Compatible mobile, tablette et desktop
- **🔍 SEO Optimisé** - Métadonnées et structure optimisées

---

## ✨ Fonctionnalités principales

### 🎨 Design et UX
- ✅ Interface moderne et professionnelle
- ✅ Design entièrement responsive
- ✅ Animations et transitions fluides
- ✅ Chargement optimisé des images (lazy loading)
- ✅ Navigation intuitive avec menu hamburger mobile

### 📞 Communication
- ✅ Formulaire de contact intégré
- ✅ Bouton WhatsApp avec message prérempli
- ✅ Liens vers les réseaux sociaux (LinkedIn, Instagram)
- ✅ Informations de contact facilement accessibles

### 🏆 Contenu
- ✅ Présentation des services
- ✅ Carrousel de témoignages clients
- ✅ Section "À propos" détaillée
- ✅ Galerie de réalisations
- ✅ Call-to-action stratégiquement placés

### ⚡ Performance
- ✅ Optimisation des performances (code splitting)
- ✅ Bouton "Retour en haut" fluide
- ✅ Temps de chargement optimisés
- ✅ Compatibilité cross-browser

---

## 📱 Déploiement

Le site est optimisé pour un déploiement sur **Vercel**, **Netlify** ou tout autre service d'hébergement statique.

### Déploiement sur Vercel
```bash
# Installation de Vercel CLI
npm install -g vercel

# Déploiement
vercel --prod
```

### Variables d'environnement
Créez un fichier `.env.local` pour les variables d'environnement :
```env
VITE_CONTACT_EMAIL=contact@xpertmanager.com
VITE_WHATSAPP_NUMBER=+221784590536
```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche pour votre feature (`git checkout -b feature/NouvelleFeature`)
3. Commit vos changements (`git commit -m 'Ajout d'une nouvelle feature'`)
4. Push vers la branche (`git push origin feature/NouvelleFeature`)
5. Ouvrez une Pull Request

---

## 📋 Scripts disponibles

```bash
npm run dev          # Démarrer le serveur de développement
npm run build        # Construire pour la production
npm run preview      # Prévisualiser la version de production
npm run lint         # Lancer ESLint pour vérifier le code
```

---

## 📝 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.

---

## 📞 Contact

### XpertManager - Votre partenaire de confiance

- 📧 **Email** : contact@xpertmanager.com
- 📱 **Téléphone** : +221 78 459 05 36
- 🌐 **Site web** : [www.xpertmanager.com](https://www.xpertmanager.com)
- 💼 **LinkedIn** : [XpertManager](https://linkedin.com/company/xpertmanager)
- 📸 **Instagram** : [@xpertmanager](https://instagram.com/xpertmanager)

---

## 🙏 Remerciements

Merci de faire confiance à **XpertManager** pour accompagner votre entreprise vers le succès ! 🚀

---

*Développé avec ❤️ par l'équipe XpertManager*
