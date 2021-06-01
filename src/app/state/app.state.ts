import { covidReducer } from "./covidState/covid.reducer";
import { CovidState } from "./covidState/covid.state";


export interface AppState{
    covid: CovidState
}

export const appReducer = {
    covid: covidReducer
}