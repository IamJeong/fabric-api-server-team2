import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';
import { ProductsService  } from './products/products.service';
import { UsersService } from './Users/users.service';
import { User } from './Users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'yourpassword',
    database: 'blockchainDB',
    entities: [Product, User],
    synchronize: true, 
    dropSchema: true
  }),
  TypeOrmModule.forFeature([Product, User]),
],
  controllers: [AppController],
  providers: [AppService, ProductsService, UsersService],
})
export class AppModule {}
