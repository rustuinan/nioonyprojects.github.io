export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-aurora shadow-glow-magenta grid h-9 w-9 place-items-center rounded-xl">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 text-white">
          <path d="m12 2 1.7 5.2L19 9l-5.3 1.8L12 16l-1.7-5.2L5 9l5.3-1.8L12 2Z" fill="currentColor" />
          <path d="m18.5 14 .9 2.6L22 17.5l-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6Z" fill="currentColor" opacity=".72" />
        </svg>
      </div>
      <span className="font-display text-lg font-bold tracking-tight text-white">Nioony Projects</span>
    </div>
  );
}
