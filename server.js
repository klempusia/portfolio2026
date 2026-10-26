import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd();
http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost');const name=decodeURIComponent(url.pathname)==='/'?'index.html':decodeURIComponent(url.pathname).slice(1);const file=path.resolve(root,name);if(!file.startsWith(root+path.sep)||name.startsWith('.')){res.writeHead(403).end();return;}const data=await readFile(file);res.writeHead(200,{'Content-Type':({'html':'text/html; charset=utf-8','css':'text/css','js':'text/javascript','svg':'image/svg+xml','png':'image/png'})[path.extname(file).slice(1)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(data);}catch{res.writeHead(404).end('Not found');}}).listen(4173,'127.0.0.1',()=>console.log('Portfolio: http://localhost:4173'));
