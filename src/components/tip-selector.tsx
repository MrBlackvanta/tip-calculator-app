import { cn } from "@/lib";

const PRESETS = ["5", "10", "15", "25", "50"];

type TipSelectorProps = {
  preset: string;
  custom: string;
  onPresetChange: (preset: string) => void;
  onCustomChange: (custom: string) => void;
};

export default function TipSelector({
  preset,
  custom,
  onPresetChange,
  onCustomChange,
}: TipSelectorProps) {
  return (
    <fieldset>
      <legend className="mb-4 text-label text-dark-grayish-cyan">
        Select Tip %
      </legend>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-x-3.5">
        {PRESETS.map((percentage) => (
          <label
            key={percentage}
            className={cn(
              "v-tip-option bg-very-dark-cyan text-white hover:bg-cyan-hover hover:text-very-dark-cyan",
              {
                "bg-strong-cyan text-very-dark-cyan hover:bg-strong-cyan":
                  preset === percentage,
              },
            )}
          >
            <input
              type="radio"
              name="tip"
              value={percentage}
              checked={preset === percentage}
              onChange={() => onPresetChange(percentage)}
              className="sr-only"
            />
            {percentage}%
          </label>
        ))}

        <div className="v-field">
          <label htmlFor="custom-tip" className="sr-only">
            Custom tip percentage
          </label>
          <input
            id="custom-tip"
            type="text"
            inputMode="decimal"
            placeholder="Custom"
            value={custom}
            onChange={(event) => onCustomChange(event.target.value)}
            className="v-field-input placeholder:text-dark-grayish-cyan"
          />
        </div>
      </div>
    </fieldset>
  );
}
