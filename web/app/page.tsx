import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import About from '@/components/About';
import Differentials from '@/components/Differentials';
import Units from '@/components/Units';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Courses />
        <About />
        <Differentials />
        <Units />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
