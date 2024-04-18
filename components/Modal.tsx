import {
  getFirstGuess,
  getRevealedDoor,
  secondGuess as secondGuessAction,
} from '@/redux/gameStateSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

type ModalType = {
  isOpen: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
};

const Modal = () => {
  // const { isOpen, toggle } = props;
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const firstGuess = useAppSelector(getFirstGuess);
  const revealDoor = useAppSelector(getRevealedDoor);

  useEffect(() => {
    setIsOpen(revealDoor !== null);
  }, [revealDoor]);

  const handleKeepChoiceOnClick = () => {
    dispatch(secondGuessAction({ id: firstGuess }));
    setIsOpen(false);
  };

  const handleOtherChoiceOnClick = () => {
    dispatch(secondGuessAction({ id: 2 }));
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className='flex items-center justify-center w-screen h-screen z-100 absolute top-0 bg-slate-500/50'>
          <div className='bg-white w-6/12 h-6/12 rounded p-6 text-black text-center'>
            <h2 className='text-xxl'>
              Would you like to keep you answer or choice the other door?
              <div className='flex justify-around mt-6'>
                <button
                  className='border p-3'
                  onClick={() => handleKeepChoiceOnClick()}
                >
                  Keep my choice
                </button>
                <button
                  className='border p-3'
                  onClick={() => handleOtherChoiceOnClick()}
                >
                  Other door
                </button>
              </div>
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
