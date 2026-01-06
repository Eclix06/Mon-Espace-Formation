# Mon Espace Formation — Front-end

Ce dépôt contient la partie front-end de l’application Mon Espace Formation. Il couvre l’interface utilisateur, les interactions et la présentation. Une partie back-end existe dans un dépôt séparé.

> Remarque: Lien du dépôt back-end ci-dessous.
https://github.com/Eclix06/Mon-Espace-Formation-Spring

## Pile technique

Ce projet est majoritairement front en JavaScript et CSS, avec une base HTML légère.

- JavaScript ≈ 80.1%
- CSS ≈ 19.8%
- HTML ≈ 0.1%

```text
JavaScript: 332 445 octets
CSS       : 82 201 octets
HTML      : 373 octets
Total     : 415 019 octets
```

## Aperçu

- Interface utilisateur (UI) et interactions côté client
- Styles responsifs en CSS
- Pages/sections HTML servant de structure au montage de l’UI

## Dépôt back-end

- Dépôt back-end: à compléter
- Base URL API: à configurer si nécessaire (par exemple via une variable d’environnement ou un fichier de configuration)

Si votre front consomme une API, pensez à définir l’URL de l’API en un seul endroit (ex: `config.js`, `env`, etc.) afin de faciliter les déploiements multi-environnements (dev/staging/prod).

## Prise en main

### Prérequis
- Un navigateur moderne (Chrome, Firefox, Edge, Safari)
- Optionnel: un serveur HTTP statique (ex: `Live Server` pour VS Code, `serve`, `http-server`, etc.)

### Installation
```bash
# Cloner le dépôt
git clone https://github.com/Eclix06/Mon-Espace-Formation.git
cd Mon-Espace-Formation
```

### Lancement
- Méthode simple: ouvrir le fichier `index.html` dans votre navigateur.
- Méthode recommandée: servir le projet via un serveur HTTP statique pour un comportement proche de la production.
  ```bash
  # Exemple avec npx (Node.js installé)
  npx serve .
  # ou
  npx http-server .
  ```

## Développement

- Logique d’interaction en JavaScript
- Styles en CSS (modules, composants, media queries)
- Structure HTML minimale pour l’assemblage de l’interface

Conseils:
- Utiliser un serveur local pour éviter les restrictions liées au chargement de fichiers.
- Activer les DevTools du navigateur pour le debug (Console, Network, Performance, Inspecteur DOM/CSS).

## Contribuer

Les contributions sont les bienvenues:
1. Forkez le dépôt
2. Créez une branche (`git checkout -b feature/ma-fonctionnalite`)
3. Commitez (`git commit -m "Ajoute ma fonctionnalité"`)
4. Poussez (`git push origin feature/ma-fonctionnalite`)
5. Ouvrez une Pull Request

Merci de maintenir un code clair, commenté et cohérent.

## Licence

S’il n’y a pas de fichier de licence présent dans le dépôt, le projet n’est pas explicitement sous licence open-source. Ajoutez un fichier `LICENSE` si nécessaire.

## Contact

- Propriétaires du dépôt: [Eclix06](https://github.com/Eclix06), [MEYCOZ](https://github.com/MEYCOZ), [NolanMMI123](https://github.com/NolanMMI123), [PurPlePoke](https://github.com/PurPlePoke).
- Issues et PRs: via GitHub sur ce dépôt
- Back-end: https://github.com/Eclix06/Mon-Espace-Formation-Spring
