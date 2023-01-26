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

  const [habitList, setHabitList] = useState();
  const [deleteHabitDependency, setDeleteHabitDependency] = useState(false);

  useEffect(() => {
    setHabitList(store.getState().allHabit.habit)
  },[deleteHabitDependency]);

  const deleteHabitFunction = (name) => {
    dispatch(deleteHabit(name));
    setDeleteHabitDependency(!deleteHabitDependency);
  }

  return (
    <div className="App">
      <h1>All Habit</h1>
      {habitList ? habitList.map((item, index )=> (
        console.log("array", item[2]),
        <Habit 
          title={item[0]} 
          handler = {deleteHabitFunction}
          date={item[1]} 
          array={item[2]} 
          key={index}
        />
      )) : null}
      

      <div className='AddBtnDiv'>
        <FcPlus className='AddBtn' onClick={() => navigate("/addhabit")} />
      </div>
    </div>
  );
}

export default App;
