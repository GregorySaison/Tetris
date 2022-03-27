// Classe permettant la création d'instance comportant les propriétés des pièces de jeu
export default class Tetromino {
    origin; // Je veux définir un point d'entrée de construction de la pièce entièrement visible et au centre horizontale de la grille tout en haut de celle-ci
    color;
    shape;

    /**
     * JS docs c'est la vie ! Mets des types entre les accolades! C'est des nombres, des strings, des melons?
     * @param {*} color 
     * @param {*} origin 
     * @param {*} shape 
     */
    constructor(color, origin, shape) {
        this.color = color;
        this.origin = origin;
        this.shape = shape;
    };

    /**
     * Sans ce genre de méthodes tu t'en sortiras pas.
     * Dans `app.js` tu l'appelles en faisant
     * tetromino.draw(ctx)
     * 
     * draw the tetromino on the board
     * @param {CanvasRenderingContext2D} ctx
    */
    draw(ctx) {
        ctx.save();

        // ici tu dessines tout ce que tu veux
        // ctx.fillStyle = this.color;
        // tu boucles sur toutes les cases du tetromino et tu les dessines une par une

        ctx.restore();
    }
};