export class MessageView {
    private element: HTMLElement;

    constructor(selector: string){
        this.element = document.querySelector(selector);
    }

    template(info: string): string{
        return `
            <p class="alert alert-info">${info}</p>
        `
    }

    update(info: string):void{
        this.element.innerHTML = this.template(info);
    }
}