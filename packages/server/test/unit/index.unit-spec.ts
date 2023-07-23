import { createFunctionManager } from "manager";

describe("GraphFL Test", ()=>{
    describe("Function Manager", ()=>{
        it("Have to create function manager", ()=>{
            const FunctionManager = createFunctionManager();
            expect(FunctionManager).toBeDefined();
        });

        it("Have to call registed functions", ()=>{
            const FunctionManager = createFunctionManager();
            const testFunction = jest.fn();
            const functionId = "Test__Function"
            FunctionManager.registFunction(testFunction, functionId);
            FunctionManager.callFunction(functionId);

            expect(testFunction).toBeCalled();
        });

        test.skip("Have to support streaming function", ()=>{});

        test.skip("Have to support call chaining", ()=>{});

        test.skip("Have to support service acrrosing call chaining", ()=>{});
    })
});