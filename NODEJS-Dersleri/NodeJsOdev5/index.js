const http = require('http');

const server = http.createServer((req, res)=>{
    const url = req.url;
    
    switch(url){
        case '/':
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            res.write('<h1>INDEX SAYFASINA HOŞGELDİNİZ</h1>');
            break;
        case '/hakkimda':
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            res.write('<h1>HAKKIMDA SAYFASINA HOŞGELDİNİZ</h1>');
            break;
        case '/iletisim':
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            res.write('<h1>İLETİŞİM SAYFASINA HOŞGELDİNİZ</h1>');
            break;
        default:
            res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
            res.write('<h1>404 NOT FOUND PAGE.</h1>');
    }    
    res.end();
});

const port = 5000;

server.listen(port, ()=>{
    console.log(`Sunucu port ${port} de baslatıldı.`);
})