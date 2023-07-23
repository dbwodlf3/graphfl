import { FunctionMap, FunctionType, callRPC } from "./function";

export const Config = {
    endpoint: ""
}

export type WebClient<T extends FunctionMap<T>> = {
    [K in keyof T]: T[K]['func'];
}

export function createWebClient<T extends FunctionMap<T>>(): WebClient<T>{
    const handler = {
        get(target: T, property: string) {
            if ( property in target && typeof target[property as keyof T].func === 'function') {
                return (...args: any[]) => {
                    return callRPC({functionId: "", args: args, endpoint: ""});
                };
            }
        }
    };

    const client = new Proxy({} as T, handler);
    return client;
}
