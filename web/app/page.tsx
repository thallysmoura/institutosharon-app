import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Experience from '@/components/Experience';
import Differentials from '@/components/Differentials';
import Units from '@/components/Units';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Courses />
        <Experience />
        <Differentials />
        <Units />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
