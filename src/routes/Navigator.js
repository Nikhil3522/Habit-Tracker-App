import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/App";
import AddHabit from "../components/AddHabit";
import View from "../components/View";

const Navigator = () => {

    // Route component
    return (
        <BrowserRouter basename="/Habit-Tracker-App">
            <Routes>
                <Route
                    path="/" element={ <App /> }
                />
                <Route
                    path="/addhabit" element={ <AddHabit /> }
                />
                <Route
                    path="/view/:name" element={ <View /> }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigator;