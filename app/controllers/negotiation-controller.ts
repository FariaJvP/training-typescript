import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationView } from "../views/negotiation-view.js";

export class NegotiationController {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new Negotiations();
    private negotiationsView = new NegotiationView("#negotiationsView");
    private messageView = new MessageView("#viewMessage");
    
    constructor(){
        this.inputDate = document.querySelector("#date")
        this.inputQuantity = document.querySelector("#quantity")
        this.inputValue = document.querySelector("#value")
        this.negotiationsView.update(this.negotiations);
    }
    
    toNegotiation() {

        const regex = /-/g;
        const date = new Date(this.inputDate.value.replace(regex, ','))

        const negotiation = new Negotiation(
            date, 
            parseInt(this.inputQuantity.value), 
            parseFloat(this.inputValue.value)
        );    
        this.negotiations.addNegotiation(negotiation);
        this.negotiationsView.update(this.negotiations);
        this.messageView.update("negotiation added")
    }

    clearForm(): void {
        document.querySelector('form').reset()
        this.inputDate.focus();
    }
}