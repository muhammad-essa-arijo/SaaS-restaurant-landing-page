import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
}

export const Input = ({
  label,
  error,
  helpText,
  className,
  ...props
}: InputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium text-charcoal-700">
          {label}
        </label>
      )}
      <input
        className={cn(
          "input-base",
          error && "border-red-500 focus:ring-red-500/20",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      {helpText && !error && (
        <p className="mt-1 text-sm text-charcoal-500">{helpText}</p>
      )}
    </div>
  );
};
