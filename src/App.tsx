import React from 'react';
import Header from './components/organisms/header';
import Overview from './components/organisms/overview';
import TotalFollowers from './components/organisms/totalFollowers';

function App() {
  return (
    <div className='w-full h-full bg-white dark:bg-veryDarkBlue transition duration-400 flex justify-center font-inter'>
      <div className='w-10/12 max-w-screen-2xl'>
        <Header/>
        <TotalFollowers/>
        <Overview/>
      </div>
    </div>
  );
}

export default App;
