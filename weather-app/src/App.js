import './App.css';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Container from './components/Container';
import UpperDashboard from './components/UpperDashboard';
import { createStore } from 'redux';
import initialState from './store/initialState';


const reducer = (state = initialState, action) => {

  console.log(state, action);

  switch (action.type) {

    case "AGREGAR":
      return { ...state, };

    case "DATOS_PRONOSTICO":
      //nuevo [] con los datos que queremos
      console.log(action.payload);
      return {
        ...state,
        forecast: action.payload
      
      }
      
    default:

      return state;

  }

}

const store = createStore(reducer);

function App() {
  return (

    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Container />
        {/* <UpperDashboard/> */}
      </div>
    </Provider>
  );

}

export default App;
