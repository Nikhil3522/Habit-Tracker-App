// import './App.css';

function Habit() {
  return (
    <div className="habit">
        <div>
            <h2>Walking daily target 15000 step step sep</h2>
            <div className="subContainer">
                <h5>Created at: 12/01/2023</h5>
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
