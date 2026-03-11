import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background-light/70 dark:bg-background-dark/70 border-b border-primary/10">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Vaya Social Club" className="h-10 w-auto" />
        </Link>
        <nav className="hidden xl:flex items-center gap-8">
          <a className="text-sm font-bold tracking-widest hover:text-primary transition-colors" href="#">WHY JOIN</a>
          <Link className="text-sm font-bold tracking-widest hover:text-primary transition-colors" to="/about">ABOUT</Link>
          <Link className="text-sm font-bold tracking-widest hover:text-primary transition-colors" to="/events">EVENTS</Link>
          <Link className="text-sm font-bold tracking-widest hover:text-primary transition-colors" to="/partnerships">PARTNERSHIPS</Link>
          <a className="text-sm font-bold tracking-widest hover:text-primary transition-colors border-2 border-primary px-4 py-1 rounded-full text-primary hover:bg-primary hover:text-white transition-all" href="#">SIGN UP</a>
        </nav>
        <button
          className="xl:hidden material-symbols-outlined text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? 'close' : 'menu'}
        </button>
      </div>

      {menuOpen && (
        <nav className="xl:hidden flex flex-col gap-4 px-6 pb-6 border-t border-primary/10">
          <a
            className="text-sm font-bold tracking-widest hover:text-primary transition-colors pt-4"
            href="#"
            onClick={() => setMenuOpen(false)}
          >
            WHY JOIN
          </a>
          <Link
            className="text-sm font-bold tracking-widest hover:text-primary transition-colors"
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            className="text-sm font-bold tracking-widest hover:text-primary transition-colors"
            to="/events"
            onClick={() => setMenuOpen(false)}
          >
            EVENTS
          </Link>
          <Link
            className="text-sm font-bold tracking-widest hover:text-primary transition-colors"
            to="/partnerships"
            onClick={() => setMenuOpen(false)}
          >
            PARTNERSHIPS
          </Link>
          <a
            className="text-sm font-bold tracking-widest text-primary border-2 border-primary px-4 py-1 rounded-full text-center hover:bg-primary hover:text-white transition-all"
            href="#"
            onClick={() => setMenuOpen(false)}
          >
            SIGN UP
          </a>
        </nav>
      )}
    </header>
  );
}
