export function registFunction(functionManager: any, functionId: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        functionManager.registFunction(functionId, target[propertyKey]);
    }
}