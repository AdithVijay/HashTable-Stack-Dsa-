function  quickSort(arr,start,end){
    if(start>=end){
        return
    }
    let pindex =  partiton(arr,start,end)
    quickSort(arr,start,pindex-1)
    quickSort(arr,pindex+1,end)
}


function partiton(arr,start,end){
    let pivot = arr[end]
    let pindex = start

    for(i=start;i<end;i++){
        if(arr[i]<=pivot){
            swap(arr, i, pindex)
            pindex++
        }
    }
    swap(arr,pindex,end)
    return pindex
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    }
let arr=[1,8,3,5,6,7,4]
quickSort(arr,0,arr.length-1)
console.log(arr)