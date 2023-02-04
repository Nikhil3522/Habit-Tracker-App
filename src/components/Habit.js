import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import doneImg from "../image/done.png";
import notdoneImg from "../image/notdone.png"
import { done, notDone, deleteHabit, afterOneDay } from "../actions";
import threeDot from "../image/threeDot.png"

function Habit(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [threeDotDisplay, setThreeDotDisplay] = useState(false);
    const [d, setD] = useState(true);

    useEffect(()=>{

        // Date of habit created
        var habitCreatedDate = props.date[0];
        habitCreatedDate += props.date[1];

        // Today date
        let newDate = new Date()
        let todayDate = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let day = todayDate+'/'+month; //today date format in 

        let difference = todayDate-habitCreatedDate;

        if(difference != 0 && day != props.updated){ 
            dispatch(afterOneDay(props.title, day))
        }

    }, [])
  return (
    <div className="habit">
        <div>
            <h2>{props.title}</h2> 
            <div className="subContainer">
                {/* Display the date of created of habit */}
                <h5>Created at: {props.date}</h5> 
                <div className="previousDayContainer">
                    {/* This is logic that is responsible to show the correct status of daye. If the value is 0 then display 
                    red status which means not done, if 1 then display grren statue which means done, if -1 then display gray status which
                    means unmarked.*/}
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
                <img src={doneImg} width="40px" style={{marginTop: "20px", marginLeft:"10px"}}/>
            </div>
            <div className="notdoneBtn" onClick={() => dispatch(notDone(props.title), setD(!d))}>
                {/* red button */}
                <img src={notdoneImg} width="30px" style={{marginTop: "20px", marginLeft:"20px"}}/>
            </div>
        </div>
        <div className="options" style={{display:threeDotDisplay?"block":"none"}}>
            {/* <div 
                className="optionItem"
            >
                Update
            </div> */}
            {/* This is Delete Button */}
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
            {/* This is View button */}
            <div 
                className="optionItem" 
                onClick={() => navigate(`/view/${props.title}`)}
            >
                View
            </div>
        </div>
        {/* This is threedot logo div */}
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
