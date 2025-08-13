import express, { Router } from "express";
import { MainController } from "../controllers/mainController.js";
import * as storageRouter from './storageRouter.js'
export class MainRouter {
    constructor() {
        this.router = Router();
        this.mainController = new MainController();
        this.storageRouter = storageRouter
        this.initRoutes();
    }

    initRoutes() {
        // Define your routes here
        this.router.get("/", (req, res) => this.mainController.getIndex(req, res));
        this.router.get("/collection/:id", (req, res) => this.mainController.getCollectionById(req, res));
        this.router.use("/storage", this.storageRouter.default); // Use the storage router
        // Add more routes as needed
    }

    getRouter() {
        return this.router;
    }
}