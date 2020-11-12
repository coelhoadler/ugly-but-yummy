import * as crypto from 'crypto';

export default class UniqueGenerator {
    static generateUniqueId() {
        return crypto.randomBytes(4).toString('HEX');
    }
}