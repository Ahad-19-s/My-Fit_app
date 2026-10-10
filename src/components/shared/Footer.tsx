import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0d0b] py-6 text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        {/* Left side: Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png" // public ফোল্ডারে logo.png রাখতে হবে
            alt="FitLog Logo"
            width={24}
            height={24}
            className="h-5 w-5"
          />
          <span className="font-bold uppercase tracking-wide text-white">
            FITLOG
          </span>
        </div>

        {/* Right side: Copyright */}
        <p className="text-center text-xs leading-5 text-gray-400">
          © 2026 FitLog — Workout Library.{" "}
          <span className="italic">Train hard, log honest.</span>
        </p>
      </div>
    </footer>
  );
}
