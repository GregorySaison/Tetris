# La modularité c'est la vie

### Préciser dans le html:

```html
<script type="module" src="app/app.js"></script>
```

### Un fichier par classe !

```js
export default class Tetromino {
    // bla bla
    // constructeur
    // méthodes
}
```

### Importer avec un fichier relatif

```js
import Tetromino from "./Tetromino.js";
```

Ne pas oublier le `.js` sinon ça peut rater selon les navigateurs.
