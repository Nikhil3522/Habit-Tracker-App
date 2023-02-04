import '../App.css';
import Habit from "./Habit";
import { FcPlus } from 'react-icons/fc'
import { useDispatch } from "react-redux";
import { store } from "../index";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { deleteHabit } from '../actions';
// FcPlus

function App(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [habitList, setHabitList] = useState(); //In this state I stroe all the habits.
  const [deleteHabitDependency, setDeleteHabitDependency] = useState(false); //This state is updated when we click on delete btn and after that UI is updated.

  // This useEffect store all the habit in "habitList" state from localstorage.
  useEffect(() => {
    setHabitList(store.getState().allHabit.habit)
  },[deleteHabitDependency]);

  // This useEffect store all the habit in localstorage.
  useEffect(() => {
    localStorage.setItem("HabitStore", JSON.stringify(habitList));
  }, [habitList]);

  // In this function we dispact the deleteHabit and pass the habit name.
  const deleteHabitFunction = (name) => {
    dispatch(deleteHabit(name));
    setDeleteHabitDependency(!deleteHabitDependency);
  }

  return (
    <div className="App">
      <h1>All Habit</h1>
      {habitList ? habitList.map((item, index )=> (
        // This is habit component
        <Habit 
          title={item[0]} 
          handler = {deleteHabitFunction}
          date={item[1]} 
          array={item[2]} 
          updated={item[3]}
          key={index}
        />
      )) : null}
      

      <div className='AddBtnDiv'>
        {/* THis is add button */}
        <FcPlus className='AddBtn' onClick={() => navigate("/addhabit")} />
      </div>
    </div>
  );
}

export default App;
