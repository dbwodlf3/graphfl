import { createRequest } from "./util/request";

export const Config = {
    endpoint: ""
}

interface RPCFunctionInterface {
    functionName: string;
    functionId: string;
    args: any;
    res: any;
}

interface RPCFunctionRequestMessage {
    functionId: string;
    args: any;
}

interface RPCFunctionResponseMessage {

}

export interface FunctionType {
    (...args: any[]): any
}

export interface FunctionObject {
    functionId: string;
    func: FunctionType;
}

export type FunctionMap<T> = {
    [K in keyof T]: FunctionObject;
};

export function callRPC(input: {functionId: string, args: any, endpoint?: string}){
    const msg:RPCFunctionRequestMessage = {
        functionId: input.functionId,
        args: input.args
    }

    const rpc_req = createRequest(input.endpoint || "", {
        "method": "post",
        "headers": {},
        "body": JSON.stringify(msg),
    })

    return rpc_req;
}