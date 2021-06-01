export interface DayInfo{
    dailyconfirmed: string;
    dailydeceased: string;
    dailyrecovered: string;
    date: string;
    dateymd: string;
    totalconfirmed: string;
    totaldeceased: string;
    totalrecovered: string;
}

export interface StateInfo{
    active: string;
    confirmed: string;
    deaths: string;
    deltaconfirmed: string;
    deltadeaths: string;
    deltarecovered: string;
    lastupdatedtime: string;
    migratedother: string;
    revcovered: string;
    state: string;
    statecode: string;
    statenotes: string;
}

export interface CovidState{
    cases_time_series: Array<DayInfo>,
    statewise: Array<StateInfo>,
}

export const initialState: CovidState = {
    cases_time_series: [],
    statewise: [],
}