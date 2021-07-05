import './App.css';
import './components/style.css'
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';





function App() {
  return (

    // <Provider>
    <div className="App">
      <Navbar/>
      <SearchBox/>
      </div>
    //  </Provider>
  );

}

export default App;
