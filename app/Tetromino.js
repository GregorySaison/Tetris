// Classe permettant la création d'instance comportant les propriétés des pièces de jeu
export default class Tetromino {
    origin; // Je veux définir un point d'entrée de construction de la pièce entièrement visible et au centre horizontale de la grille tout en haut de celle-ci
    color;
    shape;

    constructor(color, origin, shape) {
        this.color = color;
        this.origin = origin;
        this.shape = shape;
    };
};