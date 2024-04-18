'use client';

import { useAppSelector } from '@/redux/hooks';
import {
  getDoors,
  getFirstGuess,
  getSecondGuess,
} from '@/redux/gameStateSlice';
import { useEffect } from 'react';

type DoorProps = {
  onClick?: () => void;
  label?: string;
};

const Door = (props: DoorProps) => {
  const { onClick, label = 'Door' } = props;

  const nothingDoor = label.toLowerCase() === 'nothing';
  const guessedDoor = label.toLowerCase() === 'guessed';

  return (
    <button
      className={`${
        nothingDoor
          ? 'bg-slate-600 hover:bg-slate-500'
          : 'bg-orange-600 hover:bg-orange-500'
      } ${
        guessedDoor ? 'text-slate-600' : 'text-white'
      } font-semibold h-36 w-20 border border-white hover:border-yellow-500 mx-4`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Door;
