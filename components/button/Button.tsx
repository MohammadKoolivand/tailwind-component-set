// Button.tsx
import React from "react";

interface ButtonProps {
  label: string;
  size: "small"| "medium" | "large";
  variant?: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  label,
  variant = "primary",
  onClick,
  disabled,size
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      : "bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400";
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";
  const smallSize = size === "small" ? "p-[1]" : "p-[20]";

  return (
    <button
      className={`${styles} ${disabledStyles} ${smallSize}`}
      onClick={disabled ? undefined : onClick}>
      {label}
    </button>
  );
}
