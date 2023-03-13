import { Route, Routes } from "react-router-dom"
import Login from "../pages/authencation/login"
const RouterAuthen = () => {
    return (
        <Routes>
            <Route>
                <Route path='/login' element={<Login />} />
            </Route>
        </Routes>
    )
}

export default RouterAuthen