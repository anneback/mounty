'use client';

import { useEffect } from 'react';
import Door from './Door';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  firstGuess as firstGuessAction,
  secondGuess as secondGuessAction,
  endGame as endGameAction,
  getDoors,
  getFirstGuess,
  getRevealedDoor,
  getSecondGuess,
  getWinningDoor,
  revealDoor,
  getEndGame,
} from '@/redux/gameStateSlice';
import Button from './Button';
import EndGame from './EndGame';
import { getLabel } from './utils/getLabel';

const GameWindow = () => {
  const dispatch = useAppDispatch();
  const doors = useAppSelector(getDoors);
  const firstGuess = useAppSelector(getFirstGuess);
  const secondGuess = useAppSelector(getSecondGuess);
  const winningDoor = useAppSelector(getWinningDoor);
  const revealedDoor = useAppSelector(getRevealedDoor);
  const endGame = useAppSelector(getEndGame);

  useEffect(() => {
    if (firstGuess !== null && secondGuess === null) {
      const doorIdToReveal = doors.filter(
        (door) => door.id !== winningDoor && door.id !== firstGuess
      )[0].id;
      dispatch(revealDoor({ id: doorIdToReveal }));
    }
    if (firstGuess !== null && secondGuess !== null) {
      dispatch(endGameAction());
    }
  }, [dispatch, doors, firstGuess, secondGuess, winningDoor]);

  const handleOnClick = (id: number) => {
    if (firstGuess === null) {
      dispatch(firstGuessAction({ id }));
    }
  };

  const nonRevealedDoor = doors.filter((door) => {
    return firstGuess !== door.id && revealedDoor !== door.id;
  })[0].id;

  const handleKeepChoiceOnClick = () => {
    dispatch(secondGuessAction({ id: firstGuess }));
  };

  const handleOtherChoiceOnClick = () => {
    dispatch(secondGuessAction({ id: nonRevealedDoor }));
  };

  return (
    <div>
      <div className='flex justify-center mt-4 border-b-2 mb-10 pb-4'>
        {doors.map((door) => (
          <Door
            key={door.id}
            id={door.id}
            onClick={() => handleOnClick(door.id)}
            label={getLabel(
              door.id,
              firstGuess,
              winningDoor,
              revealedDoor,
              endGame
            )}
          />
        ))}
      </div>
      <div>
        {firstGuess === null && (
          <>
            <h2 className='text-center text-xl'>
              Welcome to 3 doors game show!
            </h2>
            <h2 className='text-center text-lg font-bold text-orange-500 mt-10'>
              To play, please click a door 👆
            </h2>
          </>
        )}
        {firstGuess !== null && secondGuess === null && (
          <>
            <p className='text-center text-white'>
              We have now opened a door with Nothing behind it.
            </p>
            <p className='text-center text-orange-500 my-4 font-bold'>
              Would you like to keep your choice or take the other door?
            </p>
            <div className='flex justify-between'>
              <Button
                label={`Keep my choice (Door ${firstGuess + 1})`}
                onClick={() => handleKeepChoiceOnClick()}
              />
              <Button
                label={`Choose Other door (Door ${nonRevealedDoor + 1})`}
                onClick={() => handleOtherChoiceOnClick()}
              />
            </div>
          </>
        )}
        <EndGame />
      </div>
    </div>
  );
};

export default GameWindow;
