export interface RequestMessage {
    method: HttpMethod;
    body: any;
    headers: StringMap;
}

export interface ResponseMessage {
    status: any;
    body: any;
    headers: StringMap;
}

interface StringMap { [key: string]: string }
type HttpMethod = "get" | "post" | "delete" | "fetch" | "update";

function parseResHeaders(rawHeaders: string){
    const arr = rawHeaders.trim().split(/[\r\n]+/);
    const headerMap:StringMap = {};
    arr.forEach((line) => {
        const parts = line.split(": ");
        const header = parts.shift();
        const value = parts.join(": ");
        if(header)headerMap[header] = value;
    });
    return headerMap;
}

function parseResBody(xhr: XMLHttpRequest){
    const resType = xhr.responseType;
    if(resType == "text") return xhr.responseText;
    if(resType == "document") return xhr.responseText;
    if(resType == "json") return JSON.parse(xhr.responseText);
    if(resType == "arraybuffer") return new Uint8Array(xhr.response);
    if(resType == "blob") return xhr.response;
}

export function createRequest(endpoint:string, input: RequestMessage): Promise<ResponseMessage>{
    return new Promise((resolve)=>{
        const xhr = new XMLHttpRequest();
        const res: ResponseMessage = {
            status: 0,
            body: undefined,
            headers: {}
        }
        xhr.addEventListener("load", ()=>{
            res.headers = parseResHeaders(xhr.getAllResponseHeaders());
            res.body = parseResBody(xhr);
            res.status = xhr.status;
            resolve(res);
        });
        xhr.open(input.method, endpoint);
        xhr.send(input.body);
    });
}
