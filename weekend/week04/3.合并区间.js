let arr = [[12, 16], [8, 11], [1, 3], [2, 6], [7, 9], [13, 18]];

let merge = function(arr) {
    // 结果数组
    let res = [];
    if (arr.length === 0) return res;
    // 对二维数组通过每一项的头值进行升序排列
    arr.sort((a, b) => a[0] - b[0]);
    // 给排好序的第一项赋给结果数组的第一项
    res[0] = arr[0];
    // pre用来记录前一项的尾值不大于当前项头值的索引
    let pre = 0;

    // 遍历数组
    for (let i = 1; i < arr.length; i++) {
        if (arr[i][0] <= arr[pre][1]) {
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], arr[i][1]);
        } else {
            pre = i;
            res.push(arr[i]);
        }
    }

    return res;
};

console.log(merge(arr));