import { NegotiationController } from "./controllers/negotiation-controller.js";

const negotiationController = new NegotiationController();
const requestform = document.querySelector(".form");


requestform.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    negotiationController.toNegotiation();
})