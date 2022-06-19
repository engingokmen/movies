export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: string;
}

export const Button = ({
  onClick,
  type = "button",
  children,
  className = "primary",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-3 py-2 rounded ${className}`}
    >
      {children}
    </button>
  );
};
