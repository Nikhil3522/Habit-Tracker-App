import './App.css';
import Habit from "./components/Habit";
import { FcPlus } from 'react-icons/fc'
// FcPlus

function App() {
  return (
    <div className="App">
      <h1>All Habit</h1>
      <Habit />
      
      {/* <Habit />
      <Habit />
      <Habit />
      <Habit />
      <Habit />
      <Habit />
      <Habit />
      <Habit />
      <Habit />
      <Habit /> */}

      <div className='AddBtnDiv'>
        <FcPlus className='AddBtn' />

      </div>
    </div>
  );
}

export default App;
