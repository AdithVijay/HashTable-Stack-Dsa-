let arr=[4,2,1,34,5,6]

for(i=0;i<arr.length-1;i++){
    let minindex = i  
    for(let j=i+1;j<arr.length;j++) {
        if(arr[j]>arr[minindex]){
            minindex = j
        }
    }
    if(minindex!==i){
        let temp = arr[i]
        arr[i] = arr[minindex]
        arr[minindex]=temp
    }
}