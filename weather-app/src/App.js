import './App.css';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
import UpperDashboard from './components/UpperDashboard';





function App() {
  return (

    // <Provider>
    <div className="App">
      <Navbar/>
      <SearchBox />
      {/* <UpperDashboard/> */}
      </div>
    //  </Provider>
  );

}

export default App;
