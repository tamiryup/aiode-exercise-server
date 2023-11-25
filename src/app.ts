import express, { Express } from "express";
import tracks from './routes/tracksRoutes'
import { errorHandler } from "./errorHandler";

const app: Express = express();
const port = 8000; // env

// middleware
app.use(express.json());

// routes
app.use('/tracks', tracks);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Tracks app listening on port ${port}`)
});