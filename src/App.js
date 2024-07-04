import React from 'react';
import Navbar from './components/navbar/Navbar';
import Bannner from './components/banner/Bannner';
import Features from './components/features/Features';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer';


const App = () => {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText px-4'>
      <Navbar />
      <div className='max-w-screen-xl mx-auto '>
      <Bannner/>
      <Features/>
      <Projects/>
      <Resume/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
};

export default App;
