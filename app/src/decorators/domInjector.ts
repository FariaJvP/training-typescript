export function domInjector(selector: string){
    return function(target: any, propertyKey: string){
        
        const getSelector = function(): Element{
            return document.querySelector(selector) as Element;
        }

        Object.defineProperty(target, propertyKey, {get:getSelector});
    }

}