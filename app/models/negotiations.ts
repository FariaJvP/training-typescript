import { Negotiation } from "./negotiation.js";

export class Negotiations {

    private negotiationsList: Array<Negotiation> = [];

    addNegotiation(negotiation: Negotiation){
        this.negotiationsList.push(negotiation);
    }

    returnNegotiationsList(): ReadonlyArray<Negotiation> {
        return this.negotiationsList;
    }

}