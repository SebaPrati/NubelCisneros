import initialState from "../store/initialState.js";


const reducer = (state = initialState, action) => {

    console.log(state, action);
    //   console.log(forecast);

    switch (action.type) {

        case "DATOS_PRONOSTICO":
    
            return {
                ...state,
                forecast: action.payload,
                ciudad: action.ciudad
            };
        case "CARGA_INICIAL":

            return {
                ...state,
                forecast: action.payload,
                ciudad: "Montevideo"
            };

        default:
            return state;

    }
}


export default reducer;