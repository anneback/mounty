import {
  getEndGame,
  getWinningDoor,
  getSecondGuess,
  reset as resetAction,
} from '@/redux/gameStateSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Button from './Button';

const EndGame = () => {
  const dispatch = useAppDispatch();
  const secondGuess = useAppSelector(getSecondGuess);
  const winningDoor = useAppSelector(getWinningDoor);
  const endGame = useAppSelector(getEndGame);

  const hasWon = secondGuess !== null && secondGuess === winningDoor;

  const text = hasWon
    ? 'Congratulations you won! 🥳 Now the game is over!'
    : 'Game Over 🙁! Unfortunately you did not win this time.';

  return (
    endGame && (
      <div className='flex flex-col items-center'>
        <h2 className='text-orange-500 text-2xl mb-4'>{text}</h2>
        <Button label='New game' onClick={() => dispatch(resetAction())} />
      </div>
    )
  );
};

export default EndGame;
