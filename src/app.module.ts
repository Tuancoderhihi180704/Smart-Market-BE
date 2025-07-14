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
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
     
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
