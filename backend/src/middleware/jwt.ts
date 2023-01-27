import {
    Inject,
    HttpStatus,
    Logger,
    LoggerService,
    Injectable,
    NestMiddleware,
    UnauthorizedException,
} from '@nestjs/common';

import {Request} from 'express';
import * as fs from 'fs';
import * as path from 'path';

const jwt = require('jsonwebtoken');

@Injectable()
export class JwtMiddleware implements NestMiddleware {
    constructor(@Inject(Logger) private readonly logger: LoggerService,
  ) {}

  async use(req: Request, next: Function) {
    const result = await this.validateRequest(
        req.headers['authorization'],
    );
    if (result.id === null || result.email === null) {
        this.logger.error(result.response.message);
        throw new UnauthorizedException(result.response);
    } else{
        req.body.id = result.id;
        req.body.email = result.email;
    }
    next();
  }


    async validateRequest(token: string) {
        let result = {
            id: null,
            email: null,
            response: null,
        };
        if(!token) {
            result.response = {
                message: 'Token not found',
                status: HttpStatus.UNAUTHORIZED,
            };
            return result;
        }
        token = token.replace('Bearer ', '').trim();
        //openssl genrsa -out private.key 2048
        //openssl rsa -in private.key -pubout -outform PEM -out public.key
        const publicKey = fs.readFileSync(path.join(__dirname, '../public.key'), 'utf8');
        try {
            const decoded = jwt.verify(token, publicKey, {algorithms: ['RS256']});
            result.id = decoded.id;
            result.email = decoded.email;
            return result;
        } catch (err) {
            result.response = {
                message: 'Token is not valid',
                status: HttpStatus.UNAUTHORIZED,
            };
            return result;
        }
    }
}
