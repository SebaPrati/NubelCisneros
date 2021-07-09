import './App.css';
import { Provider } from 'react-redux'; //
import Navbar from './components/Navbar.js';//
import Container from './components/Container.js';//
import UpperDashboard from './components/UpperDashboard.js';
import { createStore } from 'redux';
// import initialState from './store/initialState';
import store from './store/store';



function App() {


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


