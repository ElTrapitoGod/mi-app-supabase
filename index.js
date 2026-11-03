import { createClient } from '@supabase/supabase-js'
try { process.loadEnvFile() } catch (e) { if (e.code !== 'ENOENT') throw e }
const url=process.env.SUPABASE_URL, key=process.env.SUPABASE_ANON_KEY
if(!url||!key){console.error('Configura SUPABASE_URL y SUPABASE_ANON_KEY en .env');process.exit(1)}
const supabase=createClient(url,key)
const {data,error}=await supabase.from('estudiantes').select('*').order('id')
if(error){console.error('Error:',error.message);process.exitCode=1}else console.log('Estudiantes:',data)
