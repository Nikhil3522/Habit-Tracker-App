import { ADD_HABIT, SHOW_HABIT } from '../actions';

const initialHabitsState = {
    allHabit: {
        habit: []
    },
    // habitTracker: [],
}
export default  function habits (state = initialHabitsState, action){
    console.log("Reducer", state);
    switch (action.type) {
        case ADD_HABIT:
            return {
                ...state,
                allHabit: {
                    habit: [...state.allHabit.habit, [action.habit, action.date, [0,0,0,0,0,0,0]]]
                //    habit: {...state.allHabit.habit, title : action.habit,
                //    createdAt: action.date}
                }
                // allHabit: [ ...state.allHabit, action.habit]
            }
        case SHOW_HABIT:
            return {
                a:"sfda"
            };
        default:
            return state;
    }
}