import React, { Component } from 'react';

import MainLayout from './layouts/PageLayout';
import Hero from './components/Hero';

class App extends Component {
  render = () => {
    return (
      <MainLayout>
        <Hero />
      </MainLayout>
    );
  };
}

export default App;
