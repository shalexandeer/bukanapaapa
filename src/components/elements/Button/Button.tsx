import React, { forwardRef, ReactNode } from "react";

const variants = {
  primary:
    "font-medium bg-primary hover:opacity-70 hover:bg-primary text-black border-none ",
  secondary: "font-medium bg-white hover:opacity-70 hover:bg-white text-black",
  outline:
    "font-medium text-primary border border-primary hover:border-borderPrimaryDark hover:shadow-white",
  danger:
    "font-medium bg-red-500 text-white border-none hover:opacity-90 hover:opacity-70 hover:bg-red-500",
  custom: "font-medium",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "h-10  ", variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`btn rounded-[10px] px-5 py-2 ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
