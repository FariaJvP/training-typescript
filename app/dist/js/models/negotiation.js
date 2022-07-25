export class Negotiation {
    constructor(date, quantity, value) {
        this._date = date;
        this._quantity = quantity;
        this._value = value;
    }
    get getDate() {
        return this._date;
    }
    get getQuantity() {
        return this._quantity;
    }
    get getValue() {
        return this._value;
    }
}
