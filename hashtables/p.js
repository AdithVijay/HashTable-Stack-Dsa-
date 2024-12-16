class HashTable {
    constructor(size =10) {
        this.table = Array(size)
    }
    
    hash(key){
        let hash = 0 
        for(let char of key){
            hash+=char.charCodeAt(0)
        }
        return hash%this.table.length
    }
    
    set(key,value){
        let index = this.hash(key)
        if(!this.table[index]){
            this.table[index] = []
        }
        
        for(let pair of this.table[index]){
            if(pair[0]==key){
                pair[1] = value
                return
            }
        }
        this.table[index].push([key,value])
    }
    
    get(){
        let index = this.hash(key)
        for(let pair of this.table[index]){
            if(pair[0]==key){
                return pair[1]
            }
        }
    }
    
    remov(){
        
    }
    
    print() {
        this.table.forEach((bucket, index) => {
            if (bucket) {
                console.log(`Index ${index}:`, bucket);
            }
        })
    }
}
const hashTable = new HashTable()
hashTable.set("name","aditj")
hashTable.print()