// Section des fonctionnalités animées pour App.jsx

{/* Introduction animée */}
<motion.div
  className="text-center space-y-8"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={staggerContainer}
>
  <motion.p
    className="text-xl text-gray-700 leading-relaxed font-medium bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-sm"
    variants={cardVariant}
  >
    Une plateforme intégrée de gestion, qui regroupe dans un environnement unique des fonctionnalités clés, indispensables pour toute organisation moderne, qu'elle soit publique, privée ou associative.
  </motion.p>

  {/* Section Gestion de Projets */}
  <motion.div
    className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
    variants={cardVariant}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <motion.h3
      className="text-2xl font-bold text-gray-800 mb-4"
      variants={cardVariant}
    >
      🎯 Gestion de Projets Collaborative
    </motion.h3>
    <motion.p
      className="text-lg text-gray-700 mb-4"
      variants={cardVariant}
    >
      xPertManager permet une gestion de projets fluide et collaborative, à travers une interface intuitive
    </motion.p>
    <motion.div
      className="grid grid-cols-2 gap-4"
      variants={staggerContainer}
    >
      <motion.div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg" variants={cardVariant}>
        <span className="text-blue-600 text-xl">🤝</span>
        <span className="text-gray-700">Co-construire</span>
      </motion.div>
      <motion.div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg" variants={cardVariant}>
        <span className="text-green-600 text-xl">📋</span>
        <span className="text-gray-700">Planifier</span>
      </motion.div>
      <motion.div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg" variants={cardVariant}>
        <span className="text-purple-600 text-xl">📊</span>
        <span className="text-gray-700">Suivre l'avancement</span>
      </motion.div>
      <motion.div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg" variants={cardVariant}>
        <span className="text-orange-600 text-xl">⏰</span>
        <span className="text-gray-700">Gérer les priorités</span>
      </motion.div>
    </motion.div>
  </motion.div>

  {/* Section Fonctionnalités Intégrées */}
  <motion.div
    className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-gray-100"
    variants={cardVariant}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <motion.h3
      className="text-2xl font-bold text-gray-800 mb-6 text-center"
      variants={cardVariant}
    >
      ⚡ Fonctionnalités Avancées Intégrées
    </motion.h3>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      variants={staggerContainer}
    >
      <motion.div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow" variants={cardVariant}>
        <div className="text-blue-600 text-2xl mb-2">📅</div>
        <div className="text-sm text-gray-700">Planification avancée des tâches</div>
      </motion.div>
      <motion.div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow" variants={cardVariant}>
        <div className="text-green-600 text-2xl mb-2">🎯</div>
        <div className="text-sm text-gray-700">Matrice d'Eisenhower</div>
      </motion.div>
      <motion.div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow" variants={cardVariant}>
        <div className="text-purple-600 text-2xl mb-2">👥</div>
        <div className="text-sm text-gray-700">Gestion RH & matérielles</div>
      </motion.div>
      <motion.div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow" variants={cardVariant}>
        <div className="text-indigo-600 text-2xl mb-2">💬</div>
        <div className="text-sm text-gray-700">Messagerie instantanée</div>
      </motion.div>
      <motion.div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow" variants={cardVariant}>
        <div className="text-teal-600 text-2xl mb-2">📱</div>
        <div className="text-sm text-gray-700">Messages texte</div>
      </motion.div>
      <motion.div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow" variants={cardVariant}>
        <div className="text-red-600 text-2xl mb-2">🎧</div>
        <div className="text-sm text-gray-700">Appels audio</div>
      </motion.div>
      <motion.div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow" variants={cardVariant}>
        <div className="text-yellow-600 text-2xl mb-2">📹</div>
        <div className="text-sm text-gray-700">Visioconférences</div>
      </motion.div>
      <motion.div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow" variants={cardVariant}>
        <div className="text-pink-600 text-2xl mb-2">🎪</div>
        <div className="text-sm text-gray-700">Gestion d'événements</div>
      </motion.div>
      <motion.div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow" variants={cardVariant}>
        <div className="text-orange-600 text-2xl mb-2">🗳️</div>
        <div className="text-sm text-gray-700">Vote électronique</div>
      </motion.div>
    </motion.div>
  </motion.div>

  {/* Call to Action */}
  <motion.div
    className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white"
    variants={cardVariant}
    whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
    transition={{ duration: 0.3 }}
  >
    <motion.h3
      className="text-2xl font-bold mb-4"
      variants={cardVariant}
    >
      ✨ Découvrez xPertManager
    </motion.h3>
    <motion.p
      className="text-xl"
      variants={cardVariant}
    >
      Cliquez sur les rubriques ci-dessous pour explorer en détail toutes les fonctionnalités
    </motion.p>
  </motion.div>
</motion.div>
