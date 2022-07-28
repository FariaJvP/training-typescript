import { Comparable } from "../interfaces/comparable.js";
import { Negotiation } from "./negotiation.js";

export class Negotiations implements Comparable<Negotiations> {
    
    private negotiationsList: Array<Negotiation> = [];

    public addNegotiation(negotiation: Negotiation){
        this.negotiationsList.push(negotiation);
    }

    public returnNegotiationsList(): ReadonlyArray<Negotiation> {
        return this.negotiationsList;
    }

    public isEqual(negotiations: Negotiations): boolean {
        return JSON.stringify(this.negotiationsList) === JSON.stringify(negotiations.negotiationsList);
    }

}