# 🔗 Guide de Personnalisation des Réseaux Sociaux - XpertManager

## 📍 Où modifier vos liens de réseaux sociaux

### 1. **Fichier principal des constantes**
📁 `src/constants/info.js`

Modifiez ces valeurs avec vos vrais liens :

```javascript
// Remplacez par vos vrais liens
export const INSTAGRAM_PAGE = "https://instagram.com/votre_compte_instagram";
export const WA_BUSINESS_NUMBER = "https://wa.me/221775937679"; // Votre numéro WhatsApp
```

### 2. **Lien LinkedIn dans le Footer**
📁 `src/components/Footer.jsx` - Ligne ~172

Trouvez cette ligne et remplacez le lien :
```javascript
href="https://linkedin.com/company/xpertmanager" // ← Remplacez par votre lien LinkedIn
```

Par exemple :
```javascript
href="https://linkedin.com/in/votre-profil" // Votre profil LinkedIn personnel
// ou
href="https://linkedin.com/company/votre-entreprise" // Page entreprise LinkedIn
```

## 🎨 Réseaux sociaux actuels dans le footer

✅ **WhatsApp** - Vert (lien automatique depuis `info.js`)
✅ **Instagram** - Dégradé violet-rose (lien depuis `info.js`)  
✅ **LinkedIn** - Bleu (lien à modifier directement dans Footer.jsx)

## 📝 Instructions de modification

1. **Pour WhatsApp et Instagram** : Modifiez le fichier `src/constants/info.js`
2. **Pour LinkedIn** : Modifiez directement dans `src/components/Footer.jsx`
3. **Testez vos liens** : Assurez-vous qu'ils s'ouvrent correctement
4. **Format WhatsApp** : Utilisez le format `https://wa.me/NUMERO` (sans espaces ni tirets)

## ✨ Couleurs des icônes

- **WhatsApp** : `bg-green-600` (vert WhatsApp officiel)
- **Instagram** : `from-purple-600 to-pink-600` (dégradé Instagram)
- **LinkedIn** : `bg-blue-700` (bleu LinkedIn officiel)

Tous les liens s'ouvrent dans un nouvel onglet avec `target="_blank"` et `rel="noopener noreferrer"` pour la sécurité.
