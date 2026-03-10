import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden vintage-grain font-display text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-white bg-background-light dark:bg-background-dark">
      <Header />
      <Hero />
      <Stats />
      <Newsletter />
      <Footer />
    </div>
  );
}
