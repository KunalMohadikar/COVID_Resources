import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CovidState } from "./covid.state";

export const COVID_STATE_NAME = 'covid';

const getCovidState = createFeatureSelector<CovidState>(COVID_STATE_NAME);

export const getCasesTimeSeries = createSelector(getCovidState, state => {
    return state.cases_time_series;
});

export const getStateWise = createSelector(getCovidState, state => {
    return state.statewise;
});

export const getLatestCase = createSelector(getCovidState, state => {
    if(state.cases_time_series.length!=0){
        return state.cases_time_series[state.cases_time_series.length-1];
    }
    return null;
});




