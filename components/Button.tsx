type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button = (props: ButtonProps) => {
  const { label, onClick } = props;
  return (
    <button
      className='border p-3 rounded border-orange-500 hover:bg-slate-800'
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
