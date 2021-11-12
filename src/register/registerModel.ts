import { Connection, createConnection } from "typeorm"
import { Account } from "../database/account"
import RegisterController from "./registerController"
import * as fs from "fs-extra"

export interface RegisterProps {

}

export interface RegisterState {
    emptyUsername: boolean,
    emptyPassword: boolean,
    differentPassword: boolean,
    registerSuccess: boolean
}

export default class RegisterModel {
    private registerProps: RegisterProps
    private registerState: RegisterState

    constructor() {
        this.registerProps = {}
        this.registerState = {
            emptyUsername: false,
            emptyPassword: false,
            differentPassword: false,
            registerSuccess: false
        }
    }

    public resetRegisterState() {
        this.registerState = {
            emptyUsername: false,
            emptyPassword: false,
            differentPassword: false,
            registerSuccess: false
        }
    }

    public getRegisterProps() {
        return this.registerProps
    }

    public getRegisterState() {
        return this.registerState
    }

    public setEmptyUsername(value: boolean) {
        this.registerState.emptyUsername = value
    }

    public setEmptyPassword(value: boolean) {
        this.registerState.emptyPassword = value
    }

    public setDifferentPassword(value: boolean) {
        this.registerState.differentPassword = value
    }

    public setRegisterSuccess(value: boolean) {
        this.registerState.registerSuccess = value
    }

    public async insertAccount() {
        const connection: Connection =  await createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "zyf",
            password: "#DJzyf1528",
            database: "hotel"
        })
        let insertResult =  await connection.createQueryBuilder()
        .insert()
        .into(Account)
        .values({ username: RegisterController.account.username, password: RegisterController.account.password})
        .execute()
        if (insertResult !== null) {
            fs.writeFileSync("../login/username.txt", `${RegisterController.account.username}\n`)
        }
    }
}