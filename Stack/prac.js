function merge(left,right,arr){
    let leftLength = left.length;
    let rightLength = right.length;

    let l = 0;
    let r =0;
    let k=0;

    while(l<leftLength && r<rightLength){
        if(left[l]<right[r]){
            arr[k]= left[l];
            l++;
        }else{
            arr[k] = right[r];
            r++;
        }
        k++;
    }
    while(l<leftLength){
        arr[k] = left[l];
        k++;
        l++;
    }
    while(r<rightLength){
        arr[k] = right[r];
        k++;
        r++;
    }
}


function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    let mid  = Math.floor(arr.length/2);
   let  left = [];
   let right = [];
    let k=0;

    

    for(let i=0;i<mid;i++){
        left[i] = arr[i];
    }
    for(let j=mid;j<arr.length;j++){
        right[k] = arr[j];
        k++;
    }

    mergeSort(left);
    mergeSort(right);
    merge(left,right,arr)
    return arr;
}

console.log(mergeSort(arr))