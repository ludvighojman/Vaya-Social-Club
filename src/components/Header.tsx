import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
      <div className="flex items-center justify-between px-8 py-4">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Vaya Social Club" className="h-8 w-auto brightness-0 invert" />
        </Link>
        <nav className="hidden xl:flex items-center gap-8">
          <a className="text-xs font-bold tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors" href="#">WHY JOIN</a>
          <Link className="text-xs font-bold tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors" to="/about">ABOUT</Link>
          <Link className="text-xs font-bold tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors" to="/events">EVENTS</Link>
          <Link className="text-xs font-bold tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors" to="/partnerships">PARTNERSHIPS</Link>
          <a className="text-xs font-bold tracking-[0.2em] uppercase border border-white/60 px-5 py-2 text-white hover:bg-white hover:text-primary transition-all" href="#">SIGN UP</a>
        </nav>
        <button
          className="xl:hidden material-symbols-outlined text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? 'close' : 'menu'}
        </button>
      </div>

      {menuOpen && (
        <nav className="xl:hidden flex flex-col gap-5 px-8 pb-8 border-t border-white/20">
          <a className="text-xs font-bold tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors pt-6" href="#" onClick={() => setMenuOpen(false)}>WHY JOIN</a>
          <Link className="text-xs font-bold tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors" to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          <Link className="text-xs font-bold tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors" to="/events" onClick={() => setMenuOpen(false)}>EVENTS</Link>
          <Link className="text-xs font-bold tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors" to="/partnerships" onClick={() => setMenuOpen(false)}>PARTNERSHIPS</Link>
          <a className="text-xs font-bold tracking-[0.2em] uppercase border border-white/60 px-5 py-2 text-white text-center hover:bg-white hover:text-primary transition-all" href="#" onClick={() => setMenuOpen(false)}>SIGN UP</a>
        </nav>
      )}
    </header>
  );
}
