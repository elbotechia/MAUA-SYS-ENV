import { Server2 } from "./server/server2.js";

const app2 = async ()=>{
    await new Server2().listen();
}

export default app2;