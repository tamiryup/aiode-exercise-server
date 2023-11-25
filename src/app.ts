import express, { Express } from "express";
import tracks from './routes/tracksRoutes'

const app: Express = express();
const port = 8000;

app.use('/tracks', tracks);

app.listen(port, () => {
    console.log(`Tracks app listening on port ${port}`)
});