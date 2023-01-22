//action types
export const ADD_HABIT = 'ADD_HABIT';
export const SHOW_HABIT = 'SHOW_HABIT';

//action creators
export function addHabit(habit, date) {
    return {
        type: ADD_HABIT,
        habit,
        date
    }
}

export function showHabit(){
    return{
        typr: SHOW_HABIT,
    }
}