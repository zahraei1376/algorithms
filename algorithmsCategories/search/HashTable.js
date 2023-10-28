export const collisionMethod = {
    CHAINING: "CHAINING",
    OPEN_ADDRESS: "OPEN_ADDRESS"
}

export class Cryptographic {
    constructor(keys, hashTableLength, hashMethod, method) {
        this.keys = keys;
        this.hashTable = new Array(hashTableLength).fill(null);
        this.hashMethod = hashMethod;
        this.method = method;
        this.initialize();
    }

    initialize = () => {
        for (const key of this.keys) {
            const address = this.findAddress(key);
            if (this.method === collisionMethod.CHAINING) {
                this.chaining(address, key);
            }
        }
    }

    findAddress = (key) => {
        return this.hashMethod(key);
    }

    chaining = (address, key) => {
        if (!this.hashTable[address]) {
            this.hashTable[address] = [key];
        } else {
            this.hashTable[address].unshift(key)
        }
    }
}