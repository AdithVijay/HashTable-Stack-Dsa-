class HashTable {
    constructor(size = 10) {
        this.table = new Array(size); 
    }

    _hash(key) {
        let hash = 0
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

    get(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if (bucket) {
            for (let pair of bucket) {
                if (pair[0] === key) {
                    return pair[1];
                }
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1); 
                    return;
                }
            }
        }
    }

    // Print the HashTable
    print() {
        this.table.forEach((bucket, index) => {
            if (bucket) {
                console.log(`Index ${index}:`, bucket);
            }
        });
    }
}

// Testing
const hashTable = new HashTable();
hashTable.set("name", "Alice");
hashTable.set("age", 25);
hashTable.set("city", "Wonderland");
hashTable.set("name", "Bob"); 
console.log(hashTable.get("name")); 
console.log(hashTable.get("city")); 
hashTable.remove("age");
hashTable.print();