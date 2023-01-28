import { ADD_HABIT, HABIT_DONE, HABIT_NOTDONE, DELETE_HABIT, MODIFY_STATUS_DONE, MODIFY_STATUS_NOTDONE } from '../actions';

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
                        state.allHabit.habit[i][2][6] = 1;  
                    }
                }
                return state;
            }
        case HABIT_NOTDONE:
            {
                const size = state.allHabit.habit.length;
                for(let i=0; i< size; i++){
                    if(action.habit == state.allHabit.habit[i][0]){
                        state.allHabit.habit[i][2][6] = 0;  
                    }
                }
                return state;
            }
        case DELETE_HABIT:
            {
                const result = state.allHabit.habit.filter(item => (item[0] !== action.habit));
                state.allHabit.habit = result;
                return state;
            }
        case MODIFY_STATUS_DONE:
            {
                const size = state.allHabit.habit.length;
                for(let i=0; i< size; i++){
                    if(action.habit == state.allHabit.habit[i][0]){
                        state.allHabit.habit[i][2][action.index] = 1;  
                    }
                }
                return state;
            }
            case MODIFY_STATUS_NOTDONE:
                {
                    const size = state.allHabit.habit.length;
                    for(let i=0; i< size; i++){
                        if(action.habit == state.allHabit.habit[i][0]){
                            state.allHabit.habit[i][2][action.index] = 0;  
                        }
                    }
                    return state;
                }
        default:
            return state;
    }
}