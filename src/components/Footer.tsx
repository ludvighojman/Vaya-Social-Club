import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-20 border-t border-primary/10 bg-background-light dark:bg-background-dark">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl font-bold">directions_run</span>
          <span className="font-black italic text-xl">VAYA SOCIAL CLUB</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/vayasocialclub"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold tracking-wide hover:text-primary transition-colors"
          >
            <span className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all">
              <Instagram className="w-5 h-5" />
            </span>
            @vayasocialclub
          </a>
          <a
            href="mailto:vayasocialclub@gmail.com"
            className="flex items-center gap-2 text-sm font-bold tracking-wide hover:text-primary transition-colors"
          >
            <span className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined text-xl">mail</span>
            </span>
            vayasocialclub@gmail.com
          </a>
        </div>
        <p className="text-slate-500 text-sm font-bold tracking-widest uppercase">© 2026 VAYA SOCIAL CLUB • LISBON</p>
      </div>
    </footer>
  );
}
