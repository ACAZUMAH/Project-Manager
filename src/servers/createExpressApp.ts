import express, { Application } from 'express';
import cors from 'cors';

const createExpressApp = (): Application => {
    const app = express()

    app.use(express.json())

    app.use(cors())

    return app;
}

export default createExpressApp;