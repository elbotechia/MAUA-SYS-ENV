import dotenv from "dotenv";
dotenv.config();
import app1 from "./src/s1/app1.js";
import app2 from "./src/s2/app2.js";
import app3 from "./src/s3/app3.js";
const start1 = async ()=> await app1();
const start2 = async ()=> await app2();
const start3 = async ()=> await app3();
const startAll = async ()=>{
    await start1();
    await start2();
    await start3();
    console.log("STARTEI NO " + process.env.PORT1 + " " + process.env.PORT2 + " " + process.env.PORT3   );
}   

startAll();