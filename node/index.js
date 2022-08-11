const http =  require('http');

//hostname nossa url caminho do servidor
const hostname = '127.0.0.1'
const PORT = process.env.PORT || 3000;


const server =  http.createServer(
function(req,res){
    let url =req.url;
    if(url === '/'){
        res.statusCode = 200;
    res.setHeader('content-type','text/html; charset=utf-8');
    res.end('<h1>olá mundo!</h1>'); 
    }
    if(url === '/sobre'){
        res.statusCode = 200;
    res.setHeader('content-type','text/html; charset=utf-8');
    res.end('<h1>Pagina Sobre</h1>'); 
    }
    if(url === '/contato'){
        res.statusCode = 200;
    res.setHeader('content-type','text/html; charset=utf-8');
    res.end('<h1>Pagina contato</h1>'); 
    } 
    if(url === '/teste'){
        res.statusCode = 200;
    res.setHeader('content-type','text/html; charset=utf-8');
    res.end('<h1>Pagina teste</h1>'); 
    }
    
    
             }



)

server.listen(PORT, hostname, function(){
    console.log(`Servidor rodando em http://${hostname}: ${PORT}`);
})
