class HashTable {
    constructor(size=10) {
        this.table = Array(size)
    }

    hash(key){
        let hash = 0
        for(let char of key){
            hash+= char.charCodeAt(0)
        }
        return hash%this.table.length
    }

    set(key,value){
        let index = this.hash(key)
        if(!this.table[index]){
            this.table[index] = []
        }

        for(let pair of this.table[index]){
            if(pair[0]===key){
                pair[1] = value
                return
            }
        }
        this.table[index].push([key,value])
    }

    remov(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]==key){
                bucket.splice(i,1)
            }
        }
    }

    get(key){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            for(let pair of bucket){
                console.log(pair);
                if(pair[0]==key){
                    console.log("aaaaa",pair[1]);
                    return pair[1]
                }
            }
        }
        return undefined
    }

    print(){
        this.table.forEach((x,i)=>{
            console.log(x,i)
        })
        
    }
}

function reverse(str){
    const hashTable = new HashTable()

    for(char of str){

    }
}

let str = "adith"
reverse(str)
