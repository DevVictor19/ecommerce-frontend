type TextInputProps = {
  label: string;
  name: string;
  type?: 'text' | 'password';
  disabled?: boolean;
};

export default function TextInput({
  label,
  name,
  type,
  disabled,
}: TextInputProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} type={type} disabled={disabled} />
      <p></p>
    </div>
  );
}
