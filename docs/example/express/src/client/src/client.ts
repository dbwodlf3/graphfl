import {createWebClient, Config as _Config} from "../../../../../../packages/web-client/src/index"
import {GuestFunctions} from "../../rpc/guest/guest.ft";
import {UserFunctions} from "../../rpc/user/user.ft";
interface GraphFLConfig {
    endpoint?: string
}

const config = Object.assign({}, _Config);

config.endpoint = "localhost:8888";

const guest_client = createWebClient<GuestFunctions>();
const user_client = createWebClient<UserFunctions>();

console.log(guest_client);
guest_client.helloWorld();
// user_client.getUserProfile("userJwt");