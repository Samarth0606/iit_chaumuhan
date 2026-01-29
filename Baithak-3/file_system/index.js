
const fs = require('fs');
// console.log(fs);

// let data = "Mai hu jaanwar kaat lunga theek hai"
// let data2 = "baad mei chai thandi hojati hai"
// create
// fs.writeFile('mav.txt' , data , {
//     flag: 'w',
//     encoding:'utf-8'
// } , (err,resp)=>{
//     if(err) throw err;
//     else{
//         console.log("File written successfully");
//     }
// } )

// fs.writeFileSync('sam.txt', data2, {
//     flag: 'w',
//     encoding:'utf-8'
// })

// READ

// fs.readFile('sam.txt' , {encoding:'utf-8'} , (err,result)=>{
// fs.readFile('sam.txt' , {} , (err,result)=>{
//     if(err) throw err;
//     else{
//         console.log(result.toString());
//     }
// });

const result = fs.readFileSync('sam.txt',{encoding:"utf-8"});
console.log(result , "res");

// appendFile (update)
// copyFile (copy)
// unlinkFile (delete)

