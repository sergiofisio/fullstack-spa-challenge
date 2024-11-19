export default function Input({
  label,
  placeholder,
  value,
  onChange,
  maxLength,
  className,
  type,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  maxLength: number;
  className?: string;
  type: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="">{label}</label>
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          className={`w-full p-2 border rounded ${className}`}
        ></textarea>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          className={`w-full p-2 border rounded ${className}`}
        />
      )}
    </div>
  );
}
