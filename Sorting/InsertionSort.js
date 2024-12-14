let arr = [3,2,5,3,2,1]

for(let i=1;i<arr.length;i++){
    let value = arr[i]
    let hole = i

    while(hole>0 && arr[hole-1]>value){
        arr[hole] = arr[hole-1]
        hole = hole-1
    }
    arr[hole] = value
}
console.log(arr);
