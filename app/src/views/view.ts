import { Negotiations } from "../models/negotiations";

export abstract class View<T> {

    protected element: HTMLElement;

    constructor(selector: string){
        const element = document.querySelector(selector)
        if(element){
            this.element = element as HTMLElement;
        }
        else {
            throw Error(`Selector ${selector} does not exists, please check the element`)
        }
    }

    protected abstract template(resource: T): string;


    update(resource: T): void {
        this.element.innerHTML = this.template(resource)
    }
}