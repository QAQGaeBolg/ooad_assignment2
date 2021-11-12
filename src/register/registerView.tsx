import React from "react";
import { Navigate } from "react-router";
import RegisterController from "./registerController";
import RegisterModel from "./registerModel";

export default class RegisterView extends React.Component{
    constructor(props: any) {
        super(props)
    }

    public async renderView(registerModel: RegisterModel) {
        if (registerModel.getRegisterState().registerSuccess) {
            alert("Register Success!")
            await registerModel.insertAccount()
            return <Navigate to = "/login"></Navigate>
        } else {
            return (
                <div className = "register">
                    <form className = "register-form">
                        <label className = "register-title" >create your own account</label>
                        {this.renderUsername(registerModel)}
                        {this.renderPassword(registerModel)}
                        {this.renderComfirm(registerModel)}
                        {this.renderRegisterButton()}
                        {this.renderReturnLink()}
                    </form>
                </div>
            )            
        }

    }

    private renderUsername(registerModel: RegisterModel) {
        return (
            <div className = "input-username">
                <input type = "text" id = "register-username" name = "register-username" placeholder = "Username:"/>
                {registerModel.getRegisterState().emptyUsername === false ? <></> : (
                    <label>&nbsp;username shouldn't be none</label>
                )}
            </div>
        )
    }

    private renderPassword(registerModel: RegisterModel) {
        return (
            <div className = "input-password">
                <input type = "password" id = "register-password" name = "register-password" placeholder = "Password:"/>
                {registerModel.getRegisterState().emptyPassword === false ? <></> : (
                    <label>&nbsp;password shouldn't be none</label>
                )}
            </div>            
        )
    }

    private renderComfirm(registerModel: RegisterModel) {
        return (
            <div className = "input-comfirm">
                <input type = "password" id = "register-comfirm" name = "register-password" placeholder = "Comfirm password:"/>
                {registerModel.getRegisterState().differentPassword === false ? <></> : (
                    <label>&nbsp;two passwords are not same</label>
                )}
            </div>
        )
    }

    private renderRegisterButton() {
        return (
            <div>
                <button type = "button" className = "register-button" onClick = {RegisterController.register}>Register</button>
            </div>
        )
    }

    private renderReturnLink() {
        return (
            <div>
                <a href = "/" target = "_self" rel = "prev">Return back to login page</a>
            </div>
        )
    }
}