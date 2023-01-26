import { ADD_HABIT, HABIT_DONE, HABIT_NOTDONE, DELETE_HABIT } from '../actions';

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
                    habit: [...state.allHabit.habit, [action.habit, action.date, [-1,-1,-1,-1,-1,-1,-1]]]
                }
            }
        case HABIT_DONE:
            {
                const size = state.allHabit.habit.length;
                for(let i=0; i< size; i++){
                    if(action.habit == state.allHabit.habit[i][0]){
                        console.log('executed')
                        state.allHabit.habit[i][2][0] = 1;  
                    }
                }
                return state;
            }
        case HABIT_NOTDONE:
            {
                const size = state.allHabit.habit.length;
                for(let i=0; i< size; i++){
                    if(action.habit == state.allHabit.habit[i][0]){
                        console.log('executed')
                        state.allHabit.habit[i][2][0] = 0;  
                    }
                }
                return state;
            }
        case DELETE_HABIT:
            {
                console.log("sf");
                const result = state.allHabit.habit.filter(item => (item[0] !== action.habit));
                state.allHabit.habit = result;
                return state;
            }
        default:
            return state;
    }
}