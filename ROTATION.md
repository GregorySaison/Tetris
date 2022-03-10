Tandis que les déplacements latéraux et vers le bas ne sont finalement qu'un décalage suivant le bon axe et la bonne direction d'une valeur egale à la largeur d'un bloc de la grille de jeu, la rotation des pièces m'apparaît plus complexe à mettre en place.

Les pièces doivent elles forcément pivoter suivant le bloc origine que je leur ai définis ? Si oui, est-ce que ce bloc origine est bien défini pour chaque pièce.

Finalement il va falloir que je modifie la disposition des 3 blocs par rapport a leur bloc d'origine. 

Je prend l'exemple de la pièce en fome de barre de 4 blocs. Lors de sa génération de base par le programme, elle est a l'horizontale. Un appui sur la touche de rotation doit le rendre vertical. Un autre appui doit le rendre a nouveau horizontal.

Dans sont état de génération initial, les coordonnées de création de la pièce sont :
  [{x: -25, y: 0}, {x: 25, y: 0}, {x: 50, y: 0}]

Si j'avais construit la pièce dans une forme de base verticale, les coordonnées de création de la pièce aurait été alors :
  [{x: 0 , y: -25}, {x: 0, y: 25}, {x: 0, y: 50}]

Les valeurs de coordonnées en y a l'état initial semble se transmettre désormais sur les coordonnées en x de la nouvelle pièce. Et inversement. Est-ce que ce phénomène se retranscript peu importe la pièce ?
Je vérifie ca sur les autres pièces :

CETTE METHODE NE FONCTIONNERA PAS ---> DEFORMATION DES PIECES

Si j'essaie de prendre le cas pratique par exemple de la pièce carré
Ici, 0 représente le bloc d'origine de création, 1 représente les blocs crées en fonction de ce bloc origine 
Les coordonnées de création de la pièce carré sont les suivantes : 
[{x: 0, y: 25}, {x: 25, y: 25}, {x: 25, y: 0}]
[0][1]
[1][1]

Si je crée une rotation de la piéce dans ce sens, quelles serait les nouvelles coordonnées de la pièce ? 
[1][0]
[1][1]   

On se retrouve avec trois nouvelles coordonnées de décalage pour créer cette nouvelle pièce :
[{x: -25, y: 0}, {x: -25, y: 25}, {x: 0, y: 25}]

Par la suite on aura :
[1][1]
[1][0] 
[{x: 0, y: -25}, {x: -25, y: -25}, {x: -25, y: 0}]

[1][1]
[0][1] 
[{x: 25, y: 0}, {x: 25, y: -25}, {x: 0, y: -25}]

On revient a la position de départ au moment de la création de la pièce.
[0][1]
[1][1] 
[{x: 0, y: 25}, {x: 25, y: 25}, {x: 25, y: 0}]


Dans cet exemple, j'arrive a ressortir un dénominateur commun a chacune des rotations et des nouvelles coordonnées associées a sa création. 
En effet, a chaque fois la nouvelle valeur de la coordonnées y est égal a l'ancienne valeur x du bloc. La nouvelle coordonnées x est elle toujours égale a l'inverse de l'ancienne coordonnées y du bloc.

Je pourrais alors définir une logique en fonction de ce pattern pour créer la rotation des pièces lorsque la touche du clavier concerné sera appuyé.
Mais-est-ce que ce constat est correct pour l'ensemble des formes de pièces ? Je dois vérifier cela.

[{x: -25, y: 0}, {x: 25, y: 0}, {x: 50, y: 0}]           [{x: 0, y: -25}, {x: 0, y:25}, {x: 0, y: 50}],
[{x: 0, y: 25}, {x: 25, y: 25}, {x: 50, y: 25}]          [{x: -25, y: 0}, {x: -25, y: 25}, {x: -25, y: 50}]
[{x: 0, y: 25}, {x: -25, y: 25}, {x: -50, y: 25}]        [{x: -25, y: 0}, {x: -25, y: -25}, {x: -25, y: -50}]
[{x: 25, y: 0}, {x: 0, y: 25}, {x: -25, y: 25}]          [{x: 0, y: 25}, {x: -25, y: 0}, {x: -25, y: -25}]
[{x: -25, y: 0}, {x: 0, y: 25}, {x: 25, y: 25}]          [{x: 0, y: 25}, {x: -25, y: 0}, {x: -25, y: 25}]


On a ici un concept qui fonctionne.