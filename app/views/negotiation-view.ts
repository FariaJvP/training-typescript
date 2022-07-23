import { Negotiations } from "../models/negotiations.js";
import { View } from "./view.js";
export class NegotiationView extends View<Negotiations> {

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
    
}