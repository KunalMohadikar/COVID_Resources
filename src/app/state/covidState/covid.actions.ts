import { createAction, props } from "@ngrx/store";
import { CovidState } from "./covid.state";

export const updateCovidState = createAction(
    'updateCovidState',
    props<CovidState>()
)

export const dummyAction = createAction(
    'dummyAction'
)