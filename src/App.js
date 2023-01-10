import React from 'react';
import { Navbar } from './components';
import { About, Header } from './containers';

import './App.scss';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
    </div>
  );
};

export default App;
