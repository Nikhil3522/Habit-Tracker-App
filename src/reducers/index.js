import { 
        ADD_HABIT,
        HABIT_DONE,
        HABIT_NOTDONE,
        DELETE_HABIT,
        MODIFY_STATUS_DONE,
        MODIFY_STATUS_NOTDONE,
        AFTER_ONE_DAY,
        MODIFY_STATUS_UNMARK
    } from '../actions';

const getLocalData = () => {
    let localHabitData = localStorage.getItem("HabitStore");
    if(localHabitData === []){
        return [];
    }else{
        return JSON.parse(localHabitData);
    }
}

const initialHabitsState = {
    allHabit: {
        habit: getLocalData()
    },
    // habitTracker: [],
}
export default  function habits (state = initialHabitsState, action){
    console.log("Reducer", state);
    switch (action.type) {
        case ADD_HABIT:
            console.log("sdf", state);
            const size = (state.allHabit.habit===null ? 0 : state.allHabit.habit.length);
            for(let i=0; i< size; i++){
                if(action.habit == state.allHabit.habit[i][0]){
                    return state;
                }
            }
            var tempArr;
            state.allHabit.habit != null ?
             tempArr = [...state.allHabit.habit, [action.habit, action.date, [-1,-1,-1,-1,-1,-1,-1], action.updated]] :
              tempArr = [[action.habit, action.date, [-1,-1,-1,-1,-1,-1,-1], action.updated]];

            console.log("abc", tempArr);
            return {
                ...state,
                allHabit: {
                    habit: [...tempArr]
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
        case MODIFY_STATUS_UNMARK:
            {
                const size = state.allHabit.habit.length;
                for(let i=0; i< size; i++){
                    if(action.habit == state.allHabit.habit[i][0]){
                        state.allHabit.habit[i][2][action.index] = -1;  
                    }
                }
                return state;
            }
        case AFTER_ONE_DAY:
            {
                const size = state.allHabit.habit.length;
                for(let i=0; i< size; i++){
                    if(action.habit == state.allHabit.habit[i][0]){
                        var tempArr = state.allHabit.habit[i][2];
                        tempArr.shift();
                        tempArr[6] = -1;
                        state.allHabit.habit[i][2] = tempArr;
                        state.allHabit.habit[i][3] = action.updated;
                    }
                }
                return state;
            }
        default:
            return state;
    }
}