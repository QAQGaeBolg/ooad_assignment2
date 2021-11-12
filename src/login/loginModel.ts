import { Connection, createConnection } from "typeorm"
import { Account } from "../database/account"

export interface LoginProps {
    usernamePlaceholder: string
}

export interface LoginState {
    emptyUsername: boolean
    emptyPassword: boolean
    wrongPassword: boolean
    loginSuccess: boolean
}

export class LoginModel {
    private loginProps: LoginProps
    private loginState: LoginState

    constructor(usernamePlaceholder: string) {
        this.loginProps = {
            usernamePlaceholder: usernamePlaceholder
        }
        this.loginState = {
            emptyUsername: false,
            emptyPassword: false,
            wrongPassword: false,
            loginSuccess: false
        }
    }

    public resetState() {
        this.loginState = {
            emptyUsername: false,
            emptyPassword: false,
            wrongPassword: false,
            loginSuccess: false
        }
    }

    public getLoginProps() {
        return this.loginProps
    }

    public getLoginState() {
        return this.loginState
    }

    public setEmptyUsername(value: boolean) {
        this.loginState.emptyUsername = value
    }

    public setEmptyPassword(value: boolean) {
        this.loginState.emptyPassword = value
    }

    public setWrongPassword(value: boolean) {
        this.loginState.wrongPassword = value
    }

    public setLoginSuccess(value: boolean) {
        this.loginState.loginSuccess = value
    }

    public async testLogin(username: string, password: string) {
        const connection: Connection = await createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "zyf",
            password: "#DJzyf1528",
            database: "hotel"
        })
        if (connection === null) {
            alert("connection is null")
        } else {
            let result = await connection.getRepository(Account).findOne({
                username: username
            })
            connection.close()
            if (result === undefined || result.password !== password) {
                this.setWrongPassword(true)
            } else {
                this.setLoginSuccess(true)
            }        
        }
    }
}