import { Negotiation } from "../models/negotiation.js";
<<<<<<< HEAD
=======
import { Negotiations } from "../models/negotiations.js";
import { NegotiationView } from "../views/negotiation-view.js";
>>>>>>> feat/negotiations-table

export class NegotiationController {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
<<<<<<< HEAD
=======
    private negotiations = new Negotiations();
    private negotiationsView = new NegotiationView("#negotiationsView");;
>>>>>>> feat/negotiations-table
    
    constructor(){
        this.inputDate = document.querySelector("#date")
        this.inputQuantity = document.querySelector("#quantity")
        this.inputValue = document.querySelector("#value")
<<<<<<< HEAD
=======
        this.negotiationsView.update(this.negotiations);
>>>>>>> feat/negotiations-table
    }
    
    toNegotiation() {

        const regex = /-/g;
        const date = new Date(this.inputDate.value.replace(regex, ','))

        const negotiation = new Negotiation(
            date, 
            parseInt(this.inputQuantity.value), 
            parseFloat(this.inputValue.value)
<<<<<<< HEAD
        );     
=======
        );    
        this.negotiations.addNegotiation(negotiation);
        this.negotiationsView.update(this.negotiations);
>>>>>>> feat/negotiations-table
    }

    clearForm(): void {
        document.querySelector('form').reset()
        this.inputDate.focus();
    }
}