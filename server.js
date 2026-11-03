import {createServer} from 'node:http'
import {readFile} from 'node:fs/promises'
import {resolve,dirname} from 'node:path'
import {fileURLToPath} from 'node:url'
try {process.loadEnvFile()} catch(e){if(e.code!=='ENOENT')throw e}
const url=process.env.SUPABASE_URL,key=process.env.SUPABASE_ANON_KEY
if(!url||!key){console.error('Configura SUPABASE_URL y SUPABASE_ANON_KEY en .env');process.exit(1)}
const root=dirname(fileURLToPath(import.meta.url))
createServer(async(req,res)=>{
 const route=new URL(req.url,'http://localhost').pathname
 try{
  if(route==='/'){res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});res.end(await readFile(resolve(root,'public/index.html')))}
  else if(route==='/supabase.js'){res.writeHead(200,{'Content-Type':'text/javascript'});res.end(await readFile(resolve(root,'node_modules/@supabase/supabase-js/dist/umd/supabase.js')))}
  else if(route==='/config.js'){res.writeHead(200,{'Content-Type':'text/javascript'});res.end('window.APP_CONFIG='+JSON.stringify({url,key})+';')}
  else{res.writeHead(404);res.end('No encontrado')}
 }catch(e){console.error(e);res.writeHead(500);res.end('Error del servidor')}
}).listen(3000,'127.0.0.1',()=>console.log('Abre http://localhost:3000; Ctrl+C detiene el servidor.'))
