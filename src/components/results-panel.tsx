type ResultsPanelProps = {
  tip: string;
  total: string;
  canReset: boolean;
};

export default function ResultsPanel({
  tip,
  total,
  canReset,
}: ResultsPanelProps) {
  return (
    <section
      aria-labelledby="results-heading"
      className="flex flex-col rounded-panel bg-very-dark-cyan px-6 pt-9 pb-6 lg:p-10"
    >
      <h2 id="results-heading" className="sr-only">
        Amount per person
      </h2>

      <dl className="flex flex-col gap-5 lg:gap-6">
        <ResultRow label="Tip Amount" amount={tip} />
        <ResultRow label="Total" amount={total} />
      </dl>

      <button
        type="reset"
        disabled={!canReset}
        className="mt-8 v-reset lg:mt-auto"
      >
        RESET
      </button>
    </section>
  );
}

function ResultRow({ label, amount }: { label: string; amount: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-label text-white">
        {label}
        <span className="block text-sublabel text-grayish-cyan">/ person</span>
      </dt>
      <dd className="text-amount tracking-amount text-strong-cyan lg:text-amount-lg">
        {amount}
      </dd>
    </div>
  );
}
