# **Tetris** | by Le Dev Novice

### **Introduction**
Dans ma quête pour aller toujours plus loin dans la compréhension des rudiments fondamentaux de Javascript, je cherchais un projet nécessitant une réelle réflexion logique afin d'avoir entre les mains un cas pratique enrichissant.

Finalement, avec du recul, quoi de mieux que l'élaboration d'un jeu. Conception, Design, Logique... tout y est ! 

Et comme du haut de mes 30 ans je commence a être un vieux briscard plein de nostalgies, mon choix aurait pu se diriger vers Pong, Space Invaders ou encore Elden Ring(...).

Mais ce fut finalement Tetris !

<br>
<br>

### **Pré-étude**
***Concept de base :***  
- Des pièces de différentes formes aparaissent et défilent du haut jusqu'en bas de l'écran. 

- Le joueur doit empiler ces pièces afin de réaliser des lignes horizontales complètes remplissant la totalité de la largeur de la grille.

- Les lignes complétées rapporte des points et les élements des pièces appartenant a ces lignes disparaissent de la grille.

- Plusieurs lignes complétées en même temps rapportent plus de points

- Plus la partie dure dans le temps, plus la vitesse de défilement des pièces augmentent.

- Le joueur perd la partie si son empilement de pièces dépasse le haut de la grille.

***Gameplay :***  
- Possibilité de déplacer latéralement la pièce en phase de défilement.

- Possibilité de créer une rotation de 90° sur elle-même de la pièce en phase de défilement.

- (Possibilité d'accélerer la descente de la pièce en phase de défilement).

***Inventaire :***  
*Chacunes des 7 pièces dispose de sa propre forme mais aussi de sa propre couleur.*
![Liste des pièces](docs\inventaire.png "Liste des pièces")

***Tableau de jeu :*** 
- Cases de la grille du même format que les cases utilisées pour la création des pièces.

- Grille de jeu composé de 10 cases de largeur et de 22 cases de hauteur.   

- Compteur du nombre de lignes completées.

- Affichage du score en temps réel.

- Affichage du niveau actuel de la partie.

- (Affichage de la forme de la pièce suivante)

***Barème de score :***   
Le nombre de points est dépendant du nombre de lignes "A" complétéés simultanément ainsi que du niveau actuel "N" de la partie.

- 1 lignes: A = 40 points * niveau partie N
- 2 lignes: A = 100 points * N
- 3 lignes: A = 300 points * N
- 4 lignes: A = 1200 points * N

***Vitesse de défilement :*** 
Débutant à une descente d'un cran toutes les 0,800s l'écart se réduit toutes les 0,040s a chaque nouveau niveau. 

***Problématique connue :***   
*La rotation d'une pièce par le joueur ne doit pas arrêter le mouvement de défilement de la pièce vers le bas. On appelle cela le Easy Spin.*

