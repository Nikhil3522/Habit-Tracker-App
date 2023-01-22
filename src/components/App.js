import '../App.css';
import Habit from "./Habit";
import { FcPlus } from 'react-icons/fc'
import {showHabit} from '../actions';
import { useDispatch } from "react-redux";
import { store } from "../index";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// FcPlus

function App(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [habitList, setHabitList] = useState();

  useEffect(() => {
    setHabitList(store.getState().allHabit.habit)
    // (console.log("sf",dispatch(showHabit())))
  },[]);

  return (
    <div className="App">
      <h1>All Habit</h1>
      {habitList ? habitList.map((item, index )=> (
        <Habit title={item[0]} date={item[1]} key={index}/>
      )) : null}
      

      <div className='AddBtnDiv'>
        <FcPlus className='AddBtn' onClick={() => navigate("/addhabit")} />
      </div>
    </div>
  );
}

export default App;
