import React from 'react'
import Navbar from './Components/navbar/page';
import Footer from './Components/footer/page';
import Content from './Components/content/page';

const Home = () => {
  return (
    <main className=''>
      <div>
      <Navbar/>
      </div>
      
      <div>
      <Content/>
      </div>

      <div className=''>
        <Footer/>
      </div>
      
    </main>
  );
}

export default Home