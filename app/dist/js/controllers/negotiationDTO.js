import { Negotiation } from "../models/negotiation.js";
import { WorkingDay } from "../enums/workingDay.js";
export class NegotiationDTO {
    constructor() {
        this.inputDate = document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity");
        this.inputValue = document.querySelector("#value");
    }
    isValidRequest() {
        this.parseFormRequest();
        return this.isWorkingDay();
    }
    isWorkingDay() {
        return this.parsedDate.getDay() > WorkingDay.SUNDAY && this.parsedDate.getDay() < WorkingDay.SATURDAY;
    }
    parseFormRequest() {
        const regex = /-/g;
        this.parsedDate = new Date(this.inputDate.value.replace(regex, ','));
        this.parsedQuantity = parseInt(this.inputQuantity.value);
        this.parsedValue = parseFloat(this.inputValue.value);
    }
    get getParsedDate() {
        return this.parsedDate;
    }
    get getInputDate() {
        return this.inputDate;
    }
    get getParsedQuantity() {
        return this.parsedQuantity;
    }
    get getParsedValue() {
        return this.parsedValue;
    }
    convertToNegotiation() {
        return new Negotiation(this.parsedDate, this.parsedQuantity, this.parsedValue);
    }
}
