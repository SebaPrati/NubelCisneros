import './App.css';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Container from './components/Container';
import { createStore } from 'redux';
import initialState from './store/initialState';

const reducer = (state = initialState, action) => {

  console.log(state, action);

  switch (action.type) {

    case "DATOS_PRONOSTICO":
      //nuevo [] con los datos que queremos
      const tempMin = action.payload.list[0].temp.min;
      console.log("ACA", action.payload.list[0].temp.min);

      return {
        ...state,
        forecast: action.payload,
        ciudad: action.ciudad,
        tempMin: tempMin
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