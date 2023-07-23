import { FunctionManager } from "graphfl";
import { createEdgeFunction } from "../../../../../../../packages/server/src";

export const helloWorld = createEdgeFunction(()=>{
    return "Hello World!";
}, "guest_helloWorld");