import initialState from "../store/initialState.js";


const reducer = (_state = initialState, action) => {
    console.log(action);


    switch (action.type) {
        case 'AGREGAR':
            console.log("agregar");
            return '';
        default:
            return { ...state };

    }
}


export default reducer;