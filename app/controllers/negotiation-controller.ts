import { Negotiation } from "../models/negotiation.js";

export class NegotiationController {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    
    constructor(){
        this.inputDate = document.querySelector("#date")
        this.inputQuantity = document.querySelector("#quantity")
        this.inputValue = document.querySelector("#value")
    }
    
    toNegotiation() {

        const regex = /-/g;
        const date = new Date(this.inputDate.value.replace(regex, ','))

        const negotiation = new Negotiation(
            date, 
            parseInt(this.inputQuantity.value), 
            parseFloat(this.inputValue.value)
        );     
    }

    clearForm(): void {
        document.querySelector('form').reset()
        this.inputDate.focus();
    }
}