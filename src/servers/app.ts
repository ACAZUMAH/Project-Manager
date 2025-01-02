import http from 'http';
import createExpressApp from './createExpressApp';
import createGraphQlServer from './createGraphQlServer';
import schema from '../graphql/index';
import connectDB from '../models/index';

const startApp = async () => {
    await connectDB(process.env.MONGO_URL as string);
    
    const app = createExpressApp();
    
    const httpServer = http.createServer(app);

    await createGraphQlServer({ app, schema, httpServer });

    const port = process.env.PORT || 3500;

    httpServer.listen(port, () => {
        console.log(`running on port ${port}`);
    });
};

export default startApp;