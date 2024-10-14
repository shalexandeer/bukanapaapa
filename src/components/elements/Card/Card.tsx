import React, { ReactNode } from "react";

// Main Card component
interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = "", onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`card rounded-xl border border-borderPrimaryDark p-3 ${className}`}
    >
      {children}
    </div>
  );
};

// CardBody component
interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

const CardBody: React.FC<CardBodyProps> = ({ children, className = "" }) => {
  return <div className={`${className}`}>{children}</div>;
};

// CardTitle component
interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ children, className = "" }) => {
  return <h2 className={`card-title ${className}`}>{children}</h2>;
};

// CardActions component
interface CardActionsProps {
  children: ReactNode;
  className?: string;
}

const CardActions: React.FC<CardActionsProps> = ({
  children,
  className = "",
}) => {
  return <div className={`card-actions ${className}`}>{children}</div>;
};

// Export all components as named exports
export { Card, CardBody, CardTitle, CardActions };
