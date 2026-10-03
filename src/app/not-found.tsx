import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center text-center px-4">
      <div className="space-y-4 max-w-md">
        <div className="font-mono text-xs text-accent uppercase tracking-widest">
          ERROR 404
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          404 — This route escaped the model.
        </h1>
        <p className="text-text-secondary text-sm">
          The requested path does not exist in this deployment parameter space.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] bg-accent text-white font-mono text-xs uppercase tracking-wider hover:bg-accent-hover transition-colors"
          >
            Return home →
          </Link>
        </div>
      </div>
    </main>
  );
}
