import path from "path";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { FunctionManager } from "./graphfl";

const port = 8888;
const app = express();
const static_path = path.resolve(path.join(__dirname, "../../../static"));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use("/public", express.static(static_path));

app.get("/", (req, res)=> {
    res.redirect("public/index.html");
});

console.log(static_path);

app.post("/api/graphfl", bodyParser.json(), async (req, res)=>{
    const functionId = req.body.functionId;
    const functionArgs = req.body.args; 
    const result = await FunctionManager.callFunction(functionId, functionArgs);
    res.json(result);
    return;
});

app.listen(port, ()=>{
    console.log(`Server is listing on ${port}`);
});
