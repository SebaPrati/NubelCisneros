const reducer = (action, ciudad) => {
    console.log(action);
    switch (action) {
        case 'AGREGAR':
            return { ciudad }
        default:
            return ''
    }
}


export default reducer;