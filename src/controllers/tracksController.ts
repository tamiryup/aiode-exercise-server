import { RequestHandler } from "express";

export const getTracks: RequestHandler = (req, res) => {
    res.send('all');
};

export const addTrack: RequestHandler = (req, res) => {
    res.send('add new track');
};