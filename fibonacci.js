const arr = [0,1]
const number = 100

while(1){
    const res = arr[arr.length-1] + arr[arr.length-2]
    if(res > number) break
    arr.push(res)
}

console.log(arr)