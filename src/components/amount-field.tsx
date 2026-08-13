import { cn } from "@/lib";

type AmountFieldProps = {
  id: string;
  label: string;
  icon: React.ReactNode;
  inputMode: "decimal" | "numeric";
  value: string;
  error?: string;
  onValueChange: (value: string) => void;
};

export default function AmountField({
  id,
  label,
  icon,
  inputMode,
  value,
  error,
  onValueChange,
}: AmountFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex flex-wrap items-baseline gap-x-4">
        <label htmlFor={id} className="text-label text-dark-grayish-cyan">
          {label}
        </label>
        {error && (
          <p
            id={errorId}
            role="alert"
            className="ml-auto text-label text-error"
          >
            {error}
          </p>
        )}
      </div>

      <div
        className={cn("v-field", {
          "outline-error focus-within:outline-error": error,
        })}
      >
        {icon}
        <input
          id={id}
          type="text"
          inputMode={inputMode}
          placeholder="0"
          value={value}
          onChange={(event) => onValueChange(event.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className="v-field-input placeholder:text-input-muted"
        />
      </div>
    </div>
  );
}
