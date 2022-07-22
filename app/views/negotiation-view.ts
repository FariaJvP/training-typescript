import { Negotiations } from "../models/negotiations.js";
export class NegotiationView {

    private element: HTMLElement;

    constructor(selector: string){
        this.element = document.querySelector(selector);
    }

    template(negotiations: Negotiations): string { 
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>QUANTITY</th>
                        <th>VALUE</th>
                    </tr>
                </thead>
                <tbody>
                    ${negotiations.returnNegotiationsList().map(line => {
                        return `
                            <tr>
                                <td>${new Intl.DateTimeFormat()
                                    .format(line.getDate)}
                                </td>
                                <td>
                                    ${line.getQuantity}
                                </td>
                                <td>
                                    ${line.getValue}
                                </td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    update(negotiations: Negotiations): void {
        this.element.innerHTML = this.template(negotiations)
    }
    
}