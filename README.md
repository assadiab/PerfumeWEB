# Essence by Nature

[Visitez le site Essence](pages/landing_page.html)

Ce projet vise à développer un site web pour **Essence**, une entreprise fictive spécialisée dans la création de parfums uniques et personnalisés.

## Fonctionnalités

- **Page d'Accueil** : Présentation de l'entreprise avec une section héro, des informations sur l'histoire, et des témoignages clients.
- **Services** : Détails des services offerts, y compris la création personnalisée de parfums et des ateliers olfactifs.
- **À Propos** : Informations sur les fondatrices et leur vision.
- **Formulaire de Contact** : Permet aux utilisateurs de contacter l'entreprise.
- **Galerie Dynamique** : Une galerie d'images qui se met à jour toutes les 10 secondes.
- **Bannière de Cookies** : Informe les utilisateurs sur l'utilisation des cookies et permet de personnaliser les préférences.

## Technologies Utilisées

- **HTML5** : Structure du site web.
- **CSS3** : Mise en page et style.
- **JavaScript** : Fonctionnalités dynamiques et interactions.
- **Swiper.js** : Carrousel interactif utilisé dans certaines sections.
- **GSAP (GreenSock Animation Platform)** : Pour les animations fluides (scroll, transitions...).

## Structure des Dossiers

```bash
ProjetWeb/
├── images/           # Toutes les images du site
├── pages/            # Les pages HTML : accueil, services, à propos, etc.
├── scripts/          # JavaScript (ex: script.js)
├── styles/           # Fichiers CSS (globaux et par page)
└── README.md
```

## Installation

1. **Cloner le Dépôt** :
   ```bash
   git clone <lien-du-repo>
   ```
2. **Ouvrir le Projet** :
   Ouvrez `pages/landing_page.html` dans votre navigateur.

## Utilisation

- Utilisez la navigation en haut de page pour explorer le site.
- La galerie dynamique (en bas de la page d'accueil) change automatiquement toutes les 10 secondes.
- Le formulaire de contact est actif côté front-end (pas de backend).
- La bannière de cookies permet de gérer vos préférences.

## Ressources

### Images

Toutes les images utilisées dans ce projet proviennent de **[Unsplash](https://unsplash.com)**, une banque d’images libres de droits.  
Voici quelques auteurs à créditer :

- Annie Spratt
- Bundo Kim
- Emily Wang
- Fulvio Ciccolo
- Karolina Grabowska
- Karly Jones
- Jei Lee
- Swapnil Dwivedi

Les images sont utilisées pour :
- Les sections illustrées de la landing page
- La galerie dynamique en bas de la page d’accueil
- Les cartes de services
- Les profils des fondatrices

### JavaScript Tiers

Ce projet utilise des bibliothèques JavaScript externes non développées par l’équipe :

- **Swiper.js** – Pour le carrousel d’avis clients  
  📌 https://swiperjs.com/

- **GSAP (GreenSock)** – Pour les animations de scroll et transitions  
  📌 https://greensock.com/gsap/

Ces bibliothèques sont utilisées côté front uniquement.

## Validation

- ✅ **HTML/CSS** validés via [W3C Validator](https://validator.w3.org/)
- 📱 **Responsive** : fonctionne sur mobile, tablette et desktop