import { RequestHandler, Request, Response, NextFunction } from "express";
import { Track } from "../models/track";
import { getAllTracks, createTrack } from "../repositories/tracksRepo";

export const getTracks: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tracks = await getAllTracks();
        res.json(tracks);
    } catch (error) {
        next(error);
    }
};

export const addTrack: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    const { title, artist, genre } = req.body;
    
    if(!title || !artist || !genre) {
        const error: any = new Error('title, artist or genre misssing in request body');
        error.statusCode = 400;
        return next(error);
    }

    try {
        let track: Track = new Track(title, artist, genre);
        track = await createTrack(track);
        res.send('' + track.getId());
    } catch (error) {
        next(error);
    }
};