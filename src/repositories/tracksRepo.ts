import sqlite3 from "sqlite3";
import { Track } from "../models/track";

const db = new sqlite3.Database("./music-library.db"); // env

export const getAllTracks = async () => {
    return new Promise<Track[]>((resolve, reject) => {
        db.all('SELECT * FROM tracks', (error, rows: any[]) => {
            if (error) {
                reject(error);
                return;
            }

            const tracks = rows.map((row) => new Track(row.title, row.artist, row.genre, row.id));
            resolve(tracks);
        });
    });
};

export const createTrack = async (track) => {
    return new Promise<Track>((resolve, reject) => {
    const { title, artist, genre } = track;
    const sql = 'INSERT INTO tracks (title, artist, genre) VALUES (?, ?, ?)';

        db.run(sql, [title, artist, genre], function (error) {
            if (error) {
                reject(error);
                return;
            }

            track.setId(this.lastID);
            resolve(track);
        });
    });
};
