let rand = Math.random();
let first, second, third;
if (rand<0.33) {
first = "Crazy"
}
else if (rand<0.66 && rand>=0.33) {
    first = "Engine"
}
else {
    first = "Random"
}
if (rand<0.33) {
second = "Amazing"
}
else if (rand<0.66 && rand>=0.33) {
    second = "Foods"
}
else {
    second = "Limitied"
}
if (rand<0.33) {
third = "Fire"
}
else if (rand<0.66 && rand>=0.33) {
    third = "Garments"
}
else {
    third = "Hub"
}
console.log (`${first} ${second} ${third}`);