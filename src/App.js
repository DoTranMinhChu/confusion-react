import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { DISHES } from './shared/dish';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main></Main>
        </div>
      </BrowserRouter>


    );
  }

}

export default App;
