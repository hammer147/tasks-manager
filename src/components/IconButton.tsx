type IconButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <button
      {...props}
      className="bg-gray-200 p-2 rounded-md transition-all hover:bg-gray-300"
    >
      {children}
    </button>
  );
};

export default IconButton;
