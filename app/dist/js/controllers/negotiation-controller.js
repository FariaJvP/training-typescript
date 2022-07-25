import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationView } from "../views/negotiation-view.js";
export class NegotiationController {
    constructor(negotiationDTO) {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationView("#negotiationsView");
        this.messageView = new MessageView("#viewMessage");
        this.negotiationDTO = negotiationDTO;
        this.negotiationsView.update(this.negotiations);
    }
    receiveFormRequest() {
        if (!this.negotiationDTO.isValidRequest()) {
            this.messageView.update("Is not possible to add a negotiation whose date does not represent a working day");
        }
        else {
            const negotiation = this.negotiationDTO.convertToNegotiation();
            this.negotiations.addNegotiation(negotiation);
            this.negotiationsView.update(this.negotiations);
            this.messageView.update("negotiation added");
            this.clearForm();
        }
    }
    clearForm() {
        const form = document.querySelector('form');
        form.reset();
        this.negotiationDTO.getInputDate.focus();
    }
}
