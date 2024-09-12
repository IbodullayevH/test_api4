import { Iusers } from "interfaces";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
// import { Iusers } from "@interfaces";

@Entity({ name: "Users" })
export class User implements Iusers {

    @PrimaryGeneratedColumn()
    id: number | undefined; // Avtomatik yaratiladigan id

    @Column({ type: 'varchar', length: 100 })
    fullName: string; // To'liq ism

    @Column({ type: 'varchar', unique: true })
    email: string; // Email, yagona (unique)

    @Column({ type: 'varchar' })
    password: string; // Parol

    @Column({ type: 'varchar', unique: true })
    userName: string; // Foydalanuvchi nomi, yagona (unique)

    @Column({ type: "bigint", nullable: true })
    phoneNumber: number; 

    constructor(fullName: string, email: string, password: string, userName: string, phoneNumber: number) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.phoneNumber = phoneNumber;
    }
}


