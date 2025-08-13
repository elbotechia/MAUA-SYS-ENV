export class MainController {
    constructor() {
       
    }

    getIndex(req, res) {
        res.json({ data: "ENDPOINTS" });
    }
}