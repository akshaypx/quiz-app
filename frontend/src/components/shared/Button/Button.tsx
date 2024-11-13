import { CSSProperties, PropsWithChildren } from "react";

import "./Button.css";

type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
}>;

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
}: ButtonProps) => {
  const variantStyles: Record<ButtonProps["variant"], CSSProperties> = {
    primary: {
      backgroundColor: "#FCC822",
      color: "white",
    },
    secondary: {
      backgroundColor: "white",
      color: "#FCC822",
    },
  };

  const sizeStyles: Record<ButtonProps["size"], CSSProperties> = {
    sm: {
      padding: "0.5rem",
    },
    md: {
      padding: "0.75rem",
    },
    lg: {
      padding: "1rem",
    },
  };

  return (
    <button
      className="button"
      style={{
        ...variantStyles[variant],
        ...sizeStyles[size],
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
