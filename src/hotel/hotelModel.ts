import { Connection, createConnection } from "typeorm"
import { Hotel } from "../database/hotel"

export interface HotelProps {
    selectDate: string
    selectRoomType: string
    updateHotel: string
    selectResult: Hotel[]
}

export interface HotelState {
    insert: boolean
    select: boolean
    update: boolean
}

export default class HotelModel {
    private hotelProps: HotelProps
    private hotelState: HotelState

    constructor() {
        this.hotelProps = {
            selectDate: "",
            selectRoomType: "",
            updateHotel: "",
            selectResult: new Array()
        }
        this.hotelState = {
            insert: false,
            select: false,
            update: false
        }
    }

    private async getConnection() {
        const connection: Connection =  await createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "zyf",
            password: "#DJzyf1528",
            database: "hotel"
        })
        return connection
    }

    public async selectAll() {
        let connection = await this.getConnection()
        let selectResult = connection.createQueryBuilder()
        .select("hotel")
        .from(Hotel, "hotel")
        .getMany()
        for (let i = 0; i < (await selectResult).length; i++) {
            let item = (await selectResult).pop()
            if (item !== undefined) {
                this.hotelProps.selectResult.push(item) 
            }
        }
    }

    public async selectQuery() {
        const dateObj = document.getElementById("select-date") as HTMLInputElement
        const date = dateObj.value
        const roomTypeObj = document.getElementById("select-room-type") as HTMLInputElement
        const roomType = roomTypeObj.value
        this.setSelectProps(date, roomType)
        let connection = await this.getConnection()
        let selectResult = connection.createQueryBuilder()
        .select("hotel")
        .from(Hotel, "hotel")
        .where("hotel.date = :date and hotel.room_type = :room_type", { date: date, room_type: roomType } )
        .getMany()
        for (let i = 0; i < (await selectResult).length; i++) {
            let item = (await selectResult).pop()
            if (item !== undefined) {
                this.hotelProps.selectResult.push(item) 
            }
        }
    }

    public resetHotelModel() {
        this.hotelProps = {
            selectDate: "",
            selectRoomType: "",
            updateHotel: "",
            selectResult: new Array()
        }
        this.hotelState = {
            insert: false,
            select: false,
            update: false
        }
    }

    public getHotelProps() {
        return this.hotelProps
    }

    public getHotelState() {
        return this.hotelState
    }

    public setInsert(value: boolean) {
        this.hotelState.insert = value
    }

    public setSelect(value: boolean) {
        this.hotelState.select = value
    }

    public setUpdate(value: boolean) {
        this.hotelState.update = value
    }

    public setSelectProps(selectDate: string, selectRoomType: string) {
        this.hotelProps.selectDate = selectDate
        this.hotelProps.selectRoomType = selectRoomType
    }
}