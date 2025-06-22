import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BurgersModule } from './burgers/burgers.module';
import { OrdersModule } from './orders/orders.module';
import { ExtrasModule } from './extras/extras.module';
import { SaucesModule } from './sauces/sauces.module';
import { SidesModule } from './sides/sides.module';
import { DrinksModule } from './drinks/drinks.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'burger_station_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    BurgersModule,
    OrdersModule,
    ExtrasModule,
    SaucesModule,
    SidesModule,
    DrinksModule,
    EmailModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
