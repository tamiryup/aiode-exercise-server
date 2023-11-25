import express, { Express } from "express";
import tracks from './routes/tracksRoutes'

const app: Express = express();

app.use('/tracks', tracks);

const run = (port: number) => {
    app.listen(port, () => {
        console.log(`Tracks app listening on port ${port}`)
    });
};

export default run;