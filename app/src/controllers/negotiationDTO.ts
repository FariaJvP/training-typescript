import { Negotiation } from "../models/negotiation.js";
import { WorkingDay } from "../enums/workingDay.js";
import { domInjector } from "../decorators/domInjector.js";

export class NegotiationDTO {

    @domInjector("#date")
    private inputDate: HTMLInputElement; 
    @domInjector("#quantity")
    private inputQuantity: HTMLInputElement;
    @domInjector("#value")
    private inputValue: HTMLInputElement;

    private parsedDate: Date;
    private parsedQuantity: number;
    private parsedValue: number;
    
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