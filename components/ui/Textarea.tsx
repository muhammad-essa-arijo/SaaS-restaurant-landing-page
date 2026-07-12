import { cn } from "@/lib/utils";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helpText?: string;
}

export const Textarea = ({
  label,
  error,
  helpText,
  className,
  ...props
}: TextareaProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium text-charcoal-700">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          "input-base min-h-32 resize-vertical",
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
