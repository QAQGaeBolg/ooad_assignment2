import React from "react"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from "../login/loginController"
import Register from "../register/registerController"

export default class RouteList extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route path = "/" element = {<Login usernamePlaceholder = ""/>}></Route>
                        <Route path = "/register" element = {<Register/>}></Route>
                    </Routes>
                </Router>    
            </div>
        )
    }
}