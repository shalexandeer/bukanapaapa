import React from "react";
import { Link } from "react-router-dom";

type BreadcrumbProps = {
  paths: { name: string; url?: string }[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ paths }) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {paths.map((path, index) => (
          <li key={index}>
            {path.url ? (
              <Link to={path.url}>{path.name}</Link>
            ) : (
              <span className="text-primary">{path.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
