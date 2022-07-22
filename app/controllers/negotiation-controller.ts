export class NegotiationController {
    private date: HTMLInputElement;
    private quantity: HTMLInputElement;
    private value: HTMLInputElement;

    constructor(){
        this.date = document.querySelector("#date")
        this.quantity = document.querySelector("#quantity")
        this.value = document.querySelector("#value")
    }

    clearForm(): void {
        this.date.value ='';
        this.quantity.value ='';
        this.value.value ='';
        this.date.focus();
    }
}