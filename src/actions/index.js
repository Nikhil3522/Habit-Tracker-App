//action types
export const ADD_HABIT = 'ADD_HABIT';
export const HABIT_DONE = 'HABIT_DONE';
export const HABIT_NOTDONE = 'HABIT_NOTDONE';
export const DELETE_HABIT = 'DELETE_HABIT';


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

export function notDone(habit){
    return{
        type: HABIT_NOTDONE,
        habit,
    }
}

export function deleteHabit(habit){
    return{
        type: DELETE_HABIT,
        habit,
    }
}