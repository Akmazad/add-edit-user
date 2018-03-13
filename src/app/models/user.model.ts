import {Address} from './address.model';

export class User {
    name : string;
    email: string;
    dateOfBirth: Date;
    address: Address;

    constructor(name: string, email: string, dateOfBirth: Date, address: Address) {
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
    }
}