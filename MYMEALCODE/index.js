const http = require('http');

const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync(`index.html`)
const services = fs.readFileSync(`./services.html`)
const contact  = fs.readFileSync(`./contact.html`)
const clients = fs.readFileSync(`./clients.html`)
const order = fs.readFileSync(`./order.html`)
const send = fs.readFileSync(`./send.html`)
const sign = fs.readFileSync(`./sign.html`)
const menu = fs.readFileSync(`./menu.html`)
const bill = fs.readFileSync(`./bill.html`)

// app.use('/static', express.static('static'))

const server  = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else  if(url == '/services'){
        res.end(services);
    }
    else  if(url == '/contact'){
        res.end(contact);
    }
    else  if(url == '/clients'){
        res.end(clients);
    }
    else  if(url == '/order'){
        res.end(order);
    }
    else  if(url == '/send'){
        res.end(send);
    }
    else  if(url == '/sign'){
        res.end(sign);
    }
    else  if(url == '/menu'){
        res.end(menu);
    }
    else  if(url == '/bill'){
        res.end(bill);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });