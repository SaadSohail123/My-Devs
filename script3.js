// let arr = [1, 2, 3, 4, 5];
// console.log (arr.length);
// arr [1] = 10;
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.push(9);
// console.log(arr);
// let arr2 = ["Harry"];
// arr2 [0] = "R";
// console.log (arr2);
let num = [1, 2, 3, 4, 5];
for (let index = 0; index < num.length; index++) {
    const element = num[index];
    console.log(element);
}
num.forEach((value, index, arr)=> {
    console.log (value, index, arr);
});
let obj = {
    a: 1,
    b: 2,
    c: 3.
}
let newarr = [1, 2, 3, 4, 5];
// let newarr2 = [];
// for (let index = 0; index < newarr.length; index++) {
//     const element = newarr[index];
//     newarr2.push(element * 2);
// }
let newarr2 = newarr.map((e) => {
    return e**2;
});
console.log(newarr2);
const greaterthan3 = ((e) => {
    if (e>3) {
        return true;
    }
    else {
        return false;
    }
});
newarr = newarr.filter(greaterthan3);
console.log (newarr);
let newarr3 = [1, 2, 3, 4, 5];
const blue = (a, b) => {
    return a*b
}
console.log (newarr3.reduce(blue));