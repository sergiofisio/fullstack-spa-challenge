export default function Button({
  onClick,
  className,
  text,
  disabled = false,
}: {
  onClick: () => void;
  className: string;
  text: string;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border-2 border-solid rounded-3xl  text-white transition-all duration-500 ease-in-out hover:bg-white ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
