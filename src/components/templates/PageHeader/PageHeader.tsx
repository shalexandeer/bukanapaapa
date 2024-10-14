import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import Breadcrumb from "../../elements/Breadcrumb";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  paths: { name: string; url?: string }[];
  title: string;
  enableBack?: boolean;
  onSearch?: (value: string) => void;
  onFilter?: () => void;
  categories?: { name: string; variant?: string }[];
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  paths,
  title,
  enableBack,
  onSearch,
  onFilter,
  categories,
  className,
}) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const navigate = useNavigate();
  return (
    <div className={`mt-5 self-stretch ${className}`}>
      <Breadcrumb paths={paths} />
      <div className="flex flex-col justify-between self-stretch max-sm:space-y-4 sm:flex-row">
        <div className="flex items-end gap-4">
          {enableBack ? (
            <Button
              variant="custom"
              className="!px-0"
              onClick={() => navigate(-1)}
            >
              <ChevronLeftIcon className="size-6" />
            </Button>
          ) : null}
          <h1 className="self-stretch text-[2rem] font-bold leading-[130%] text-textPrimaryDark">
            {title}
          </h1>
        </div>
        {!onSearch ? null : (
          <div className="flex items-center justify-center gap-4 rounded-xl">
            <Input
              leftIcon={<MagnifyingGlassIcon className="size-6 text-white" />}
              placeholder="Search"
              className="w-[15.5rem] overflow-hidden rounded-xl bg-bgSecondaryBlack"
              onChange={(e) => onSearch && onSearch(e.target.value)}
            />
            <Button onClick={onFilter}>
              <FunnelIcon className="size-6" /> Filter
            </Button>
          </div>
        )}
      </div>
      {categories && categories.length > 0 ? (
        <div className="mt-4 flex flex-wrap content-start items-start gap-4">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === index ? "primary" : "custom"}
              className={`${
                category.variant
                  ? "pill-button-custom !px-2"
                  : "h-7 min-h-0 rounded-lg !py-0 px-[6px] font-semibold"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default PageHeader;
