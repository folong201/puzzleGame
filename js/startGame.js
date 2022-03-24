/**
 * Initialisation de la partie
 * @param {HTMLElement} items 
 */
const startGame = (items, movesElement) => {
  // Definitions d'un tableau contenant les noms des images
  const imageNames = ['12', '13', '21', '22', '23', '31', '32', '33'];

  // Tableau contenant les images desordonnee
  const tabPositions = []

  while (imageNames.length > 0) {
    const randomIndex = Math.floor(Math.random() * imageNames.length);

    // Ajout de l'image selectionne
    tabPositions.push(imageNames[randomIndex]);

    // Suppression de l'image
    imageNames.splice(randomIndex, 1)
  }

  items.forEach((item, index) => {
    if (Number(item.id) > 1) {
      item.style.backgroundImage = `url(../assets/${tabPositions[index-1]}.jpg)`;
      item.style.backgroundPosition = "center";
      item.style.backgroundSize = "cover"
    } else {
      item.style.backgroundImage = "";
    }
  })

  movesElement.textContent = `MOVES: 0`
}