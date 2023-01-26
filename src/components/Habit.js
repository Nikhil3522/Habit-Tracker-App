import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { done, notDone, deleteHabit } from "../actions";
import threeDot from "../image/threeDot.png"

function Habit(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [threeDotDisplay, setThreeDotDisplay] = useState(false);
    const [d, setD] = useState(true);

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
            <div className="doneBtn" onClick={() => dispatch(done(props.title), setD(!d))}>
                {/* green button */}
            </div>
            <div className="notdoneBtn" onClick={() => dispatch(notDone(props.title), setD(!d))}>
                {/* red button */}
            </div>
        </div>
        <div className="options" style={{display:threeDotDisplay?"block":"none"}}>
            <div 
                className="optionItem"
            >
                Update
            </div>
            <div 
                className="optionItem"
                onClick={
                    () => {
                        // dispatch(deleteHabit(props.title),
                        // setThreeDotDisplay(false))
                        props.handler(props.title)
                        setThreeDotDisplay(false)
                    }
                }
            >
                Delete
            </div>
            <div 
                className="optionItem" 
                onClick={() => navigate(`/view/${props.title}`)}
            >
                View
            </div>
        </div>
        <div>
            <img 
                className="threeDotLogo" 
                src={threeDot} 
                width={"20px"}
                onClick={() => {setThreeDotDisplay(!threeDotDisplay)}}
            />
        </div>
    </div>
  );
}

export default Habit;
