import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { DISHES } from './shared/dish';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './redux/configureStore';
import { Provider } from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render() {
    return (
      <Provider store={configureStore}>
        <BrowserRouter>
          <div className="App">
            <Main></Main>
          </div>
        </BrowserRouter>
      </Provider>



    );
  }

}

export default App;
