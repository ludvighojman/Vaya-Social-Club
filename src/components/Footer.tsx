import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-8 md:px-20 border-t border-black/10 dark:border-white/10 bg-background-light dark:bg-background-dark">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <span className="font-black uppercase tracking-widest text-sm">VAYA SOCIAL CLUB</span>
        <div className="flex items-center gap-8">
          <a
            href="https://www.instagram.com/vayasocialclub"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-primary transition-colors"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
          <a
            href="mailto:vayasocialclub@gmail.com"
            className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-base">mail</span>
            Email
          </a>
        </div>
        <p className="text-slate-400 text-xs tracking-widest uppercase">© 2026 Lisbon</p>
      </div>
    </footer>
  );
}
