import './App.css';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Container from './components/Container';
=======
import { Provider } from 'react-redux'; //
import Navbar from './components/Navbar.js';//
import Container from './components/Container.js';//
import UpperDashboard from './components/UpperDashboard.js';
>>>>>>> 5eaaaecabe770398110c310e5c68c0ad8769983b
import { createStore } from 'redux';
// import initialState from './store/initialState';
import store from './store/store';



<<<<<<< HEAD
  console.log(state, action);

  switch (action.type) {

    case "DATOS_PRONOSTICO":
      //nuevo [] con los datos que queremos

      return {
        ...state,
        forcast: state.forecast,
        ciudad: state.ciudad
      }

    default:

      return state;

  }

}
=======
function App() {
>>>>>>> 5eaaaecabe770398110c310e5c68c0ad8769983b


  return (

    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Container />
        {/* <UpperDashboard/> */ }
      </div>
    </Provider>
  );

}

export default App;

// const reducer = (state = initialState, action) => {

//   console.log(state, action);
//   console.log(forecast);

//   switch (action.type) {

//     case "DATOS_PRONOSTICO":
//       //nuevo [] con los datos que queremos

//       console.log(action.payload);
    
//       return {
//         ...state,
//         forecast: action.payload,
//         ciudad: action.ciudad


//       }
      
//     default:

//       return state;

//   }

// }

// const store = createStore(reducer);


