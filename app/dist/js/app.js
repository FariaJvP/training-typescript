import { NegotiationController } from "./controllers/negotiation-controller.js";
import { NegotiationDTO } from "./controllers/negotiationDTO.js";
const negotiationController = new NegotiationController(new NegotiationDTO);
const requestform = document.querySelector(".form");
if (requestform) {
    requestform.addEventListener('submit', (event) => {
        event.preventDefault();
        negotiationController.receiveFormRequest();
    });
}
else {
    throw Error("Could not launch the application! please check the form for errors");
}
