# 📱 Configuration des Réseaux Sociaux

## 🔗 Comment modifier vos liens de réseaux sociaux

### 📍 Fichier à modifier : `src/components/Footer.jsx`

Dans le fichier Footer.jsx, vous trouverez ces lignes avec des placeholders :

```javascript
// PLACEHOLDERS POUR LES LIENS RÉSEAUX SOCIAUX - À REMPLACER PAR VOS VRAIS LIENS
const instagramLink = "https://instagram.com/votre_compte_instagram"; // Remplacez par votre lien Instagram
const linkedinLink = "https://linkedin.com/company/votre_entreprise"; // Remplacez par votre lien LinkedIn
```

### ✏️ Étapes pour personnaliser :

1. **Instagram** : Remplacez `votre_compte_instagram` par votre nom d'utilisateur Instagram
   ```javascript
   const instagramLink = "https://instagram.com/xpertmanager_officiel";
   ```

2. **LinkedIn** : Remplacez `votre_entreprise` par le nom de votre page entreprise LinkedIn
   ```javascript
   const linkedinLink = "https://linkedin.com/company/xpertmanager";
   ```

3. **WhatsApp** : Le numéro WhatsApp est déjà configuré dans `src/constants/info.js`

### 🎨 Images des logos

Les images des logos sont déjà configurées et se trouvent dans :
- `src/assets/images/whatsapp.png`
- `src/assets/images/instagram.png`
- `src/assets/images/linkedin.png`

### 💡 Exemple complet de configuration :

```javascript
export function Footer() {
    // Remplacez ces liens par vos vrais liens
    const instagramLink = "https://instagram.com/xpertmanager_agency";
    const linkedinLink = "https://linkedin.com/company/xpertmanager-digital";
    const whatsApp = WA_BUSINESS_NUMBER + "?text=Bonjour,%20je%20souhaite%20discuter%20d%27un%20projet%20avec%20xPertManager";
    
    // ... reste du code
}
```

### 🚀 Après modification :

1. Sauvegardez le fichier
2. Le site se rechargera automatiquement
3. Vos nouveaux liens seront actifs !

---
*Note : N'oubliez pas de tester vos liens pour vous assurer qu'ils fonctionnent correctement.*
