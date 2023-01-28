import { useNavigate, useParams } from "react-router-dom";
import { store } from "../index";
import { useState, useEffect } from "react";
import back from '../image/back.png';

function View(props) {
    let {name} = useParams();
    const navigate = useNavigate();
    const [habitList, setHabitList] = useState();

    useEffect(() => {
        setHabitList(store.getState().allHabit.habit);
    },[]);

    return (
        <div  className="App">
            <div style={{height:"30px", width:"50px", marginBottom:"-40px"}}>
                <img 
                    src={back} 
                    width="50px"
                    style={{cursor:"pointer"}}
                    onClick={() => {navigate('/')}}
                />
            </div>
            <h1>Track your habit</h1>
            {habitList ? habitList.map((item, index) => (
                item[0] === name ? (
                    <div className="habitViewContainer" key={index}>
                        <h1 style={{marginTop:"0px", color:"black"}}>{name}</h1>
                        <div className="dayblockContainer">
                            {item[2].map((day, i) => (
                                <div 
                                    style={{
                                        backgroundColor:day == -1?("white") : 
                                        (day == 0? "red" : "green")
                                    }}
                                    className="dayblock" 
                                    key={i}
                                >
                                </div>
                            ))}
                        </div>
                        <div style={{display:"flex", justifyContent:"space-between", marginTop:"10px"}}>
                            Created at: {item[1]}
                            <div className="totalContainer">
                                <div className="totalSubContainer">
                                    <div className="greyCircle"></div>
                                    <p style={{marginTop:"0px"}}>
                                        {(habitList[0][2].filter((curr) => (curr === -1))).length}
                                    </p>
                                </div>
                                <div className="totalSubContainer">
                                    <div className="greenCircle"></div>
                                    <p style={{marginTop:"0px"}}>
                                        {(habitList[0][2].filter((curr) => (curr === 1))).length}
                                    </p>
                                </div>
                                <div className="totalSubContainer">
                                    <div className="redCircle"></div>
                                    <p style={{marginTop:"0px"}}>
                                        {(habitList[0][2].filter((curr) => (curr === 0))).length}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            )): null}
        </div>
    )
}

export default View;