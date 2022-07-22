export class Negotiation {
    private _date: Date;
    private _quantity: number;
    private _value: number;

    constructor(date: Date, quantity: number, value:number){
        this._date = date;
        this._quantity = quantity;
        this._value = value;
    }

    get date() {
        const data = new Date(this._date.getTime());
        return data;
    }
}