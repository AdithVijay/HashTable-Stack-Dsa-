let arr = [2,3,1,4,5,6]

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }

    let mid = arr.length/2
    let left =[]
    let right=[]
    let k=0

    for(let i=0;i<mid;i++){
        left.push(arr[i])
    }

    console.log(k++,"=i",left)
    for(let i=mid;i<arr.length;i++){
        right.push(arr[i])
    }

    
    console.log(right) 
    mergeSort(left)
    mergeSort(right)

}

mergeSort(arr)