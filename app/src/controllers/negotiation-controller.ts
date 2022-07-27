import { ExecutionTime } from "../decorators/executionTime.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotiationsAPI } from "../service/NegotiationsAPI.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationView } from "../views/negotiation-view.js";
import { NegotiationDTO } from "./negotiationDTO.js";

export class NegotiationController {
    private negotiationDTO;
    private negotiations = new Negotiations();
    private negotiationsView = new NegotiationView("#negotiationsView");
    private messageView = new MessageView("#viewMessage");
    private negotiationsApi = new NegotiationsAPI();
    
    constructor(negotiationDTO: NegotiationDTO){
        this.negotiationDTO = negotiationDTO;
        this.negotiationsView.update(this.negotiations);
    }

    @ExecutionTime()
    public receiveFormRequest(): void{
        if(!this.negotiationDTO.isValidRequest()){
            this.messageView.update("Is not possible to add a negotiation whose date does not represent a working day")
        } else {
            const negotiation = this.negotiationDTO.convertToNegotiation();
            this.negotiations.addNegotiation(negotiation);
            this.negotiationsView.update(this.negotiations);
            this.messageView.update("negotiation added");
            this.clearForm();
        }
    }


    public dataImport():void {
        this.negotiationsApi.fetchNegotiations().then(apiData => {
            return apiData.forEach(negotiation => {
                this.negotiations.addNegotiation(negotiation);
                this.negotiationsView.update(this.negotiations);
                this.messageView.update("negotiation data imported from API");
            })
        });
    }

    private clearForm(): void {
        const form  = document.querySelector('form') as HTMLFormElement;
        form.reset();
        this.negotiationDTO.getInputDate.focus();
    }
}