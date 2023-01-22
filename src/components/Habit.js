import { useDispatch } from "react-redux";
import { done } from "../actions";

function Habit(props) {
    const dispatch = useDispatch();
  return (
    <div className="habit">
        <div>
            <h2>{props.title}</h2>
            <div className="subContainer">
                <h5>Created at: {props.date}</h5>
                <div className="previousDayContainer">
                    {props.array.map((item, index) => (
                        item === -1 ? 
                            (<div className="previousDayTrack" style={{backgroundColor:"grey"}} key={index}></div>) 
                        : item === 0 ?
                            (<div className="previousDayTrack" style={{backgroundColor:"red"}} key={index}></div>) 
                            :
                            (<div className="previousDayTrack" style={{backgroundColor:"green"}} key={index}></div>)    
                    ))}

                </div>
            </div>
        </div>

        <div className="btnContainer">
            <div className="doneBtn" onClick={() => dispatch(done(props.title))}>
                {/* green button */}
            </div>
            <div className="notdoneBtn">
                {/* red button */}
            </div>
        </div>
        {/* <div>
            :
        </div> */}
    </div>
  );
}

export default Habit;
