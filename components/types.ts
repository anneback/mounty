export type DoorType = {
  id: number;
};

export type GameStateType = {
  doors: DoorType[];
  winningDoor: number;
  // guessedDoor: number | null;
  firstGuess: number | null;
  secondGuess: number | null;
  hasWon: boolean;
  revealedDoor: number | null;
  allGuessed: boolean;
  endGame: boolean;
};
