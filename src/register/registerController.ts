import React from "react"
import { Account } from "../database/account";
import RegisterModel, { RegisterProps, RegisterState } from "./registerModel";
import RegisterView from "./registerView";

export default class RegisterController extends React.Component<RegisterProps, RegisterState> {
    public static registerView: RegisterView
    public static registerModel: RegisterModel
    public static account: Account

    constructor(props: RegisterProps) {
        super(props)
        RegisterController.registerView = new RegisterView({})
        RegisterController.registerModel = new RegisterModel()
    }

    public static register() {
        const usernameObj = document.getElementById("input-username") as HTMLInputElement
        const username = usernameObj.value
        const emptyUsername = username.length === 0 || username === ""
        RegisterController.registerModel.setEmptyUsername(emptyUsername)
        const passwordObj = document.getElementById("input-password") as HTMLInputElement
        const password = passwordObj.value
        const emptyPassword = password.length === 0 || password === ""
        RegisterController.registerModel.setEmptyPassword(emptyPassword)
        const comfirmObj = document.getElementById("input-comfirm") as HTMLInputElement
        const comfirm = comfirmObj.value
        const differentPassword = password !== comfirm
        RegisterController.registerModel.setDifferentPassword(differentPassword)
        const registerSuccess = !emptyUsername && !emptyPassword && differentPassword
        RegisterController.registerModel.setRegisterSuccess(registerSuccess)
        if (registerSuccess) {
            RegisterController.account = { username: username, password: password}
        }
    }

    public render() {
        return RegisterController.registerView.renderView(RegisterController.registerModel)
    }
}