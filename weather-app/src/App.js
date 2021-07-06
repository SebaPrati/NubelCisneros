import './App.css';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Container from './components/Container';
import UpperDashboard from './components/UpperDashboard';





function App() {
  return (

    // <Provider>
    <div className="App">
      <Navbar/>
      <Container />
      {/* <UpperDashboard/> */}
      </div>
    //  </Provider>
  );

}

export default App;
