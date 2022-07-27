import { NegotiationInterface } from "../interfaces/negotiationInterface.js";
import { Negotiation } from "../models/negotiation.js";

export class NegotiationsAPI {
    
    public fetchNegotiations(): Promise<Array<Negotiation>>{
        return fetch('http://localhost:8080/dados')
        .then(response => response.json())
        .then((apiData: Array<NegotiationInterface>) => {
            return apiData.map(dataFromInput => {
                return new Negotiation(new Date(), dataFromInput.montante, dataFromInput.vezes);
            });
        });
    }
}

/*.forEach(negotiation => {
                    this.negotiations.addNegotiation(negotiation);
                    this.negotiationsView.update(this.negotiations);
                    this.messageView.update("negotiation api imported");
                })*/