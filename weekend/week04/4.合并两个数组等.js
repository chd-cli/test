let arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'], arr2 = ['A', 'B', 'C', 'D'];

let merge = function (arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = arr2[i] + 'Z';
    }
    let arr = arr1.concat(arr2);
    let res = arr.sort().map(item => {
        if (item.indexOf('Z') !== -1) {
            return item.split('')[0];
        }
        return item;
    });
    return res;
};

console.log(merge(arr1, arr2));


// var a = {
//     i: 1,
//     toString() {
//         return this.i++;
//     }
// };
// let i = 1;
// Object.defineProperty(window, 'a', {
//     get() {
//         return i++;
//     }
// })
// if(a == 1 && a == 2 && a == 3){
//  	console.log(true);
// }


var obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
Array.prototype.push = function (val) {
    this[this.length] = val;
    return this.length;
}
obj.push(1);        // obj[obj.length] = 1   ---->   obj[2] = 1
obj.push(2)
// 考察的是push内部实现是怎么处理的
console.log(obj)    // {'2': 1, '3': 2, 'length': 4}


// 双向绑定和 vuex 是否冲突
/* state的值不能直接修改，需要通过commit提交
<input v-model="msg" />

computed() {
    get() {
        return this.$store.state.msg
    },
    set(val) {
        this.$store.commit('change', val);
    }
} */


// 实现 (5).add(3).minus(2)     考察Number的valueOf()
Number.prototype.add = function (n) {
    return this.valueOf() + n;
};
Number.prototype.minus = function (n) {
    return this.valueOf() - n;
};
console.log((5).add(3).minus(2))


var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };

console.log(a.x);   // undefined
console.log(b.x);   // {n:2}


// 冒泡排序
let unorder_array = [4, 3, 1, 10, 8, 7, 16, 22, 13];
let bubbleSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        // 外层循环已经跑完一轮，就没有必要再比较了，减去i
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
};
bubbleSort(unorder_array);
console.log(unorder_array);


// 例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。
let nums1 = [1, 2, 2, 1], nums2 = [2, 2];
let inNums = (nums1, nums2) => {
    let obj = Object.create(null);
    let res = [];
    nums1.forEach(item => {
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item]++;
        }
    });
    nums2.forEach(item => {
        if (obj[item]) {
            res.push(item);
            obj[item]--;
        }
    });
    return res;
};
console.log(inNums(nums1, nums2));


// 'AbC' => 'aBc'
let str = 'AbC';
let transform = s => {
    let arr = s.split('');
    arr = arr.map(item => {
        return item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase();
    });
    return arr.join('');
};
console.log(transform(str));


// 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置
let s = '20ali20byte', t = 'ali';
const findStr = (s, t) => {
    if (s.length < t.length) return -1;
    for (let i = 0; i < s.length; i++) {
        if (s.slice(i, i + t.length) === t) {
            return i;
        }
    }
    return -1;
};
console.log(findStr(s, t));



const role = [
    { pid: -1, path: '/cart', name: '购物车', id: 1, auth: 'cart' },
    { pid: 1, path: '/cart/cart-list', name: '购物车列表', id: 4, auth: 'cart-list' },
    { pid: 4, path: '/cart/cart-list/lottery', auth: 'lottery', id: 5, name: '彩票' },
    { pid: 4, path: '/cart/cart-list/product', auth: 'product', id: 6, name: '商品' },
];
const convert = list => {
    let res = [];
    let map = {};
    list.forEach(item => {
        item.children = [];
        map[item.id] = item;
        if (item.pid === -1) {  // -1是根节点
            res.push(item);
        } else {
            if (map[item.pid]) {
                map[item.pid].children.push(item);
            }
        }
    });
    return res;
}
console.log(convert(role));


let str = 'aabbbbcddddd';
let obj = {};
for (let i = 0; i < str.length; i++) {
    let s = str[i];
    if (!obj[s]) {
        obj[s] = 1;
    } else {
        obj[s]++;
    }
}
console.log(obj);