import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addHabit } from '../actions';
import '../App.css';

function AddHabit(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState(null); // I store the value which is filled by user in this state.
    const [warning, setWarning] = useState(false); // This warning is responsive to display the warning message if user click on dubmit buyyon without write anything in input filed.

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    // if(month == 1){
    //     month = "Jan"
    // }else if(month == 2){
    //     month = "Feb"
    // }else if(month == 3){
    //     month = "Mar"
    // }else if(month == 4){
    //     month = "Apr"
    // }else if(month == 5){
    //     month = "May"
    // }else if(month == 6){
    //     month = "Jun"
    // }else if(month == 7){
    //     month = "Jul"
    // }else if(month == 8){
    //     month = "Aug"
    // }else if(month == 9){
    //     month = "Sep"
    // }else if(month == 10){
    //     month = "Oct"
    // }else if(month == 11){
    //     month = "Nov"
    // }else if(month == 12){
    //     month = "Dec"
    // }

    let day = date+'/'+month; //Format of our date

    // This useEffect is for hide the warning after 3 seconds.
    useEffect(() => {
        setTimeout(() => {
            setWarning(false);
        },3000)
    }, [warning])

    return(
        <div className="App">
            <h1>Add Habit</h1>
            <div className='AddTaskContainer'>
                {/* Input field */}
                <input 
                    className='inputHabitField'
                    type="text" 
                    placeholder='Enter your habit here...' 
                    onChange={(e) => {setInputValue(e.target.value); e.target.value=''}}
                    value={inputValue}
                />
                {/* Submit Button */}
                <button 
                    onClick={() => (
                        inputValue !== null ?
                            (dispatch(addHabit(inputValue, day, day), 
                            navigate('/'))) :
                            setWarning(true)
                        )
                    }
                    className='addButton'
                >Submit</button>
                {/* This is warning message */}
                <div style={{display:warning?"block":"none"}}>
                    <p style={{color:"red", textAlign:"center"}}>Please write something!</p>
                </div>
            </div>
         
        </div>
    )
}

export default AddHabit;