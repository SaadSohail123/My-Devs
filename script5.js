console.log ("Saad")
// // let box = document.getElementsByClassName("boxes")
// // box[2].style.backgroundColor = "red"
// document.getElementById("Box3").style.backgroundColor = "green"
//  let box = document.getElementsByClassName("boxes")
// box[2].style.backgroundColor = "red"
// document.querySelector(".boxes").style.backgroundColor = "violet"
// document.querySelectorAll(".boxes").forEach (e=>{
//     e.style.backgroundColor = "green";
// })
let box = document.getElementsByClassName("boxes")
function getRandomColor(){
let val1 = Math.ceil (Math.random() * 255)
let val2 = Math.ceil (Math.random() * 255)
let val3 = Math.ceil (Math.random() * 255)
return `rgb(${val1}, ${val2}, ${val3})`
} 
Array.from(box).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})