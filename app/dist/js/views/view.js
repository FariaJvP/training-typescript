export class View {
    constructor(selector) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Selector ${selector} does not exists, please check the element`);
        }
    }
    update(resource) {
        this.element.innerHTML = this.template(resource);
    }
}
