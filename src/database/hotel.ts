import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Hotel {
    @PrimaryColumn({
        name: "name",        
        type: "varchar",
        length: 50,
        charset: 'utf-8',
        nullable: false
    })
    name: string | undefined;

    @PrimaryColumn({
        name: "city",
        type: "varchar",
        length: 20,
        charset: "utf-8",
        nullable: false
    })
    city: string| undefined

    @PrimaryColumn({
        name: "district",
        type: "varchar",
        length: 50,
        charset: "uts-8",
        nullable: false
    })
    district: string | undefined

    @Column({
        name: "date",
        type:"varchar",
        length: 20,
        charset: "utf-8",
        nullable: false
    })
    date: string | undefined

    @Column({
        name: "earliest_check_in_time",
        type: "varchar",
        length: 10,
        charset: "utf-8",
        nullable: false
    })
    earliest_check_in_time: string | undefined

    @Column({
        name: "price",
        type: "numeric",
        nullable: false
    })
    price: number | undefined

    @PrimaryColumn({
        name: "room_type",
        type: "varchar",
        length: 30,
        charset: "utf-8",
        nullable: false
    })
    room_type: string | undefined
}