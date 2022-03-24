const moveItem = (item, MAP, ROUTES) => {
  const id = item.id;

  // Recuperation des different mouvement possible pour l'item courant
  const SPECIFIC_ROUTE = ROUTES[id];

  for (position of SPECIFIC_ROUTE) {
    // Recuperation de la valeur.
    // valeur = 0 alors la position est libre
    // valeur = 1 alors la position est occupé
    const value = MAP[position.x][position.y];

    // Si la position est libre alors on deplace
    if (value === 0) {
      const nextPositionOfItem = document.getElementById(`${position.id}`);

      nextPositionOfItem.style.backgroundImage = item.style.backgroundImage;
      nextPositionOfItem.style.backgroundPosition = "center";
      nextPositionOfItem.style.backgroundSize = "cover"

      item.style.backgroundImage = "";

      return { position };
    }
  }

  return { error: false };
}