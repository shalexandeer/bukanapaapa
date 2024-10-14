import { forwardRef, SelectHTMLAttributes } from "react";

export interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  labelAlt?: string;
  labelBottomLeft?: string;
  labelBottomRight?: string;
  error?: string;
  className?: string;
  options: SelectOption[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      labelAlt,
      labelBottomLeft,
      labelBottomRight,
      error,
      className = "",
      options,
      ...props
    },
    ref,
  ) => {
    return (
      <label className={`form-control w-full ${className}`}>
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
        <select
          ref={ref}
          className={`!border-borderPrimaryDark select select-bordered w-full rounded-xl ${
            error ? "select-error" : ""
          } bg-transparent`}
          {...props}
        >
          <option disabled selected>
            {label ? `Select ${label}` : "Pick one"}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <span className="label-text-alt text-error">{error}</span>}
        <div className="label">
          {labelBottomLeft && (
            <span className="label-text-alt">{labelBottomLeft}</span>
          )}
          {labelBottomRight && (
            <span className="label-text-alt">{labelBottomRight}</span>
          )}
        </div>
      </label>
    );
  },
);

Select.displayName = "Select";

export default Select;
