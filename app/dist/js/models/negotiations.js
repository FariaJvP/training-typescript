export class Negotiations {
    constructor() {
        this.negotiationsList = [];
    }
    addNegotiation(negotiation) {
        this.negotiationsList.push(negotiation);
    }
    returnNegotiationsList() {
        return this.negotiationsList;
    }
}
