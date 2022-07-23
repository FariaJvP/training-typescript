import { View } from "./view";

export class MessageView extends View<string> {
    
    protected template(info: string): string{
        return `
            <p class="alert alert-info">${info}</p>
        `
    }
}