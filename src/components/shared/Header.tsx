import { ThemeToggle } from "..";

export function Header() {
  return (
    <header className="fixed z-20 flex w-full items-center justify-between bg-slate-800 p-3">
      <div />
      <div className="flex space-x-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
