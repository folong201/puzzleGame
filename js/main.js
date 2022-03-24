// Etat global
let MAP = [[0, 1, 1], [1, 1, 1], [1, 1, 1]];
let moves = 0;
const POSITION = {
  "1": {
    x: 0,
    y: 0
  },
  "2": {
    x: 0,
    y: 1
  },
  "3": {
    x: 0,
    y: 2
  },
  "4": {
    x: 1,
    y: 0
  },
  "5": {
    x: 1,
    y: 1
  },
  "6": {
    x: 1,
    y: 2
  },
  "7": {
    x: 2,
    y: 0
  },
  "8": {
    x: 2,
    y: 1
  },
  "9": {
    x: 2,
    y: 2
  }
}
const ROUTES = {
  "1": [
    {
      id: 4,
      x: 1,
      y: 0
    },
    {
      id: 2,
      x: 0,
      y: 1
    }
  ],
  "2": [
    {
      id: 1,
      x: 0,
      y: 0
    },
    {
      id: 3,
      x: 0,
      y: 2
    },
    {
      id: 5,
      x: 1,
      y: 1
    }
  ],
  "3": [
    {
      id: 2,
      x: 0,
      y: 1
    },
    {
      id: 6,
      x: 1,
      y: 2
    }
  ],
  "4": [
    {
      id: 1,
      x: 0,
      y: 0
    },
    {
      id: 7,
      x: 2,
      y: 0
    },
    {
      id: 5,
      x: 1,
      y: 1
    }
  ],
  "5": [
    {
      id: 2,
      x: 0,
      y: 1
    },
    {
      id: 4,
      x: 1,
      y: 0
    },
    {
      id: 8,
      x: 2,
      y: 1
    },
    {
      id: 6,
      x: 1,
      y: 2
    }
  ],
  "6": [
    {
      id: 3,
      x: 0,
      y: 2
    },
    {
      id: 5,
      x: 1,
      y: 1
    },
    {
      id: 9,
      x: 2,
      y: 2
    }
  ],
  "7": [
    {
      id: 4,
      x: 1,
      y: 0
    },
    {
      id: 8,
      x: 2,
      y: 1
    }
  ],
  "8": [
    {
      id: 7,
      x: 2,
      y: 0
    },
    {
      id: 5,
      x: 1,
      y: 1
    },
    {
      id: 9,
      x: 2,
      y: 2
    }
  ],
  "9": [
    {
      id: 6,
      x: 1,
      y: 2
    },
    {
      id: 8,
      x: 2,
      y: 1
    }
  ]
}


// Selection des elements HTML
const items = document.querySelectorAll(".item");
const movesElement = document.querySelector(".puzzel-moves");
const btnStart = document.querySelector(".btn-start");

// Lancement du jeu au chargement de la page
window.onload = function() {
  startGame(items, movesElement);
}

// Lancement du jeu apres le clic sur le button 'Start game'
btnStart.onclick = function() {
  startGame(items, movesElement);
  MAP = [[0, 1, 1], [1, 1, 1], [1, 1, 1]];
  moves = 0;
}

// Deplacement des imags apres un clic dessus
items.forEach(item => {
  item.onclick = function() {
    // Obtention de la nouvelle position
    const {position, error} = moveItem(item, MAP, ROUTES);
    const currentPosition = POSITION[item.id];

    // Si le deplacement s'est effectué (On obtient donc la position futur)
    if (position) {
      moves += 1;

      movesElement.textContent = `MOVES: ${moves}`

      MAP[currentPosition.x][currentPosition.y] = 0;
      MAP[position.x][position.y] = 1;

      // Verification si le joueur a gagné
      const win = checkWin(items);

      if (win) {
        res = confirm(`Bravo ! vous avez gagne avec un total de ${moves} mouvements. Voulez vous rejouez ?`);
      
        if (res) {
          startGame(items, movesElement);
        } else {
          startGame(items, movesElement);
        }
      }
    }
  }
})