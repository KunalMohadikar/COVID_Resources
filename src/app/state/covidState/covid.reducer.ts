import { Action, createReducer, on } from "@ngrx/store";
import { updateCovidState } from "./covid.actions";
import { CovidState, initialState } from "./covid.state";


const _covidReducer = createReducer(
    initialState,
    on(updateCovidState, (state, action) => {
        console.log('onUpdateCovidState');
        console.log(action);
        return {
            ...state,
            cases_time_series: action.cases_time_series,
            statewise: action.statewise,
        }
    })
)

export function covidReducer(state: CovidState | undefined, action: Action){
    return _covidReducer(state,action);
}