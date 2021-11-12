import React from "react";
import LoginView from "./loginView"
import { LoginModel, LoginProps, LoginState } from "./loginModel";

export default class LoginController extends React.Component<LoginProps, LoginState> {
    public static loginView: LoginView
    public static loginModel: LoginModel

    constructor(props: LoginProps) {
        super(props)
        LoginController.loginModel = new LoginModel(props.usernamePlaceholder)
        LoginController.loginView = new LoginView({})
    }

    public static async logIn() {
        LoginController.loginModel.resetState()
        const usernameObj = document.getElementById("login-username") as HTMLInputElement
        const username: string = usernameObj.value
        const emptyUsername = username.length === 0 || username === ""
        LoginController.loginModel.setEmptyUsername(emptyUsername)
        const passwordObj = document.getElementById("login-password") as HTMLInputElement
        const password: string = passwordObj.value
        const emptyPassword = password.length === 0 || password === ""
        LoginController.loginModel.setEmptyPassword(emptyPassword)
        if (!emptyUsername && !emptyPassword) {
            this.loginModel.testLogin(username, password)
        }
    }

    public render() {
        return LoginController.loginView.renderView(LoginController.loginModel)
    }
}