import { View } from "./view.js";
export class MessageView extends View {
    template(info) {
        return `
            <p class="alert alert-info">${info}</p>
        `;
    }
}
