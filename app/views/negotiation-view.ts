export class NegotiationView {

    private element: HTMLElement;

    constructor(selector: string){
        this.element = document.querySelector(selector);
    }

    template(): string {
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
                </tbody>
        `
    }

    update(){
        this.element.innerHTML = this.template();
    }
    
}