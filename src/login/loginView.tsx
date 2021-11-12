import React from "react"
import { Navigate } from "react-router-dom"
//import "./login.css"
import LoginController from "./loginController"
import { LoginModel } from "./loginModel"
import * as fs from "fs-extra"

export default class LoginView extends React.Component{
    constructor(props: any) {
        super(props)
    }

    public renderView(loginModel: LoginModel)  {
        if (loginModel.getLoginState().loginSuccess === true) {
            return <Navigate to = "/hotel"></Navigate>
        } else {
            return (
                <div className = "login">
                    <form className = "login-form">
                        <label className = "login-title">please login the system</label>
                        {this.renderUsername(loginModel)}
                        {this.renderPassword(loginModel)}
                        {this.renderLoginButton(loginModel)}
                        {this.renderRegisterLink()}
                    </form>   
                </div>
            )            
        }

    }

    private renderUsername(loginModel: LoginModel) {
        return (
            <div className = "input-username">
                <label>
                    Username:
                    <input type = "text" id = "login-username" name = "login-username" list="username-list" datatype="*"/>
                    <datalist id = "username-list">
                    </datalist>
                    {this.renderUsernameList()}
                </label>
                {loginModel.getLoginState().emptyUsername === false ? <></> : (
                    <label>&nbsp;username shouldn't be none</label>
                )}
            </div>
        )
    }

    private renderUsernameList() {
        let usernameList = document.getElementById("username-list") as HTMLElement
        usernameList.innerHTML = ""
        let content = fs.readFileSync("./username.txt", "utf8")
        let usernames = content.split("\n")
        for (let i = usernames.length - 1; i >= 0; i--) {
            if (usernames[i] === "") continue
            usernameList.innerHTML += `<option value = "${usernames[i]}">${usernames[i]}</option>`
        }
    }

    private renderPassword(loginModel: LoginModel) {
        return (
            <div className = "input-password">
                <input type = "password" id = "login-password" name = "login-password" placeholder = "Password: "/>
                {loginModel.getLoginState().emptyPassword === false ? <></> : (
                    <label>&nbsp;password shouldn't be none</label>
                )}
            </div>
        )
    }

    private renderLoginButton(loginModel: LoginModel) {
        return (
            <div>
                <button type = "button" className = "login-button" onClick = {LoginController.logIn}>Login</button>
                {loginModel.getLoginState().wrongPassword === false ? <></> : (
                    <label>&nbsp;the username or password is wrong</label>
                )}
            </div>
        )
    }

    private renderRegisterLink() {
        return (
            <div>
                <a href = "/register" target = "_self" rel = "next">Register a user</a>
            </div>
        )
    }
}