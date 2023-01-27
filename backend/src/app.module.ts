import { Module, Logger } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';

//middleware
import { JwtMiddleware } from './middleware/jwt';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}