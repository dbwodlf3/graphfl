import path from "path";
import { spawn } from "child_process"
import common from "./common";

const srcPath = path.join(common.clientRoot, "src");
let NODE_PATH = `${common.clientRoot}:${srcPath}`;

if(process.platform == 'win32')  {
    NODE_PATH = `${common.clientRoot};${srcPath}`;
}
else {
    NODE_PATH = `${common.clientRoot}:${srcPath}`;
}

spawn(`cd ${common.clientRoot} && \
    tsc --watch '${common.clientRoot}/src/client.ts' -outFile ${common.projectRoot}/static/index.js`, 
    { shell: true, stdio: 'inherit', env: { NODE_PATH: NODE_PATH, ...process.env } }
);