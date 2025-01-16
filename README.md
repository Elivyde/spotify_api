# Spotify API - Documentation

Ce projet est une API pour gérer les artistes, albums et sons dans une base de données MongoDB. Il utilise **Node.js**, **Express**, et **Mongoose** pour offrir des fonctionnalités CRUD (Créer, Lire, Mettre à jour, Supprimer).

## Fonctionnalités principales

- Gérer les artistes : ajout, modification, suppression, liste.
- Gérer les albums : ajout, modification, suppression, liste.
- Gérer les sons : ajout, modification, suppression, liste.
- Relations entre artistes, albums et sons.

---

## Installation

### Prérequis

- **Node.js** (version 14 ou supérieure)
- **npm** ou **yarn**
- **MongoDB**

### Instructions

1. Clonez le dépôt :
   ```bash
   git clone <URL_DU_DEPOT>
   ```

2. Accédez au répertoire du projet :
   ```bash
   cd spotify_api
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

4. Créez un fichier `.env` à la racine et configurez vos variables d'environnement :
   ```env
   MONGO_URI=mongodb://localhost:27017/spotify_db
   PORT=3000
   ```

5. Lancez le serveur :
   ```bash
   npm start
   ```

6. Accédez à l'API sur [http://localhost:3000](http://localhost:3000).

---

## Structure du projet

- **`app.js`** : Fichier principal de l'application.
- **`controllers/`** : Contient les fichiers de logique pour gérer les artistes, albums et sons.
- **`models/`** : Contient les modèles de la base de données MongoDB.
- **`routes/`** : Contient les routes pour accéder aux différentes fonctionnalités de l'API.

---

## Endpoints de l'API

### Artistes

- **GET** `/artistes` : Liste tous les artistes.
- **GET** `/artistes/:id` : Récupère un artiste par son ID.
- **POST** `/artistes` : Crée un nouvel artiste.
- **PUT** `/artistes/:id` : Met à jour un artiste par son ID.
- **DELETE** `/artistes/:id` : Supprime un artiste par son ID.

### Albums

- **GET** `/albums` : Liste tous les albums.
- **GET** `/albums/:id` : Récupère un album par son ID.
- **POST** `/albums` : Crée un nouvel album.
- **PUT** `/albums/:id` : Met à jour un album par son ID.
- **DELETE** `/albums/:id` : Supprime un album par son ID.

### Sons

- **GET** `/sons` : Liste tous les sons.
- **GET** `/sons/:id` : Récupère un son par son ID.
- **POST** `/sons` : Crée un nouveau son.
- **PUT** `/sons/:id` : Met à jour un son par son ID.
- **DELETE** `/sons/:id` : Supprime un son par son ID.

---

## Modèles de données

### Artiste
```json
{
  "nom": "string",
  "nombreDAbonnes": "number",
  "albums": ["ObjectId"],
  "sons": ["ObjectId"],
  "image": "string",
  "biographie": "string"
}
```

### Album
```json
{
  "nom": "string",
  "dateDeCreation": "date",
  "description": "string",
  "artisteId": "ObjectId",
  "image": "string"
}
```

### Son
```json
{
  "nom": "string",
  "dateDeCreation": "date",
  "duree": "string",
  "featuring": ["string"],
  "genre": "string",
  "artisteId": "ObjectId",
  "albumId": "ObjectId",
  "image": "string",
  "url": "string"
}
```

---

## Développement

### Lancer le serveur en mode développement
Utilisez **nodemon** pour recharger automatiquement le serveur :
```bash
npm install -g nodemon
nodemon app.js
```

### Tests
Des tests peuvent être ajoutés pour valider le fonctionnement des routes.

---

## Contributions
Les contributions sont les bienvenues. Veuillez suivre ces étapes :

1. Forkez ce dépôt.
2. Créez une branche pour vos modifications :
   ```bash
   git checkout -b feature/ma-modification
   ```
3. Soumettez vos modifications :
   ```bash
   git commit -m "Ajout de ma fonctionnalité"
   git push origin feature/ma-modification
   ```
4. Créez une Pull Request.

---

## Licence
Ce projet est sous licence [MIT](LICENSE).

---

## Auteur
Mathurin Elias
Hadjour abdoullah
Gerault Nathan

