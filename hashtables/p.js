class HashTable {
    constructor(size=10) {
        this.table = Array(size)
    }

    hash(key){
        let hash = 0
        for(let char of key){
            hash+=char.charCodeAt(0)
        }
        console.log(hash)
        return hash % this.table.length
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

    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            for(let pair of bucket){
                if(pair[0]==key){
                    return pair[1]
                }
            }
        }
        return undefined
    }

    print(){
        this.table.forEach((x,i)=>{
            console.log(x,i);
        })
    }

}
function countChecking(str){
    const hashTable = new HashTable()
    hashTable.print()
    for(char of str){
        let count = hashTable.get(char) || 0;
        hashTable.set(char,count+1)
        hashTable.print()
    } 
    let maxcount = 0
    let maxChar =null

    hashTable.table.forEach((bucket)=>{
        if(bucket){
            for(let [char,count] of bucket){
                if(count>maxcount){
                    maxcount = count
                    maxChar = char
                }
            }
        }
    })
    console.log(maxChar,maxcount);
    
    
}
const hashTable = new HashTable()
    
let str ="adithaaa"
countChecking(str)