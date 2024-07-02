import React from 'react';
import Navbar from './components/navbar/Navbar';
import Bannner from './components/banner/Bannner';
import Features from './components/features/Features';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Testimonial from './components/testimonial/Testimonial';


const App = () => {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText'>
      <div className='max-w-screen-2xl mx-auto px-16'>
      <Navbar/>
      <Bannner/>
      <Features/>
      <Projects/>
      <Resume/>
      <Testimonial/>
      </div>
    </div>
  );
};

export default App;
