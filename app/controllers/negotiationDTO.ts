import { Negotiation } from "../models/negotiation.js";
import { WorkingDay } from "../enums/workingDay.js";

export class NegotiationDTO {

    private inputDate: HTMLInputElement; 
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private parsedDate: Date;
    private parsedQuantity: number;
    private parsedValue: number;
    
    constructor(){
        this.inputDate = document.querySelector("#date") as HTMLInputElement
        this.inputQuantity = document.querySelector("#quantity") as HTMLInputElement
        this.inputValue = document.querySelector("#value") as HTMLInputElement
    }
    
    public isValidRequest(): boolean{
        this.parseFormRequest();
        return this.isWorkingDay();
    }

    private isWorkingDay(): boolean {
        return this.parsedDate.getDay() > WorkingDay.SUNDAY && this.parsedDate.getDay() < WorkingDay.SATURDAY;
    }

    private parseFormRequest(){
        const regex = /-/g;
        this.parsedDate = new Date(this.inputDate.value.replace(regex, ','))
        this.parsedQuantity = parseInt(this.inputQuantity.value)
        this.parsedValue = parseFloat(this.inputValue.value)
    }

    public get getParsedDate(): Date{
        return this.parsedDate;
    }

    public get getInputDate(): HTMLElement{
        return this.inputDate;
    }

    public get getParsedQuantity(): number{ 
        return this.parsedQuantity;
    }

    public get getParsedValue(): number {
        return this.parsedValue;
    }

    public convertToNegotiation(): Negotiation {
        return new Negotiation(this.parsedDate, this.parsedQuantity, this.parsedValue);
    }

}