import express, { Application } from 'express';

const createExpressApp = (): Application => {
    const app = express()

    app.use(express.json())

    return app;
}

export default createExpressApp;