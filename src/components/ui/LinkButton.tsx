import React from "react";

interface LinkButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  fullWidth?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  onClick,
  target,
  rel,
  ariaLabel,
  fullWidth = false,
}) => {
  // Generate variant-specific styles
  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary/90 border border-transparent",
    secondary: "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50",
    outline:
      "bg-transparent border border-primary text-primary hover:bg-primary/5",
  };

  // Generate size-specific styles
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  // Handle external links
  const isExternal = href.startsWith("http") || href.startsWith("//");
  const externalProps = isExternal
    ? {
        target: target || "_blank",
        rel: rel || "noopener noreferrer",
      }
    : {};

  // Handle navigation
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        rounded-lg font-medium transition-colors duration-200 
        inline-flex items-center justify-center cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-primary/50
        ${className}
      `}
      onClick={handleClick}
      aria-label={ariaLabel}
      {...externalProps}
    >
      {children}
    </a>
  );
};

export default LinkButton;
