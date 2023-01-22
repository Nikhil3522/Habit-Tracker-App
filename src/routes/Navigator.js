import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/App";
import AddHabit from "../components/AddHabit";

const Navigator = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/" element={ <App /> }
                />
                <Route
                    path="/addhabit" element={ <AddHabit /> }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigator;