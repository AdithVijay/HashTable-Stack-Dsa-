let arr = [1,3,3,4,5,3,6]

for(i=0;i<arr.length;i++){
    let min =i
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[min]){
            min=j
        }
    }
    if(i!=min){
        let temp =arr[i]
        arr[i] =arr[min]
        arr[min] = temp
    }
}
console.log(arr);
