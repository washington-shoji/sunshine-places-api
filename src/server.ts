import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import { placeRouter } from './features/places/routes/place.routes';
import Logging from './library/Logging';

const app = express();

/**
 * Connect to MongoDB
 */
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        Logging.info('Connected to MongoDb');
        StartServer();
    })
    .catch((error) => {
        Logging.error('Unable to connected to MongoDb');
        Logging.error(error);
    });

/**
 * Only start the server if Mongo Connects
 */

const StartServer = () => {
    app.use((req, res, next) => {
        /**
         * Log the Request
         */
        Logging.info(`Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            /**
             * Log the Response
             */
            Logging.info(`Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
        });

        next();
    });

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    /** Rules of our API */
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });

    /** Routes */
    app.use('/api/v1', placeRouter);

    /** Healthcheck */
    app.get('/api/v1/ping', (req, res, next) => res.status(200).json({ hello: 'world' }));

    /** Error handling */
    app.use((req, res, next) => {
        const error = new Error('Not found');

        Logging.error(error);

        res.status(404).json({
            message: error.message
        });
    });

    http.createServer(app).listen(config.server.port, () => Logging.info(`Server is running on port ${config.server.port}`));
};
