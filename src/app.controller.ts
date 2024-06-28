import { Controller, Get, Query, Post, Render, Body, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsService } from './products/products.service';
import { Product } from './products/entities/product.entity';
import { UsersService } from './Users/users.service';
import { Response } from 'express';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly ProductsService: ProductsService,
    private readonly UsersService: UsersService
  ) {}

  @Get()
  @Render('index')
  showIndexPage() {
    return;
  }

  
  @Get('/signup')
  @Render('signup')
  showSignupPage() {
    return;
  }

  @Post('/signup')
  async handleSignup(
    @Body('userid') userid: string,
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('phone') phone: number,
    @Body('mail') mail: string,
    @Res() res: Response,
    userval = "100000"
  ): Promise<void> {
    await this.UsersService.create(userid, username, password, phone, mail);
    await this.appService.init(userid, userval);
    res.redirect(`/`); // 회원가입 후 리다이렉션할 페이지 경로
  }

  @Get('/init')
  async init(
    @Query('user') user: string,
    @Query('userval') userval: string
  ): Promise<string> {
    return this.appService.init(user, userval);
  }

  @Get('/invoke')
  async invoke(
    @Query('sender') sender: string,
    @Query('reciever') reciever: string,
    @Query('value') value: string,
  ): Promise<string> {
    return this.appService.invoke(sender, reciever, value);
  }

  @Get('/query')
  async query(
    @Query('name') name: string,
  ): Promise<string> {
    return this.appService.query(name);
  }

  @Get('/delete')
  async delete(
    @Query('name') name: string,
  ): Promise<string> {
    return this.appService.delete(name);
  }
  
  @Post('/create')
  async create(@Body() product: Product): Promise<Product> {
    return this.ProductsService.create(product);
  }


  @Get('/login')
  @Render('login')
  showLoginPage() {
    return;
  }

  @Post('/login')
  async handleLogin(
    @Body('userid') username: string,
    @Body('password') password: string,
    @Res() res: Response,
  ): Promise<void> {
    const isValidUser = await this.UsersService.validateUser(username, password);
    if (isValidUser) {
      res.redirect(`/signup`);
    } else {
      res.redirect(`/login`);
    }
  }

  @Get('/charge')
  async charge(
    @Query('user') user: string,
    @Query('amount') amount: string,
  ): Promise<string> {
    return this.appService.charge(user, amount);
  }


  @Get('/initItem')
  async initItem(
    @Query('itemName') itemName: string,
    @Query('styleNum') styleNum: string,
    @Query('brand') brand: string,
    @Query('inventory') inventory: string,
  ): Promise<string> {
    return this.appService.initItem(itemName, styleNum, brand, inventory);
  }

  @Get('/purchaseItem')
  async purchaseItem(
    @Query('user') user: string,
    @Query('itemId') itemId: string,
  ): Promise<string> {
    return this.appService.purchaseItem(user, itemId);
  }

  @Get('/queryItem')
  async queryItem(
    @Query('itemId') itemId: string,
  ): Promise<string> {
    return this.appService.queryItem(itemId);
  }

  @Get('/queryPurchase')
  async queryPurchase(
    @Query('user') user: string,
  ): Promise<string> {
    return this.appService.queryPurchase(user);
  }


}
