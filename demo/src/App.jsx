import './styles/global.css';
import './styles/theme.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WindowSection from './components/WindowSection';
import ClassesSection from './components/ClassesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><ClassesSection /></section>
      <section id="gallery"><WindowSection /></section>
      <section id="testimonials"><TestimonialsSection /></section>
      <section id="contact"><ContactSection /></section>
      {/* <section><ContactSection /></section> */}
      {/* Add Services, Gallery sections here */}
    </>
  );
}

export default App;
