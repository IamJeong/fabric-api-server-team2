"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const connectFabric_1 = require("./util/connectFabric");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
    async init(user, userval) {
        const args = [user, userval];
        return await (0, connectFabric_1.send)(false, 'init', args);
    }
    async invoke(sender, reciever, value) {
        const args = [sender, reciever, value];
        return await (0, connectFabric_1.send)(false, 'invoke', args);
    }
    async query(name) {
        const args = [name];
        return await (0, connectFabric_1.send)(true, 'query', args);
    }
    async delete(name) {
        const args = [name];
        return await (0, connectFabric_1.send)(false, 'delete', args);
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map