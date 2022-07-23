import { View } from "./view";

export class MessageView extends View {
    
    template(info: string): string{
        return `
            <p class="alert alert-info">${info}</p>
        `
    }

    update(info: string):void{
        this.element.innerHTML = this.template(info);
    }
}