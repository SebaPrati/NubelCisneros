import initialState from "../store/initialState";

const reducer = (state = initialState, action) => {
    console.log(action);
    
    
    switch (action.type) {
        case 'AGREGAR':
            console.log("agregar");

            return ''
        default:
            console.log('switch', action);
            return ''
    }
}


export default reducer;