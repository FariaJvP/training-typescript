import { NegotiationController } from "./controllers/negotiation-controller.js";
import { NegotiationDTO } from "./controllers/negotiationDTO.js";

const negotiationController = new NegotiationController(new NegotiationDTO);
const requestform = document.querySelector(".form");

if(requestform){
    requestform.addEventListener('submit', (event: Event) => {
        event.preventDefault();
        negotiationController.receiveFormRequest();
    });
} else {
    throw Error("Could not launch the application! please check the form for errors");
}

const importButtonFunction = document.querySelector("#import-button");
if(importButtonFunction){
    importButtonFunction.addEventListener('click', () => {
        negotiationController.dataImport();
    });
} else {
    throw Error("Import failure! please check the import feature")
}