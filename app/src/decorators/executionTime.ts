export function ExecutionTime() {
    return function (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor){
        const originalMethod = propertyDescriptor.value = function(...originalArguments: any[]){
            const executionBegin = performance.now();
            const returnOriginalMethod = originalMethod.apply(this, originalArguments);
            const executionEnd = performance.now();
            const result = (executionBegin - executionEnd)/1000;
            console.log(`${propertyKey}, execution time: ${result} seconds`);
            returnOriginalMethod;
        };
    
        return propertyDescriptor;
    }
}