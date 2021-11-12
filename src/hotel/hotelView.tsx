import React from "react";
import { Hotel } from "../database/hotel";
import HotelController from "./hotelController";
import HotelModel from "./hotelModel";

export default class HotelView extends React.Component {
    constructor(props: any) {
        super(props)
    }

    public renderView(hotelModel: HotelModel) {
        if (hotelModel.getHotelState().insert) {
            return (
                <div></div>
            )
        } else if (hotelModel.getHotelState().update){
            return (
                <div></div>
            )
        }else {
            return (
                <div>
                    <div>
                        <table className = "hotel-table">
                            <tr>
                                <th>Hotel Name</th>
                                <th>City</th>
                                <th>District</th>
                                <th>Date</th>
                                <th>Earliest check-in time</th>
                                <th>price</th>
                                <th>Room Type</th>
                                <th>Operation</th>
                            </tr>
                            <tbody id = "hotel-tbody">
                                <tr >
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <input type = "button" id = "hotel-delete-button" value = "Delete" onClick = {HotelController.delete}/>
                                    </td>
                                </tr>
                            </tbody>
                            {this.renderTable(hotelModel)}
                        </table>
                    </div>
                    <div>
                        <form>
                            <button type = "button" className = "hotel-insert" onClick = {HotelController.insert}>insert</button>
                            <label>
                                Date:
                                <input type = "date" id = "select-date"></input>
                            </label>
                            <label>
                                Room Type:
                                <select id = "select-room-type">
                                    <option value = "Standard Room">Standard Room</option>
                                    <option value = "Presidential Suite">Presidential Suite</option>
                                    <option value = "Family Room">Family Room</option>
                                    <option value = "King Bed Room">King Bed Room</option>
                                </select>
                            </label>
                            <button type = "button" className = "hotel-select" onClick = {HotelController.select}>select</button>
                        </form>
                    </div>                
                </div>
            )            
        }
    }

    private renderTable(hotelModel: HotelModel) {
        let selectResult = hotelModel.getHotelProps().selectResult
        for(let i = 0; i < selectResult.length; i++) {
            this.addRow(selectResult[i])
        }
    }

    private addRow(hotel: Hotel) {
        let tbodyObj: any = document.getElementById("hotel-tbody")
        let rowCount = tbodyObj.rows.length
        let cellCount = tbodyObj.rows[0].cells.length
        tbodyObj.style.display = ""
        let newRow = tbodyObj.insertRow(rowCount++)
        newRow.insertCell(0).innerHTML = hotel.name
        newRow.insertCell(1).innerHTML = hotel.city
        newRow.insertCell(2).innerHTML = hotel.district
        newRow.insertCell(3).innerHTML = hotel.date
        newRow.insertCell(4).innerHTML = hotel.earliest_check_in_time
        newRow.insertCell(5).innerHTML = hotel.price
        newRow.insertCell(6).innerHTML = hotel.room_type
        newRow.insertCell(7).innerHTML = tbodyObj.rows[0].cells[cellCount - 1].innerHTML
        tbodyObj.rows[0].style.display = "none"
    }
}