"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtMiddleware = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const jwt = require('jsonwebtoken');
let JwtMiddleware = class JwtMiddleware {
    constructor(logger) {
        this.logger = logger;
    }
    async use(req, next) {
        const result = await this.validateRequest(req.headers['authorization']);
        if (result.id === null || result.email === null) {
            this.logger.error(result.response.message);
            throw new common_1.UnauthorizedException(result.response);
        }
        else {
            req.body.id = result.id;
            req.body.email = result.email;
        }
        next();
    }
    async validateRequest(token) {
        let result = {
            id: null,
            email: null,
            response: null,
        };
        if (!token) {
            result.response = {
                message: 'Token not found',
                status: common_1.HttpStatus.UNAUTHORIZED,
            };
            return result;
        }
        token = token.replace('Bearer ', '').trim();
        const publicKey = fs.readFileSync(path.join(__dirname, '../public.key'), 'utf8');
        try {
            const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
            result.id = decoded.id;
            result.email = decoded.email;
            return result;
        }
        catch (err) {
            result.response = {
                message: 'Token is not valid',
                status: common_1.HttpStatus.UNAUTHORIZED,
            };
            return result;
        }
    }
};
JwtMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(common_1.Logger)),
    __metadata("design:paramtypes", [Object])
], JwtMiddleware);
exports.JwtMiddleware = JwtMiddleware;
//# sourceMappingURL=jwt.js.map