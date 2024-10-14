import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  placeholder?: string;
  label?: string;
  labelAlt?: string;
  labelBottomLeft?: string;
  labelBottomRight?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  as?: "input" | "textarea";
  readonlyPlaceholder?: boolean;
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      label,
      labelAlt,
      labelBottomLeft,
      labelBottomRight,
      error,
      placeholder,
      leftIcon,
      rightIcon,
      className = "",
      as = "input",
      readonlyPlaceholder = false,
      ...props
    },
    ref,
  ) => {
    const Component = as;
    return (
      <label className={`form-control w-full ${className}`}>
        {(label || labelAlt) && (
          <div className="label">
            {label && (
              <span className="label-text text-base font-medium">{label}</span>
            )}
            {labelAlt && (
              <span className="label-text-alt text-base font-medium">
                {labelAlt}
              </span>
            )}
          </div>
        )}
        <div className="relative">
          {leftIcon && (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              {leftIcon}
            </span>
          )}
          <Component
          // @ts-ignore
            ref={ref}
            placeholder={placeholder}
            readOnly={readonlyPlaceholder}
            className={`input input-bordered w-full rounded-xl placeholder:text-sm placeholder:text-textGrayColor ${
              leftIcon ? "pl-10" : ""
            } ${rightIcon ? "pr-10" : ""} ${error ? "input-error" : ""} ${
              readonlyPlaceholder ? "cursor-not-allowed" : "bg-transparent"
            }`}
            {...props}
          />
          {rightIcon && (
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              {rightIcon}
            </span>
          )}
        </div>
        {error && <span className="label-text-alt text-error">{error}</span>}
        {(labelBottomLeft || labelBottomRight) && (
          <div className="label">
            {labelBottomLeft && (
              <span className="label-text-alt">{labelBottomLeft}</span>
            )}
            {labelBottomRight && (
              <span className="label-text-alt">{labelBottomRight}</span>
            )}
          </div>
        )}
      </label>
    );
  },
);

Input.displayName = "Input";

export default Input;
