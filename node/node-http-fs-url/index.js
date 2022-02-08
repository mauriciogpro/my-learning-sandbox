const fs = require('fs')
const http = require('http')
const { dirname } = require('node:path/win32')
const url = require('url')
/// require my modules
const replaceTemplate = require('./modules/replaceTemplate')
/// require 3rd party modules
const slugify = require('slugify')

/////////////////////////////////////////////////////////
// FILE

//Blocking, synchronous way

// const textIn = fs.readFileSync('./txt/input.txt' , 'utf-8');
// console.log(textIn)
// const textOut = `This what we know: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('../txt/output.txt', textOut);
// console.log('file writen')

//Non Blocking, asynchronous way // Callback example

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   // si el error aparece la funcion no continuara.
//   if (err) return console.log('ERROR!')
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//       console.log(data3);

//         // there is no data here cause isnt a read file
//       fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8', err =>{
//         console.log('!!! Your file has been written !!!')
//       } )
//     });
//   });
// });
// console.log('___ Im a will first cause cant wait the sync. Thus async___');

/////////////////////////////////////////////////////////
// SERVER

// its first 'cause it gonna to execute once
// thats why its sync. cause it gonna be accesible from the beginning
// it will no slow down the api cause its very little data.
// in the exercise we first did it async later change.
// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8')
//   const dataObj = JSON.parse(data);

//   // Create server its executed multiple times
// const server = http.createServer((req,res)=> {
//   console.log(req.url);

//   const pathName= req.url;
//   if(pathName === '/' || pathName === '/overview'){
//     res.end('this is the overview')
//   } else if (pathName === '/product')
//   {
//     res.end('this is a product')

//   } else if (pathName === '/api'){
//      res.writeHead(200, {'Content-type': 'application/json'});
//      res.end(data);
//   } else {
//     res.writeHead(404, {
//       'Content-type':'text/html'
//     })
//     res.end('<h1>Page not found</h1>')
//   }
//   // to see the request /
// });
// //Server has 3 parameters port, host and a callback
// server.listen(8000, '127.0.0.1', () => console.log("Listening on port 8000"))

/////////////////////////////////////////
// TEMPLATE FILLING and URL parse
//tere was herer the function replace template before export-import

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template_overview.html`,
  'utf-8'
)
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template_product.html`,
  'utf-8'
)
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template_card.html`,
  'utf-8'
)

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
  // url parse return info from url if true it gets parsed to an object.
  // by using the sames names of the properties i can destructure the object to variables
  const { query, pathname } = url.parse(req.url, true)

  // Overview page
  if (pathname === '/' || pathname === '/overview') {
    // as we did bedore we call the data in the fisrt line
    // then we add the apropiate header
    res.writeHead(200, { 'Content-type': 'text/html' })

    //use the data from the json to loop and get the info from replaced fuction.
    // after joined all the replace output
    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join('')

    // need to replace the product placeholder
    const output = tempOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHtml)

    res.end(output)
    // Product page
  } else if (pathname === '/product') {
    // use the valor of query to index the array
    const product = dataObj[query.id]
    // use the same replace function to create a new output
    const output = replaceTemplate(tempProduct, product)
    res.end(output)
    //API
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' })
    res.end(data)
    //Not found 404 Not found
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
    })
    res.end('<h1>Page not found</h1>')
  }
})

server.listen(8000, '127.0.0.1', () => console.log('Listening on port 8000'))
