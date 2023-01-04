import express, { Request, Response, NextFunction } from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { BaseError } from './library/classes/base-error';
import { ErrorHandler } from './library/classes/error-handler';
import { config } from './config/config';
import { placeRouter } from './features/places/routes/place.routes';
import { riskZoneRouter } from './features/suburb-risk-zone/routes/suburbRiskZone.routes';
import { layerRouter } from './features/sydney-geo-layers/routes/layer.routes';
import { sydneyPolygonLayerRouter } from './features/sydney-suburbs-polygon/routes/suburbPolygonLayer.routes';
import Logging from './library/logging/Logging';
import { schoolRouter } from './features/sydney-schools/routes/school.routes';
import { populationGrowthRouter } from './features/population-growth/routes/populationGrowth.routes';

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
    app.use((req: Request, res: Response, next: NextFunction) => {
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
    app.use((req: Request, res: Response, next: NextFunction) => {
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
    app.use('/api/v1', layerRouter);
    app.use('/api/v1', sydneyPolygonLayerRouter);
    app.use('/api/v1', riskZoneRouter);
    app.use('/api/v1', schoolRouter);
    app.use('/api/v1', populationGrowthRouter);

    /** Health-check */
    app.get('/api/v1/ping', (req: Request, res: Response, next: NextFunction) => res.status(200).json({ hello: 'world' }));

    /** Error handling */

    const errorHandler = new ErrorHandler();
    app.use(errorMiddleware);

    http.createServer(app).listen(config.server.port, () => Logging.info(`Server is running on port ${config.server.port}`));

    process.on('uncaughtException', async (error: Error) => {
        await errorHandler.handleError(error);
        if (!errorHandler.isTrustedError(error)) process.exit(1);
    });

    process.on('unhandledRejection', (reason: Error) => {
        throw reason;
    });

    async function errorMiddleware(error: BaseError, req: Request, res: Response, next: NextFunction) {
        if (!errorHandler.isTrustedError(error)) {
            next(error);
            return;
        }
        await errorHandler.handleError(error);
    }
};
