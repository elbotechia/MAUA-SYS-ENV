import { Server3 } from "./server/server3.js";

const app3 = async ()=>{
    await new Server3().listen();
}

export default app3;