import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background-light/70 dark:bg-background-dark/70 border-b border-primary/10">
      <Link to="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="Vaya Social Club" className="h-10 w-auto" />
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <a className="text-sm font-bold tracking-widest hover:text-primary transition-colors" href="#">WHY JOIN</a>
        <Link className="text-sm font-bold tracking-widest hover:text-primary transition-colors" to="/about">ABOUT</Link>
        <Link className="text-sm font-bold tracking-widest hover:text-primary transition-colors" to="/events">EVENTS</Link>
        <Link className="text-sm font-bold tracking-widest hover:text-primary transition-colors" to="/partnerships">PARTNERSHIPS</Link>
        <a className="text-sm font-bold tracking-widest hover:text-primary transition-colors border-2 border-primary px-4 py-1 rounded-full text-primary hover:bg-primary hover:text-white transition-all" href="#">SIGN UP</a>
      </nav>
      <button className="md:hidden material-symbols-outlined text-primary">menu</button>
    </header>
  );
}
