import { Router } from "express";
import { createItem, getItems, searchItem } from "../controllers/items.controller"

const itemRouter = Router()

itemRouter.route('/').get(getItems).post(createItem)
itemRouter.get('/search', searchItem)

export default itemRouter;