# ApiExoplanet

## <br>  Contexte du projet : </br>

Création d'une API sous Nodejs / express / MongoDB

Ce repositorie à été fais dans le but d'apprendre une nouvelle technologie et la création d'une api.

L'API est un lien avec les exoplanetes et utiliser les données de la NASA.

## <br> Livrables : </br> 
--------

    ├── README.md                               <--- Descriptif du projet.
    │
    │
    ├── .gitignore                              <--- Permet d'ignorer l'importation de certains fichier pour le versioning.
    │
    │
    ├── backend                                 <--- Dossier backend comprenant controller/db/models/routes pour l'api.
    │   │
    │   ├── controllers                         <--- Dossier contenant le contrôleur pour la gestion des exoplanètes.
    │   │   └── exoplanet.controller.js
    │   │
    │   ├── db                                  <--- Dossier contenant le fichier de configuration de la base de données MongoDB.
    │   │   └── database.js
    │   │
    │   ├── models                              <--- Dossier contenant le modèle de données pour les exoplanètes.
    │   │   └── exoplanet.model.js
    │   │
    │   └── routes                              <--- Dossier contenant les routes de l'API pour les exoplanètes.
    │       └── exoplanet.routes.js
    │
    ├── documents                               <--- Dossier documents contenant le fichier postman.json pour import
    │   └── Exoplanets.postman_collection.json
    │
    │   
    ├── server.js                               <--- Fichier principal du serveur, point d'entrée de l'api
    │
    │
    ├── .eslintrc.js                            <--- Fichier de configuration pour ESLint, un outil d'analyse statique du code JavaScript.
    │
    │
    ├── package-lock.json                       <--- Fichier pour les versions exactes des dépendances installées.
    │
    │
    └── package.json                            <--- Fichier de configuration de l'application contenant les métadonnées et les dépendances.     

--------

## <br> Requirements : </br>

```
- Testés sous Windows 11
- Nodejs 18.12.0
- MongoDB 1.38.2
- Visual Studio Code 1.79.2
- Postman 10.15.7
```


## <br> Installation </br>

Installation de MongoDB Atlas :

Suivre les étapes indiquées :

- [MongoDB Atlas](https://www.mongodb.com/try)

Installation Visual Studio Code :

- [download](https://code.visualstudio.com/download)

- [installation](https://code.visualstudio.com/docs/introvideos/basics)

Installation de Postman :

- [download](https://www.postman.com/downloads/)

- [installation](https://learning.postman.com/docs/getting-started/installation-and-updates/#installing-postman-on-windows)


Le clone du projet et sa bonne installation sur votre pc sous git Bash:

- Le clonage :
 
  - github :
    
    - Créer un répertoire pour le repositorie

    - Cloner :

    ```
    cd 
    mkdir *nom repertoire*
    cd *nom repertoire/*
    git clone https://github.com/Xiiuki/ApiExoplanet.git                                                               
    ```

 - Lancer VSCode 
 
 - Ouvrir le dossier cloner dans celui-ci

 - Ouvrir le terminal dans VScode 

   ```
   ctrl + %
   ```
    
## <br> Exécution </br>

Suivre l'ordre donné :

- Installation des dépendance : 
  
  - Dans le terminal :

  ```
  npm install
  ```

- Lancer le serveur :
  
  - Dans le terminal :

  ```
  npm run server
  ```

- Ouvrir Postman
  
- Puis importer le fichier [import](documents/Exoplanets.postman_collection.json) dans celui-ci

## <br> Renseignements : </br>

Pour toutes demandes de renseignements, veuillez contacter l'autheur de ce projet via adresse mail uniquement.