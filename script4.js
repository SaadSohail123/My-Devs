let num = 6;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log (factorial);
// let num = [1, 2, 3, 4, 5, 6];
// let factorial = 1;
// let newnum = num.reduce ((a ,b) => {
//     return a*b;
// })
// console.log(newnum);