import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserActivityLogModule } from 'src/modules/user_activity_log/user_activity_log.module';
import { SupportRequestsModule } from 'src/modules/support_requests/support_requests.module';
import { RegionConsumptionModule } from 'src/modules/region_consumption/region_consumption.module';
import { ProductsModule } from 'src/modules/products/products.module';
import { OrdersModule } from 'src/modules/orders/orders.module';
import { OrderDetailsModule } from 'src/modules/order_details/order_details.module';
import { NotificationsModule } from 'src/modules/notifications/notifications.module';
import { InventoryModule } from 'src/modules/inventory/inventory.module';
import { AiRecommemdationsModule } from 'src/modules/ai_recommemdations/ai_recommemdations.module';
import { AuthModule } from 'src/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/passport/jwt-auth.guard';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    UsersModule,
    UserActivityLogModule,
    SupportRequestsModule,
    RegionConsumptionModule,
    ProductsModule,
    OrdersModule,
    OrderDetailsModule,
    NotificationsModule,
    InventoryModule,
    AiRecommemdationsModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
      MailerModule.forRootAsync({
        imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        // ignoreTLS: true,
        // secure :false,
        auth: {
          user: configService.get<string>('MAIL_USER'),
          pass: configService.get<string>('MAIL_PASSWORD'),
        },
      },
      defaults: {
        from: '"No Reply" <no-reply@localhost>',
      },
      // preview: true,
      // template: {
      //   dir: process.cwd() + '/template/',
      //   adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
      //   options: {
      //     strict: true,
      //   },
      // },
      }),
      inject: [ConfigService], 
    
    }),
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
  },
  ],
})
export class AppModule {}
