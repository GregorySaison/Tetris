Le jeu Tetris est composé de 7 pièces différentes.
Est-il possible de les créer tous au sein d'une même classe de manière aléatoire en tant que nouvelle instance ?

Chaque pièce est composé de 4 blocs ayant chacun une disposition qui lui est propre.
Et chacun de ces blocs doit être détachable des autres lorsqu'ils font partie d'une ligne complétée durant la partie.
Il m'est donc impossible de créer ces pièces comme une seul et unique entité.
C'est en fait une entité unique, certes, mais composé de 4 élements disctincts.

La pièce la plus longue est celle construit sur une seule ligne de 4 blocs.
Les autres pièces sont longue de 2 à 3 blocs mais prennent une largeur équivalent a 2 blocs.
On peut donc voir leur conteneur comme une grille de 2 x 4 ou chaque bloc de la grille est équivalent a un bloc d'une pièce

Dans cette illustration, les rond represente les blocs de pièces au sein de la grille tandis que les tirets represente des case de la grille non utilisé

![Liste des pièces](docs\schema_tetromino.png "Liste des pièces")

Est-il possible d'utiliser un système de coordonnées pour construire les pièces ? 

Ne pourrait-on pas faire comprendre au programme où se placer dans cette grille de 2 x 4 et lui signifier alors de créer un bloc avec canva a cet endroit. En répétant l'opération a quatre reprise, on aurait alors notre pièce construite.

Logiquement cela nécessiterait, comme pour la variable colors, de créer un conteneur qui aurait l'ensemble des coordonnées spécifique a chaque pièce.
Lorsque la classe choisirait au hasard parmi ces coordonnées pour créer l'instance, on aurait alors déjà la forme de la pièce prédéfini

Il ne s'agirait donc plus que de passer cette propriété de l'instance dans une fonction qui se chargerait alors de créer réellement la pièce en en rapport avec cette instance.

