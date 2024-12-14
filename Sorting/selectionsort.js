let arr = [1,5,3,2,4]

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
