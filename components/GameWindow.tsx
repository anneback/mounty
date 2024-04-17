import Door from './Door';

const contents = ['Car', 'Goat', 'Goat'];

const GameWindow = () => {
  // calc game state
  const hasOpenedAllDoors = false;
  return (
    <div>
      {contents.map((content, index) => (
        <Door key={index} content={content} />
      ))}
      {hasOpenedAllDoors && (
        <h2 className='text-orange-500 text-4xxl'>Game over!</h2>
      )}
    </div>
  );
};

export default GameWindow;
