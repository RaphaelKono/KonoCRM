import { EmailValidator } from "@angular/forms";

export class User {
    firstName: string;
    lastName: string;
    birthDate: Date;
    street: string;
    streetNo: number;
    postcode: number;
    city: string;
    telephone: number;
    email: EmailValidator;

    constructor(obj?: any){
        this.firstName = obj ? obj.firstName: '';
        this.lastName = obj ? obj.lastName: '';
        this.birthDate = obj ? obj.birthDate: '';
        this.street = obj ? obj.street: '';
        this.streetNo = obj ? obj.streetNo: '';
        this.postcode = obj ? obj.postcode: '';
        this.city = obj ? obj.city: '';
        this.telephone = obj ? obj.telephone: '';
        this.email = obj ? obj.email: '';
    }
}