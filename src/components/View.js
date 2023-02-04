import { useNavigate, useParams } from "react-router-dom";
import { store } from "../index";
import { useState, useEffect } from "react";
import back from '../image/back.png';
import doneImg from '../image/done.png';
import notdoneImg from '../image/notdone.png';
import { useDispatch } from "react-redux";
import { modifyStatusDone, modifyStatusNotdone, modifyStatusUnmark } from "../actions";

function View(props) {
    const dispatch = useDispatch();
    let {name} = useParams();
    const navigate = useNavigate();
    const [habitList, setHabitList] = useState();
    const [modifyStatus, setModifyStatus] = useState(false);
    const [indexSelected, setIndexSelected] = useState();

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
                    <div className="habitViewContainer" key={index} style={{opacity:modifyStatus?"70%":"100%"}}>
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
                                        onClick={() => {
                                            setIndexSelected(i) 
                                            setModifyStatus(!modifyStatus)}
                                        }
                                    >
                                        {i===6 ? <h5 style={{color:"white", marginLeft:"auto", textAlign:"center", marginTop:"18px"}}>Today</h5>: null}
                                    </div>
                            ))}
                        </div>
                        <div style={{display:"flex", justifyContent:"space-between", marginTop:"10px"}}>
                            Created at: {item[1]}
                            <div className="totalContainer">
                                <div className="totalSubContainer">
                                    <div className="greyCircle"></div>
                                    <p style={{marginTop:"0px"}}>
                                    {(habitList.map((item) => (
                                            item[0] === name?
                                                item[2].filter((curr) => (curr === -1)).length : null))
                                        ) 
                                    }
                                    </p>
                                </div>
                                <div className="totalSubContainer">
                                    <div className="greenCircle"></div>
                                    <p style={{marginTop:"0px"}}>
                                    {(habitList.map((item) => (
                                            item[0] === name?
                                                item[2].filter((curr) => (curr === 1)).length : null))
                                        ) 
                                    }
                                    </p>
                                </div>
                                <div className="totalSubContainer">
                                    <div className="redCircle"></div>
                                    <p style={{marginTop:"0px"}}>
                                        {(habitList.map((item) => (
                                            item[0] === name?
                                                item[2].filter((curr) => (curr === 0)).length : null))) }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            )): null}
                <div style={{display:modifyStatus?"flex":"none"}} className="changeStatusOfHabit">
                    <div 
                        className="doneBtn"
                        onClick={() => {
                            dispatch(modifyStatusDone(name, indexSelected))
                            setModifyStatus(false)}
                        }
                    >
                        <img src={doneImg} width="40px" style={{marginTop: "20px", marginLeft:"10px"}}/>
                    </div>
                    <div 
                        className="unmarkedBtn"
                        onClick={() => {
                            dispatch(modifyStatusUnmark(name, indexSelected))
                            setModifyStatus(false)}
                        }
                    >
                    </div>
                    <div 
                        className="notdoneBtn"
                        onClick={() => {
                            dispatch(modifyStatusNotdone(name, indexSelected))
                            setModifyStatus(false)}
                        }
                    >
                        <img src={notdoneImg} width="30px" style={{marginTop: "20px", marginLeft:"20px"}}/>
                    </div>
                </div>
        </div>
    )
}

export default View;