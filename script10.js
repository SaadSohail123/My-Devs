console.log ("Promises")
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a<0.5) {
    reject("No the random was not supporting you")
}
else {
    setTimeout(() => {
        console.log ("I was done")
    resolve("Saad")
    }, 3000);
}
});

prom1.then((a)=>{
    console.log (a)
}).catch((err)=>{
    console.log (err)
})