// L'objet servant d'environnement de configuration du projet
const app = {
    // La méthode qui lance l'ensemble des élements vitals au projet lors de son initialisation
    init: () => {
        app.createBoard(); // On doit créer les élements de design du jeu
    },

    // La méthode qui créer l'ensemble des élements de design du projet
    createBoard: () => {
        // ---------- CREATION DU CANVA ---------- //
        const board = document.getElementById('board'); // Récupération de l'élement HTML canvas
        board.width = 500; // Definition de la largeur de l'élement canva
        board.height = 500; // Definition de la hauteur de l'élement canva
        const ctx = board.getContext('2d'); // Définition du canva sur un modèle de dessin 2D

        // ---------- CREATION DE LA GRILLE DE JEU ---------- //
    },
}

// Je lance la méthode init de l'objet app lorsque le chargement complet est effectué
window.addEventListener('load', app.init);