import { createFunctionManager } from "../../../../../../packages/server/src/manager";
import { helloWorld } from "../module/guest/guest.function";

export const FunctionManager = (()=>{
    const fm = createFunctionManager();

    fm.registFunction(helloWorld, "GuestHelloWorld");

    return fm;
})()