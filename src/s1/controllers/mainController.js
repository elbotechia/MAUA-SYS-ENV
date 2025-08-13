import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
dotenv.config()
const JSONPATH = process.env.JSON_PATH || "/JSON/"

export class MainController {
    constructor() {}

    async getIndex(req, res) {
        try {
            const COLLECTION_PATH = path.join(JSONPATH, 'dataCollections.json')
            const data = fs.readFileSync(COLLECTION_PATH, 'utf8')
            res.json({ data: JSON.parse(data) })
        } catch (error) {
            console.error('Error reading JSON file:', error)
            res.status(500).json({ error: 'Internal Server Error' })
        }
    }

    async getCollectionById(req, res) {
        try {
            const { id } = req.params
            const COLLECTION_PATH = path.join(JSONPATH, 'dataCollections.json')
            const data = fs.readFileSync(COLLECTION_PATH, 'utf8')
            const collections = JSON.parse(data)
            const collection = collections.find((col) => col.id === id)
            if (!collection) {
                return res.status(404).json({ error: 'Collection not found' })
            }
            res.json({ data: collection  })
        } catch (error) {
            console.error('Error reading JSON file:', error)
            res.status(500).json({ error: 'Internal Server Error' })
        }
    }
}
