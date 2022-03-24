// Vérification si la partie est gagné ou pas
const checkWin = (items) => {
  const correctPosition = ['0', '12', '13', '21', '22', '23', '31', '32', '33'];
  const position = [];

  // Extraction du nom des images
  items.forEach((item) => {
    const image = item.style.backgroundImage;
    const name = extractImageName(image);

    if (name !== "")
      position.push(name);
    else
      position.push(0);
  })

  // Comparaison pour savoir si les images sont en ordre
  return comparison(position, correctPosition);
}

// Extraction du nom de l'image dans l'url du background d'un Item
const extractImageName = (image) => {
  // Decoupage de l'url dans un tableau
  // Au depart, si nous avons un truc du genre: image = url("../assets/11.jpg")
  const firstSplit = image.split("/"); // firstSplit = ['url("..', 'assets', '11.jpg")']
  const filename = firstSplit[firstSplit.length - 1]; // filename = '11.jpg")'

  const secondSplit = filename.split("."); // secondSplit = ['11', 'jpg")']

  return secondSplit[0]; // return 11
}



const comparison = (tab1, tab2) => {
  for (id in tab1) {
    if (Number(tab1[id]) !== Number(tab2[id])) {
      return false;
    }
  }

  return true;
}