let s = 'abc1234efs123456sdsjsjs12345678910';

let matched = s.match(/(\d+)/g);
s = Math.max(...matched);
console.log(s);