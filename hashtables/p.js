class HashTable {
    constructor(size = 10) {
        this.table = Array(size)
    }
    hash(key){
        let hash=0
        for(let char of key){
            hash+= char.charCodeAt(0)
        }
        return hash % this.table.length
    }

    set(key,value){
        let index = this.hash(key)
        if(!this.table[index]){
            this.table[index] = []
        }
        for(let pair of this.table[index]){
            if(pair[0]==key){
                pair[1]=value
                return
            }
        }
        this.table[index].push([key,value])
    }

    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        for(let pair of bucket){
            if(pair[0]==key){
                return pair[1]
            }
        }
    }



    print() {
        this.table.forEach((bucket, index) => {
            if (bucket) {
                console.log(`Index ${index}:`, bucket);
            }
        });
    }
}
const hashTable = new HashTable()
hashTable.set("rammm","kunna")
hashTable.set("rammm","1")
console.log("andi ondo kunna",hashTable.get("rammm"));
hashTable.print()
console.log(hashTable);
