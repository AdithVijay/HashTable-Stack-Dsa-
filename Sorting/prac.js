let arr = [5,4,6,7,2,3,1]

function quickSort(arr,start,end){
    if(start>=end){
        return arr
    }

    let pindex = partiton(arr,start,end)
    quickSort(arr,start,pindex-1)
    quickSort(arr,pindex+1,end)
}

function partiton(arr,start,end){
    let pivot = arr[end]
    let pindex = start

    for(let i=start;i<end;i++){
        if(arr[i]<pivot){
            swap(arr,i,pindex)
            pindex++
        }
    }
    swap(arr,pindex,end)
    return pindex
}

function swap(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


quickSort(arr,0,arr.length-1)
console.log(arr);
