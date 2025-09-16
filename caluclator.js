let random = Math.random();
let a = prompt("Choose your first number");
let b = prompt("Choose your operation");
let c = prompt("Choose your second number");
// let obj = {
//     "+":" +",
//     "-":" -",
//     "*":" *",
//     "/":" /",
// }
if (random > 0.1){
    console.log (`The result is ${a} ${b} ${c}`);
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}
else {
    console.log (`The result is ${a} ${b} ${c}`);
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}