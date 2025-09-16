console.log ("I am console")
console.log ("I am console 2")
setTimeout(() => {
    console.log ("I am settimeout")
}, 0);
setTimeout(() => {
    console.log ("I am settimeout 2")
}, 0);
console.log ("I am console 3")
const callback = (arg => {
    console.log (arg)
});
function loadScript(src, callback) {
    let script = document.createElement ("script")
    script.src = src
    script.onload = ()=> callback("Saad")
    document.head.append (script)
}
loadScript ("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js", callback)