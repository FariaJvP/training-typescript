import { ExecutionTime } from "../decorators/executionTime.js";
import { NegotiationInterface } from "../interfaces/negotiationInterface.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationView } from "../views/negotiation-view.js";
import { NegotiationDTO } from "./negotiationDTO.js";

export class NegotiationController {
    private negotiationDTO;
    private negotiations = new Negotiations();
    private negotiationsView = new NegotiationView("#negotiationsView");
    private messageView = new MessageView("#viewMessage");
    
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


    dataImport():void{
        fetch('http://localhost:8080/dados')
            .then(response => response.json())
            .then((apiData: Array<NegotiationInterface>) => {
                apiData.map(data => {
                    return new Negotiation(new Date(), data.vezes, data.montante)
                }).forEach(negotiation => {
                    this.negotiations.addNegotiation(negotiation);
                    this.negotiationsView.update(this.negotiations);
                    this.messageView.update("negotiation api imported");
                })
            });
    }

    private clearForm(): void {
        const form  = document.querySelector('form') as HTMLFormElement;
        form.reset();
        this.negotiationDTO.getInputDate.focus();
    }
}