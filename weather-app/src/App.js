import './App.css';
import { Provider } from 'react-redux'; 
import Navbar from './components/Navbar.js';
import Container from './components/Container.js';
import store from './store/store';


function App() {

  return (

    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Container />
      </div>
    </Provider>
  );

}

export default App;



