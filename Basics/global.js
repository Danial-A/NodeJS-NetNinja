// console.log(global);
global.setTimeout(()=>{
    console.log(__dirname);
    clearInterval(interval)
},3000);

const interval = global.setInterval(() => {
    console.log("Display each second");
}, 1000);