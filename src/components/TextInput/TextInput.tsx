import "./styles.scss";

export function TextInput({
  value,
  placeholder,
  onChange,
}: {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
