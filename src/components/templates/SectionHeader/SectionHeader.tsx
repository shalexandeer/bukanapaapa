import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Button from "../../elements/Button";

interface SectionHeaderProps {
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="flex flex-col justify-between self-stretch max-md:space-y-4 md:flex-row">
      <div className="column flex flex-col items-start gap-1">
        <h1 className="self-stretch text-3xl font-bold leading-[140%] text-white sm:text-3xl md:text-4xl">
          {title}
        </h1>
        <p className="self-stretch text-sm leading-[150%] text-textPrimaryDark sm:text-base">
          {description}
        </p>
      </div>
      {buttonText && onButtonClick && (
        <span>
          <Button onClick={onButtonClick}>
            <span>{buttonText}</span>
            <ChevronRightIcon className="size-4 w-max" />
          </Button>
        </span>
      )}
    </div>
  );
};

export default SectionHeader;
