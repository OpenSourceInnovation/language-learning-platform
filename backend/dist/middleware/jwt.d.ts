import { LoggerService, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';
export declare class JwtMiddleware implements NestMiddleware {
    private readonly logger;
    constructor(logger: LoggerService);
    use(req: Request, next: Function): Promise<void>;
    validateRequest(token: string): Promise<{
        id: any;
        email: any;
        response: any;
    }>;
}
