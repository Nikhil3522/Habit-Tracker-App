// import './App.css';

function Habit(props) {
  return (
    <div className="habit">
        <div>
            <h2>{props.title}</h2>
            <div className="subContainer">
                <h5>Created at: {props.date}</h5>
                <div className="previousDayContainer">
                    {/* day circle */}
                    <div className="previousDayTrack"></div>
                    <div className="previousDayTrack"></div>
                    <div className="previousDayTrack"></div>
                    <div className="previousDayTrack"></div>
                    <div className="previousDayTrack"></div>
                    <div className="previousDayTrack"></div>
                    <div className="previousDayTrack"></div>

                </div>
            </div>
        </div>

        <div className="btnContainer">
            <div className="doneBtn">
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
