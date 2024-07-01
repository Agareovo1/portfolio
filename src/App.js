import React from 'react';
import Navbar from './components/navbar/Navbar';
import Bannner from './components/banner/Bannner';
import Features from './components/features/Features';


const App = () => {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText'>
      <div className='max-w-screen-2xl mx-auto px-16'>
      <Navbar/>
      <Bannner/>
      <Features/>
      </div>
    </div>
  );
};

export default App;
