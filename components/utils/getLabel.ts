export const getLabel = (
  id: number | null,
  firstGuess: number | null,
  winningDoor: number,
  revealedDoor: number | null,
  endGame: boolean
) => {
  if (endGame && id === winningDoor) {
    return '🏆\nPrize';
  }

  if (!endGame && firstGuess !== null && firstGuess === id) {
    return 'Guessed';
  }

  if (
    (endGame && id !== winningDoor) ||
    (!endGame && revealedDoor !== null && revealedDoor === id)
  ) {
    return 'Nothing';
  }

  return '?';
};
