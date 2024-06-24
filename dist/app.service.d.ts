export declare class AppService {
    getHello(): string;
    init(user: string, userval: string): Promise<string>;
    invoke(sender: string, reciever: string, value: string): Promise<string>;
    query(name: string): Promise<string>;
    delete(name: string): Promise<string>;
}
