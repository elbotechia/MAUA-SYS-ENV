import { Server1 } from "./server/server1.js";

const app1 = async ()=>{
    await new Server1().listen();
}

export default app1;