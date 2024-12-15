let arr = [3,2,4,2,1,5,6]

function mergeSort(arr){
    if(arr.length<2){
        return
    }

    let mid = Math.floor(arr.length/2)
    let left = []
    let right =[]

    for(i=0;i<mid;i++){
        left.push(arr[i])
    }

    for(i=mid;i<arr.length;i++){
        right.push(arr[i])
    }

    mergeSort(left)
    mergeSort(right)
    merge(arr,left,right)
}

    function merge(arr,left,right){
        let i=0;j=0;k=0

        while(i<left.length && j<right.length){
            if(left[i]<right[j]){
                arr[k] = left[i]
                i++
            }else{
                arr[k] = right[j]
                j++
            }
            k++
        }

        while(i<left.length){
            arr[k] = left[i]
            i++
            k++
        }
        while(j<right.length){
            arr[k] = right[j]
            j++
            k++
        }
    }   



mergeSort(arr)
console.log(arr)