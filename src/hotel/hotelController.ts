import React from "react";
import HotelModel, { HotelProps, HotelState } from "./hotelModel";
import HotelView from "./hotelView";

export default class HotelController extends React.Component<HotelProps, HotelState> {
    public static hotelView: HotelView
    public static hotelModel: HotelModel

    constructor(props: HotelProps) {
        super(props)
        HotelController.hotelView = new HotelView({})
        HotelController.hotelModel = new HotelModel()
    }

    public render() {
        HotelController.hotelModel.selectAll()
        return HotelController.hotelView.renderView(HotelController.hotelModel)
    }

    public static insert() {
        this.hotelModel.setInsert(true)
    }

    public static select() {
        this.hotelModel.setSelect(true)
        this.hotelModel.selectQuery()
    }

    public static update() {
        this.hotelModel.setUpdate(true)
    }

    public static delete() {
        let hotelObj = document.getElementById("hotel-delete-button") as HTMLInputElement
        let parentTD: any = hotelObj.parentNode
        let parentTR = parentTD.parentNode
        let parentTbody = parentTR.parentNode
        parentTbody.removeChild(parentTR)
    }
}