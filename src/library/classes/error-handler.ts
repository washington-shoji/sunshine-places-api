import Logging from '../logging/Logging';
import { BaseError } from './base-error';

export class ErrorHandler {
    constructor() {}

    public async handleError(err: Error): Promise<void> {
        Logging.error(err);
    }

    public isTrustedError(error: Error) {
        return error instanceof BaseError && error.isOperational;
    }
}
