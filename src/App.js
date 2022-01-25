import React from 'react';
import Clock from './Clock';
import Welcome from './Welcome';

const App = () => {
  return (
    <>
    <div className='app'>
    <Welcome />
    <Clock />
    </div>
    </>
  );
}

export default App;
