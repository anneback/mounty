'use client';

import { useState } from 'react';

type DoorProps = {
  content: string;
};

const Door = (props: DoorProps) => {
  const { content } = props;
  const [isOpen, setIsOpen] = useState(false);

  const calcLabel = !isOpen ? 'Door' : content;

  return (
    <button
      className='bg-orange-600 hover:bg-orange-500 font-semibold hover:text-white h-36 w-20 border border-black hover:border-transparent rounded mx-4'
      onClick={() => setIsOpen(true)}
    >
      {calcLabel}
    </button>
  );
};

export default Door;
