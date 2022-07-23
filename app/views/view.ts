import { Negotiations } from "../models/negotiations";

export abstract class View<T> {

    protected element: HTMLElement;

    constructor(selector: string){
        this.element = document.querySelector(selector);
    }

    protected abstract template(resource: T): string;


    update(resource: T): void {
        this.element.innerHTML = this.template(resource)
    }
}