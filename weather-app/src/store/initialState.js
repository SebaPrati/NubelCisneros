
class initialState {
    history = [];
    forecast = [];
    tempMax = Number;
    promMax = Number;
    promMin = Number;
    ciudad = String;
    horaLocal = String;
    temperaturas = [];

    constructor() {
        this.forecast = [];
        this.tempMax = 0;
        this.promMax = 0;
        this.promMin = 0;
        this.ciudad = '';
        this.horaLocal = '';
    }
};
export default initialState;