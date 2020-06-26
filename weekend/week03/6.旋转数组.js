// 输入: [1,2,3,4,5,6,7] 和 k = 3
// 输出: [5,6,7,1,2,3,4]

let arr = [1,2,3,4,5,6,7], k = 3;

var rotate = function(arr, k) {
    let after = arr.slice(-k);
    let before = arr.slice(0, arr.length - k);
    return [...after, ...before];
};

// console.log(rotate(arr, k));

var rotate2 = (arr, k) => {
    return arr.splice(arr.length - k).concat(arr);
};
// console.log(rotate2(arr, k));

