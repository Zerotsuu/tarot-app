export const ShuffleCardsUtil = (imageElements) => {

  for (let i = imageElements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imageElements[i], imageElements[j]] = [imageElements[j], imageElements[i]];
  }
  return imageElements
}
