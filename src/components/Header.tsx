export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background-light/70 dark:bg-background-dark/70 border-b border-primary/10">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Vaya Social Club" className="h-10 w-auto" />
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a className="text-sm font-bold tracking-widest hover:text-primary transition-colors" href="#">WHY JOIN</a>
        <a className="text-sm font-bold tracking-widest hover:text-primary transition-colors" href="#">ABOUT</a>
        <a className="text-sm font-bold tracking-widest hover:text-primary transition-colors" href="#">PARTNERSHIPS</a>
        <a className="text-sm font-bold tracking-widest hover:text-primary transition-colors border-2 border-primary px-4 py-1 rounded-full text-primary hover:bg-primary hover:text-white transition-all" href="#">SIGN UP</a>
      </nav>
      <button className="md:hidden material-symbols-outlined text-primary">menu</button>
    </header>
  );
}
