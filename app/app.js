const board = document.getElementById('board'); // Récupération de l'élement HTML canvas
board.width = 550; // Definition de la largeur de l'élement canva
board.height = 550; // Definition de la hauteur de l'élement canva
const ctx = board.getContext('2d'); // Définition du canva sur un modèle de dessin 2D

var square = new Image(); // Creation d'un nouvel objet image dans une variable square
square.src = "img/square.png"; // Définition de la photo associé dans ce nouvel objet image

// Ensemble de couleurs dans lesquels la classe ira piocher pour définir une couleur aux pièces
const colors = ['#EE2733', '#F89622', '#FDE100', '#4EB748', '#2BACE2', '#005A9D', '#922B8C'];

// Ensemble de données permettant les décalages en px nécessaire suivant l'axe x et y du canva pour dessiner les trois autres blocs au bon endroit en fonction du bloc d'origine commun a chaque type de pièce. 
const coordinates = [
    [{x: 25, y: 0}, {x: 0, y: 25}, {x: 25, y: 25}],
    [{x: -25, y: 0}, {x: 25, y: 0}, {x: 50, y: 0}],
    [{x: 25, y: 0}, {x: 50, y: 0}, {x: 25, y: 25}],
    [{x: 0, y: 25}, {x: 25, y: 25}, {x: 50, y: 25}],
    [{x: 0, y: 25}, {x: -25, y: 25}, {x: -50, y: 25}],
    [{x: 25, y: 0}, {x: 0, y: 25}, {x: -25, y: 25}],
    [{x: -25, y: 0}, {x: 0, y: 25}, {x: 25, y: 25}]
];

let pressedKey = null;

const controlList = {
    moveDown: 'ArrowDown',
    moveLeft: 'ArrowLeft',
    moveRight: 'ArrowRight'
};

// Classe permettant la création d'instance comportant les propriétés des pièces de jeu
class Tetromino { 
    origin; // Je veux définir un point d'entrée de construction de la pièce entièrement visible et au centre horizontale de la grille tout en haut de celle-ci
    color;
    shape;

    constructor(color, origin, shape) { 
        this.color = color;
        this.origin = origin;
        this.shape = shape;
    };
};

// Objet d'environnement de configuration du projet
const app = {
    // Méthode de lancement de l'ensemble des élements vitals au projet lors de son initialisation
    init: () => {
        let currentTetromino = new Tetromino(colors[Math.floor(Math.random() * colors.length)], {x: 75, y: 0}, coordinates[Math.floor(Math.random() * coordinates.length)]) 

        app.createGrid();
        app.createBoard(); // On doit créer les élements de design du jeu
        app.createTetromino(currentTetromino); // On doit créer les pièces de départ dès le lancement du jeu
        app.controlTetromino(currentTetromino);
    },

    // Methode de création de l'ensemble des élements design du projet
    createBoard: () => {
        // ---------- CREATION DE LA GRILLE DE JEU ---------- //

        // ---------- CREATION DES CONTOURS ET DU TABLEAU DE BORD DU JEU---------- //
        ctx.fillStyle = '#5D7984'; // Définition de la couleur de remplissage
        ctx.fillRect(250, 0, 300, 275); // Création d'un rectangle positionné dans le coin supérieur droit
        ctx.fillRect(250, 275, 300, 275); // Création d'un rectangle positionné dans le coin inférieur droit
        ctx.fillStyle = '#476C7B'; // Définition de la couleur de remplissage
        ctx.fillRect(325, 68.75, 150, 137.5);

        ctx.lineWidth = 2; // Définition de la largeur de contour
        ctx.strokeRect(0, 0, 250, 550); // Création du contour autour de la grille de jeu
        ctx.strokeRect(250, 0, 300, 275); // Création du contour autour du rectangle supérieur droit
        ctx.strokeRect(250, 275, 300, 275); // Création du contour autour du rectangle inférieur droit
        ctx.lineWidth = 4; // Définition de la largeur de contour
        ctx.strokeRect(325, 68.75, 150, 137.5);

        ctx.fillStyle = '#FFFFFF'; // Définition de la couleur de remplissage
        ctx.font = '16px sans-serif';
        ctx.fillText('TETROMINO SUIVANT', 315, 30);
        ctx.fillText('Niveau :', 275, 300);
        ctx.fillText('Lignes complétées :', 275, 320);
        ctx.fillText('Score :', 275, 340);

    },

    // Methode de création des pièces de jeu
    createTetromino: (arg) => {
        ctx.fillStyle = arg.color;
        for(let i=0; i<4; i++) {
            if(i != 0) {
                whereToDraw = {x: arg.origin.x + arg.shape[i-1].x , y: arg.origin.y + arg.shape[i-1].y}
                ctx.fillRect(whereToDraw.x, whereToDraw.y, 25, 25 );
            } else { // Quand i est a 0, il dessine sur le canva le bloc d'origine ayant déjà les coordonnées défini dans chaque instance au sein de la propriété origin
                whereToDraw = arg.origin;
                ctx.fillRect(whereToDraw.x, whereToDraw.y, 25, 25);
            }
        }
    },

    controlTetromino: (arg) => {
        document.addEventListener("keydown", (e) => {
            pressedKey = e.code;

            if(pressedKey === 'ArrowDown') {
                arg.origin.y += 25;
            } else if(pressedKey === 'ArrowRight') {
                arg.origin.x += 25;
            } else if(pressedKey === 'ArrowLeft') {
                arg.origin.x -= 25;
            }

            app.resetGrid();
            app.createGrid();
            app.createTetromino(arg);
        });

        document.addEventListener("keyup", (e) => {
            pressedKey = null;

        })
    },

    createGrid: () => {
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
    
    resetGrid: () => {
        ctx.clearRect(0, 0, 250, 550);
    }
}

// Lancement de la méthode init de l'objet app lorsque le chargement complet est effectué
window.addEventListener('load', app.init);