"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.send = void 0;
const fabric_network_1 = require("fabric-network");
const path = require("path");
const fs = require("fs");
const channelName = 'channel1';
const chaincodeName = 'abstore';
const walletPath = path.join(process.cwd(), 'wallet');
const ccpPath = path.resolve(__dirname, '..', '..', 'connection-org1.json');
const org1UserId = 'appUser';
async function send(type, func, args) {
    try {
        const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
        const wallet = await fabric_network_1.Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);
        const gateway = new fabric_network_1.Gateway();
        try {
            await gateway.connect(ccp, {
                wallet,
                identity: org1UserId,
                discovery: { enabled: true, asLocalhost: false }
            });
            console.log('Success to connect network');
            const network = await gateway.getNetwork(channelName);
            console.log('Success to connect channel1');
            const contract = network.getContract(chaincodeName);
            let result;
            if (type) {
                result = await contract.evaluateTransaction(func, ...args);
                return result.toString();
            }
            else {
                result = await contract.submitTransaction(func, ...args);
                if (result.length === 0) {
                    return '';
                }
                else {
                    return result.toString();
                }
            }
        }
        catch (error) {
            throw error;
        }
        finally {
            gateway.disconnect();
        }
    }
    catch (error) {
        throw error;
    }
}
exports.send = send;
//# sourceMappingURL=connectFabric.js.map