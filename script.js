const fs = require('fs')

fs.readFile('./index.html', 'utf-8', (error, data) => {
    fs.writeFileSync('./index.html', `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    </body>
</html>`, () => {})
})

fs.readFile('./style.css', 'utf-8', (error, data) => {
    fs.mkdirSync('./styles', () => { })
    fs.writeFileSync('./styles/style.css', `*{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }`, () => {})
})

setTimeout(()=>{
    fs.unlinkSync('./index.html', ()=>{})
    fs.unlinkSync('./styles/style.css', ()=>{})
}, 5000)

setTimeout(()=>{
    fs.rmdir('./styles', ()=>{})
}, 8000)

fs.readFile('./script2.js', 'utf-8', (error, data) => {
    fs.writeFileSync('./script2.js', `
    const lodash = require('lodash');
    const arr = [1, 2, 3];
    const sum = lodash.sum(arr);
    
    const arr2 = ['a', 'b', 'c', 'a', 'b', 'c'];
    const pull = lodash.pull(arr2, 'c');
    const random = lodash.random(5);
    console.log(sum)
    console.log(pull)
    console.log(random)`, () => {})
})