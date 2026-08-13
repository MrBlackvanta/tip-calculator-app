import { LogoIcon } from "@/components/icons";
import { Footer } from "@/components/layout";
import TipCalculator from "@/components/tip-calculator";

export default function Home() {
  return (
    <>
      <div className="flex flex-1 flex-col justify-between lg:justify-center lg:py-8">
        <header className="pt-12 pb-10 lg:pt-0 lg:pb-22">
          <h1 className="flex justify-center">
            <LogoIcon className="h-13.5 text-page-ink" />
          </h1>
        </header>

        <main className="lg:px-8">
          <TipCalculator />
        </main>
      </div>

      <Footer />
    </>
  );
}
