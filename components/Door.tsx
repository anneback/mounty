'use client';

type DoorProps = {
  id: number;
  onClick?: () => void;
  label?: string;
};

const Door = (props: DoorProps) => {
  const { id, onClick, label = 'Door' } = props;

  const nothingDoor = label.toLowerCase() === 'nothing';
  const guessedDoor = label.toLowerCase() === 'guessed';

  return (
    <div className='flex flex-col items-center'>
      <h3>Door {id + 1}</h3>
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
    </div>
  );
};

export default Door;
