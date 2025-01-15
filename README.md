
# Spotify API

Une API pour gérer artistes, albums, et morceaux, construite avec **Node.js**, **Express**, et **MongoDB**.

## Fonctionnalités
- Créer, lire, mettre à jour et supprimer des artistes.
- Associer des albums aux artistes, avec des fonctionnalités CRUD pour les albums.
- Associer des morceaux aux albums et artistes, avec des fonctionnalités CRUD pour les morceaux.

---

## Prérequis
- **Node.js** : Version 14 ou supérieure.
- **MongoDB** : Une instance locale ou distante (MongoDB Compass recommandé pour la gestion).
- **Postman** : Pour tester les endpoints de l’API.

---

## Installation

1. Clonez ce projet :
   ```bash
   git clone https://github.com/username/spotify_api.git
   cd spotify_api
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Configurez les variables d’environnement :
   - Créez un fichier `.env` à la racine du projet avec le contenu suivant :
     ```
     MONGO_URI=mongodb://localhost:27017/spotify
     PORT=3000
     ```

4. Démarrez le serveur :
   - En mode production :
     ```bash
     npm start
     ```
   - En mode développement :
     ```bash
     npm run dev
     ```

---

## Structure du projet
```
spotify_api/
├── controllers/
│   ├── albumController.js
│   ├── artisteController.js
│   ├── sonController.js
├── models/
│   ├── Album.js
│   ├── Artiste.js
│   ├── Son.js
├── routes/
│   ├── albums.js
│   ├── artistes.js
│   ├── sons.js
├── app.js
├── .env
├── package.json
```

---

## Endpoints

### Artistes
1. **Créer un artiste** : `POST /api/artistes`
2. **Récupérer tous les artistes** : `GET /api/artistes`
3. **Récupérer un artiste par ID** : `GET /api/artistes/:id`
4. **Mettre à jour un artiste** : `PUT /api/artistes/:id`
5. **Supprimer un artiste** : `DELETE /api/artistes/:id`

### Albums
1. **Créer un album** : `POST /api/albums`
2. **Récupérer les albums d’un artiste** : `GET /api/albums/:artisteId`
3. **Récupérer un album par ID** : `GET /api/albums/:id`
4. **Mettre à jour un album** : `PUT /api/albums/:id`
5. **Supprimer un album** : `DELETE /api/albums/:id`

### Sons
1. **Créer un morceau** : `POST /api/sons`
2. **Récupérer les morceaux d’un artiste** : `GET /api/sons/artiste/:artisteId`
3. **Récupérer les morceaux d’un album** : `GET /api/sons/album/:albumId`
4. **Récupérer un morceau par ID** : `GET /api/sons/:id`
5. **Mettre à jour un morceau** : `PUT /api/sons/:id`
6. **Supprimer un morceau** : `DELETE /api/sons/:id`

---

## Exemples de requêtes avec Postman

### 1. Créer un artiste
- **URL** : `http://localhost:3000/api/artistes`
- **Méthode** : `POST`
- **Body (JSON)** :
  ```json
  {
    "nom": "John Doe",
    "nombreDAbonnes": 100000,
    "genres": ["Pop", "Rock"],
    "image": "https://example.com/image.jpg",
    "biographie": "Chanteur et compositeur."
  }
  ```

### 2. Récupérer tous les artistes
- **URL** : `http://localhost:3000/api/artistes`
- **Méthode** : `GET`

### 3. Créer un album
- **URL** : `http://localhost:3000/api/albums`
- **Méthode** : `POST`
- **Body (JSON)** :
  ```json
  {
    "nom": "Greatest Hits",
    "dateDeCreation": "2025-01-01",
    "description": "Le meilleur de John Doe.",
    "artisteId": "<id_de_l_artiste>",
    "image": "https://example.com/album.jpg"
  }
  ```

### 4. Créer un morceau
- **URL** : `http://localhost:3000/api/sons`
- **Méthode** : `POST`
- **Body (JSON)** :
  ```json
  {
    "nom": "Best Song",
    "dateDeCreation": "2025-01-01",
    "duree": "3:45",
    "featuring": ["Jane Doe"],
    "genre": "Pop",
    "albumId": "<id_de_l_album>",
    "artisteId": "<id_de_l_artiste>",
    "image": "https://example.com/song.jpg"
  }
  ```

---

## Test des données

### Avec Postman :
1. Lancez les requêtes définies ci-dessus.
2. Vérifiez les réponses JSON.

### Avec MongoDB Compass :
1. Connectez-vous à **mongodb://localhost:27017**.
2. Accédez à la base de données **spotify**.
3. Vérifiez les collections :
   - **artistes**
   - **albums**
   - **sons**

---

## Licence

[ISC](https://opensource.org/licenses/ISC)
