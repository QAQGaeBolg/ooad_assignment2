import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class Account {
    @PrimaryColumn({
        length: 20,
        charset: 'utf-8',
        type: "varchar",
        name: 'username',
        nullable: false
    })
    username: string | undefined
    @Column({
        length: 20,
        charset: 'utf-8',
        type: 'varchar',
        name: 'password',
        nullable: false
    })
    password: string | undefined
}

