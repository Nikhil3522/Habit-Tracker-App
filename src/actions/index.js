//action types
export const ADD_HABIT = 'ADD_HABIT';
export const HABIT_DONE = 'HABIT_DONE';

//action creators
export function addHabit(habit, date) {
    return {
        type: ADD_HABIT,
        habit,
        date
    }
}

export function done(habit){
    return{
        type: HABIT_DONE,
        habit,
    }
}
