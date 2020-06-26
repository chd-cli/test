// 实现 hasProperty(o, 'x.y.z') 方法，可以判断 o.x.y.z 路径是否存在

function hasProperty(obj, props) {
    let prop = props.split('.');

    while (prop.length) {
        let key = prop.shift();
        if (obj.hasOwnProperty(key)) {
            obj = obj[key];
        } else {
            return false;
        }
    }

    return true;
}

let o = {
    name: 'obj',
    x: {
        y: {
            z: 110
        }
    }
};
console.log(hasProperty(o, 'name'))  // true
console.log(hasProperty(o, 'x.y.z'))  // true
console.log(hasProperty(o, 'a.x'))  // false
console.log(hasProperty(o, 'x.y.k'))  // false
console.log(hasProperty(o, 'name.p'))  // false
