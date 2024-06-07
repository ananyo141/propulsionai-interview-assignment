import type { Request, Response, NextFunction } from "express";

import Item from "../models/item";

export const getItems = async (_req: Request, _res: Response, _next: NextFunction) => {
    try {
        const items = await Item.find();
        console.log(items)
        _res.status(200).json(
            items
        )
    } catch (error: any) {
        console.log(error);
       _res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error
        })
    }
}

export const createItem = async (_req: Request, _res: Response, _next: NextFunction) => {
    try {
        const item = await Item.create(_req.body);
        _res.status(201).json(
            item
        )
    } catch (error: any) {
        console.log(error);
       _res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error
        })
    }
}

export const searchItem = async (_req: Request, _res: Response, _next: NextFunction) => {
    try {
        const searchParams = _req.query.searchParams;
        const userId = _req.query.userId ? Number(_req.query.userId) : null;
        Log.create({ searchTerm: searchParams, userId: userId }).catch((err) => console.error(err)); // We actually want to run this async
        if (!searchParams)
            return _res.status(400).json({
                success: false,
                message: "Enter searchParams",
            })
        const search = await Item.find({
            name: {
                $regex: searchParams,
                $options: 'i',
            }
        })
        _res.status(200).json(
            search
        )
    } catch (error: any) {
        console.log(error);
       _res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error
        })
    }
}
