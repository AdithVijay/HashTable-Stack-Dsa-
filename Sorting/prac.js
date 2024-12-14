let arr = [3,2,4,5,6]

for(i=1;i<arr.length;i++){
    let value = arr[i]
    let hole = i

    if(hole>0 && arr[hole-1]>arr[hole]){
        arr[hole] = arr[hole-1]
        hole--
    }
    arr[hole] = value
}
console.log(arr);
