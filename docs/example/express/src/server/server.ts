import express from "express"
import bodyParser from "body-parser"
import { FunctionManager } from "./graphfl";

const port = 8888;
const app = express();

app.get("/", (req, res)=> {
    res.end(":)");
});

app.post("/api/graphfl", bodyParser.json(), async (req, res)=>{
    const functionId = req.body.functionId;
    const functionArgs = req.body.args; 
    const result = await FunctionManager.endpointFunction(functionId, functionArgs);
    res.json(result);
    return;
});

app.listen(port, ()=>{
    console.log(`Server is listing on ${port}`);
});
