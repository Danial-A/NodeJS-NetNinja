const fs = require('fs');

//reading files
// fs.readFile('./docs/blog1.txt', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString())
// });

// console.log('Last line of code');

//Write Files
// fs.writeFile('./docs/blog1.txt',  'Another line added through file system', ()=>{
//     console.log('Line was added to the file');
// });

//Directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) =>{
//         if(err) {
//             console.log(err);
//         }else{
//             console.log("Directory has been created");
//         }
//     })
// }else{
//     fs.rmdir('./assets', (err)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log('Directory has been deleted')
//         }
//     })
// }

//delete files

//if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("File Deleted")
//     })
// }
