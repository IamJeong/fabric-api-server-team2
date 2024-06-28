import { Injectable } from '@nestjs/common';
import { send } from './util/connectFabric';

@Injectable()
export class AppService {
  getHello(): string {
    return 'hello world';
  } 

  getJoin(): string {
    return "여기는 회원가입 페이지입니다"
  }

  async init(user: string, userval: string) {
    const args = [user, userval];
    return await send(false, 'init', args);
  }

  async invoke(sender: string, reciever: string, value: string) {
    const args = [sender, reciever, value];
    return await send(false, 'invoke', args);
  }

  async query(name: string) {
    const args = [name];
    return await send(true, 'query', args);
  }

  async delete(name: string) {
    const args = [name];
    return await send(false, 'delete', args);
  }

  async charge(user: string, amount: string) {
    const args = [user, amount];
    return await send(false, 'charge', args)
  }

  async initItem(itemName: string, styleNum: string, brand: string, inventory: string) {
    const args = [itemName, styleNum, brand, inventory]
    return await send(false, 'initItem', args)
  }

  async purchaseItem(user: string, itemId: string) {
    const args = [user, itemId];
    return await send(false, 'purchaseItem', args)
  }

  async queryItem(itemId: string) {
    const args = [itemId];
    return await send(true, 'queryItem', args)
  }

  async queryPurchase(user: string) {
    const args = [user];
    return await send(true, 'queryPurchase' , args)
  }
}
