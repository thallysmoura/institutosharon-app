import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Experience from '@/components/Experience';
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
        <Differentials />
        <Courses />
        <Experience />
        <About />
        <Units />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
