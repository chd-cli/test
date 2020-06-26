let arr = [0,0,0,1,2,3];

const moveZero = (arr) => {
    let n = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            arr[n++] = arr[i];
        }
    }
    // 补后面的0
    for (let i = n; i < arr.length; i++) {
        arr[i] = 0;
    }
};
moveZero(arr);
console.log(arr);