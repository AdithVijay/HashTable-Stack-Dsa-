class HashTable {
    constructor(size = 10) {
        this.table = new Array(size)
    }

    _hash(key) {
        let hash = 0;
        for (let char of key) {
            hash += char.charCodeAt(0); 
        }
        return hash % this.table.length; 
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = []; 
        }

        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = value; 
                return;
            }
        }

        this.table[index].push([key, value]);
    }
}

const hashTable = new HashTable()
hashTable.set("name", "Alice");
console.log(hashTable);
