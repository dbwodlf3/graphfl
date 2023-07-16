interface FunctionCallMessage {
    functionId: string;
    args: any;
};

interface FunctionResultMessage {
    return: any;
};

interface EdgeFunction {
    (message: FunctionCallMessage): FunctionResultMessage;
};

interface HTTPRequest {

}

interface HttpResponse {

}

const _functions: any = {}

const FunctionManager = {
    functions: {} as any,
    registFunction(callback: any, functionId: string){
        if(this.functions[functionId]) throw new Error(`already registerd function ${functionId}`);
        this.functions[functionId] = callback;
    },
    endpointFunction(functionId: string, args: any){
        return this.functions[functionId](args);
    },
};

export const createFunctionManager = ()=>{
    return Object.assign({}, FunctionManager);
}

const EndpointFunction = ()=>{}