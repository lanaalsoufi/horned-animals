import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Data from './components/data.json';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main Data ={Data} />
        <Footer />
      </div>
    )
  }
}

export default App;


