import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import { MainRouter } from "../routes/mainRouter.js";
import {mongooseConnect} from "../../config/mongoose.js"
dotenv.config();
export class Server2{

    constructor(){
        this.app=express();
        this.port = Number(process.env.PORT2)|| 3000;
        this.middlewares();
        this.mainRouter = new MainRouter();
        this.routes();
    }


    middlewares(){
        mongooseConnect();
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan("dev"));
        this.app.use(express.static(path.resolve(process.env.STORAGE_PATH || "UPLOADS")));
        this.app.use(express.static(path.resolve("public")));

    }

    routes(){
        this.app.use("/", this.mainRouter.getRouter())
    }


    listen(){
        this.app.listen((this.port), ()=>{
            console.log(`Server is running on port ${this.port}`);
        })
    }
}