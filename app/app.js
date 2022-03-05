var square = new Image(); // Creation d'un nouvel objet image dans une variable square
square.src = "img/square.png"; // Définition de la photo associé dans ce nouvel objet image

// Objet d'environnement de configuration du projet
const app = {
    // Méthode de lancement de l'ensemble des élements vitals au projet lors de son initialisation
    init: () => {
        app.createBoard(); // On doit créer les élements de design du jeu
    },

    // Methode de création de l'ensemble des élements design du projet
    createBoard: () => {
        // ---------- CREATION DU CANVA ---------- //
        const board = document.getElementById('board'); // Récupération de l'élement HTML canvas
        board.width = 500; // Definition de la largeur de l'élement canva
        board.height = 500; // Definition de la hauteur de l'élement canva
        const ctx = board.getContext('2d'); // Définition du canva sur un modèle de dessin 2D

        // ---------- CREATION DE LA GRILLE DE JEU ---------- //
        let grid = new Array(22); // Création d'un array avec 22 élements vides dans la variable grid
        for (let i=0; i<grid.length; i++) { // Boucle sur les 22 elements vides de l'array
            grid[i] = new Array(10); // Création dans chaque element d'un nouveau array contenant 10 élements vides
        }

        for(let i=0; i<10; i++) { // Création d'une boucle sur les colonnes de grid
            for(let j=0; j<22; j++) { // Et sur les cellules qui les compose
                ctx.fillRect(i * 25, j * 25, 25, 25 ); // Création d'un carré 25x25 a des coordonnées progressivement décalées
                ctx.drawImage(square, i * 25, j * 25); // Insertion d'une image de fond pour chaque carré
            }
        }
    },
}

// Lancement de la méthode init de l'objet app lorsque le chargement complet est effectué
window.addEventListener('load', app.init);