// Need to be an object because Redux Toolkit the follow error for an array of [1, 2, 3]:
// Error: Immer only supports setting array indices and the 'length' property'
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
