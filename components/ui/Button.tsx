import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "button-base font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-gold-500 text-white hover:bg-gold-600 shadow-lg hover:shadow-glow",
    secondary: "bg-charcoal-900 text-white hover:bg-charcoal-800 shadow-lg",
    outline:
      "border-2 border-gold-500 text-gold-600 hover:bg-gold-50 hover:text-gold-700",
    ghost: "text-charcoal-900 hover:bg-charcoal-50 hover:text-gold-600",
  };

  const sizeStyles = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      <span className="flex items-center justify-center gap-2">
        {isLoading && (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
        )}
        {icon && !isLoading && <span className="flex">{icon}</span>}
        {children}
      </span>
    </button>
  );
}
