import express, { Router } from "express";
import { MainController } from "../controllers/mainController.js";
export class MainRouter {
    constructor() {
        this.router = Router();
        this.mainController = new MainController();
        this.initRoutes();
    }

    initRoutes() {
        // Define your routes here
        this.router.get("/", (req, res) => this.mainController.getIndex(req, res));
        // Add more routes as needed
    }

    getRouter() {
        return this.router;
    }
}