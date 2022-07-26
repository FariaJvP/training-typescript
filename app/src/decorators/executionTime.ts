export function ExecutionTime() {
    return function (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor){
        propertyDescriptor.value = (...originalArguments: any[]) => {
            const executionBegin = performance.now();
            this.apply(this, originalArguments);
            const executionEnd = performance.now();
            const result = (executionBegin-executionEnd)/1000;
            console.log(`${propertyKey}, execution time: ${result} seconds`);
        };
        return propertyDescriptor;
    }
}