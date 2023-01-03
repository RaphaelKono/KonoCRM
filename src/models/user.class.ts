import { EmailValidator } from "@angular/forms";

export class User {
    title: string;
    firstName: string;
    lastName: string;
    birthDate: any;
    street: string;
    streetNo: number;
    postcode: number;
    city: string;
    telephone: number;
    email: EmailValidator;

    constructor(obj?: any){
        this.title = obj ? obj.title : '';
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

    public toJson() {
        return {
            title: this.title,
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            street: this.street,
            streetNo: this.streetNo,
            postcode: this.postcode,
            city: this.city,
            telephone: this.telephone,
            email: this.email
        }
    }
}