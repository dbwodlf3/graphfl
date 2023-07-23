import { FunctionManager } from "./index"

interface FunctionTypeMap {
}

interface RPCFunction {
    (...args: any[]): any
}

interface RPCFunctionDefine {
    functionId: string;
    call: RPCFunction;
}

export function createEdgeFunction(input: RPCFunction, functionId: string){
    FunctionManager.registFunction(input, functionId);
    return input;
}
