import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Data from './components/data.json';


class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      Data : Data
    }
  }

  displayFilteredImages = (newData) => {
    this.setState ({
      Data : newData
    })


  }
  

  render() {
    return (
      <div>
        <Header />
        <Main Data ={this.state.Data}
        
        displayFilteredImages = {this.displayFilteredImages}/>
        <Footer />
      </div>
    )
  }
}

export default App;


