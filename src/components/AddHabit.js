import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addHabit } from '../actions';
import '../App.css';

function AddHabit(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let day = date+'/'+month;

    return(
        <div className="App">
            <h1>Add Habit</h1>
            <div className='AddTaskContainer'>
                <input 
                    className='inputHabitField'
                    type="text" 
                    placeholder='Enter your habit here...' 
                    onChange={(e) => {setInputValue(e.target.value); e.target.value=''}}
                    value={inputValue}
                />
                <button 
                    onClick={() => (dispatch(addHabit(inputValue, day), navigate('/')))}
                    className='addButton'
                >Submit</button>
            </div>
        </div>
    )
}

export default AddHabit;