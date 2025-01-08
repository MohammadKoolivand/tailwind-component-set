import React from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder = "Enter text...",
  value,
  onChange,
  disabled = false,
  error,
}) => {
  const baseStyles = "border rounded px-4 py-2 w-full";
  const errorStyles = error ? "border-red-500" : "border-gray-300";
  const disabledStyles = disabled ? "bg-gray-100 cursor-not-allowed" : "";

  return (
    <div className="space-y-2">
      {label && <label className="block font-medium">{label}</label>}
      <input
        type="text"
        className={`${baseStyles} ${errorStyles} ${disabledStyles}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
