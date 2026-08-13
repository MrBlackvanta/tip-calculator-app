"use client";

import AmountField from "@/components/amount-field";
import { DollarIcon, PersonIcon } from "@/components/icons";
import ResultsPanel from "@/components/results-panel";
import TipSelector from "@/components/tip-selector";
import { useState } from "react";

const DECIMAL = /^\d*\.?\d*$/;
const WHOLE = /^\d*$/;

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function toNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [preset, setPreset] = useState("");
  const [custom, setCustom] = useState("");
  const [people, setPeople] = useState("");

  const headCount = toNumber(people);
  const tipPerPerson =
    headCount > 0
      ? (toNumber(bill) * toNumber(custom || preset)) / 100 / headCount
      : 0;
  const totalPerPerson =
    headCount > 0 ? toNumber(bill) / headCount + tipPerPerson : 0;

  function handleBillChange(value: string) {
    if (DECIMAL.test(value)) setBill(value);
  }

  function handlePeopleChange(value: string) {
    if (WHOLE.test(value)) setPeople(value);
  }

  function handlePresetChange(value: string) {
    setPreset(value);
    setCustom("");
  }

  function handleCustomChange(value: string) {
    if (!DECIMAL.test(value)) return;
    setCustom(value);
    setPreset("");
  }

  function handleReset() {
    setBill("");
    setPreset("");
    setCustom("");
    setPeople("");
  }

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      onReset={handleReset}
      className="flex w-full flex-col gap-8 rounded-t-card bg-white p-8 shadow-card sm:mx-auto sm:max-w-120 sm:rounded-card lg:grid lg:max-w-230 lg:grid-cols-2"
    >
      <div className="flex flex-col gap-8 lg:gap-10 lg:p-4">
        <AmountField
          id="bill"
          label="Bill"
          icon={<DollarIcon className="h-4.25 w-2.75 text-input-muted" />}
          inputMode="decimal"
          value={bill}
          onValueChange={handleBillChange}
        />

        <TipSelector
          preset={preset}
          custom={custom}
          onPresetChange={handlePresetChange}
          onCustomChange={handleCustomChange}
        />

        <AmountField
          id="people"
          label="Number of People"
          icon={<PersonIcon className="h-4 w-3.25 text-input-muted" />}
          inputMode="numeric"
          value={people}
          error={people !== "" && headCount === 0 ? "Can't be zero" : undefined}
          onValueChange={handlePeopleChange}
        />
      </div>

      <ResultsPanel
        tip={currency.format(tipPerPerson)}
        total={currency.format(totalPerPerson)}
        canReset={Boolean(bill || preset || custom || people)}
      />
    </form>
  );
}
