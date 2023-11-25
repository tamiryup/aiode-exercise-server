import { RequestHandler } from "express";
import { Track } from "../models/track";

export const getTracks: RequestHandler = (req, res) => {
    const track = new Track('XXX', 'Heyyyy', 'Rock');
    res.json(track);
};

export const addTrack: RequestHandler = (req, res) => {
    res.send('add new track');
};