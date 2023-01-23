import { useParams } from "react-router-dom";
import { store } from "../index";
import { useState, useEffect } from "react";

function View(props) {
    let {name} = useParams();

    const [habitList, setHabitList] = useState();
    useEffect(() => {
        setHabitList(store.getState().allHabit.habit)
    },[]);
    return (
        <div  className="App">
            <h1>Track your habit</h1>
            {habitList ? habitList.map((item, index) => (
                item[0] === name ? (
                    <div className="habitViewContainer" key={index}>
                        <h1>{name}</h1>
                        <div className="dayblockContainer">
                            {item[2].map((day, i) => (
                                <div 
                                    style={{backgroundColor:day == 0?"red":"green"}}
                                    className="dayblock" 
                                    key={i}
                                >
                                    {console.log("sfd",day)}
                                </div>
                            ))}
                        </div>
                        <div>
                            Created at: {item[1]}
                            <div>
                            </div>
                        </div>
                    </div>
                ) : null
            )): null}
        </div>
    )
}

export default View;