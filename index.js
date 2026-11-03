import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hbfpqzpjdymygebmqifk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiZnBxenBqZHlteWdlYm1xaWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM2NzUxOTcsImV4cCI6MjEwOTI1MTE5N30.fWuzGZMwx6EqzBlXbwhKgPHkFk62fPQ3FRd8zY6yL4g'
const supabase = createClient(supabaseUrl, supabaseKey)
async function obtenerEstudiantes() {
 const { data, error } = await supabase
 .from('estudiantes')
 .select('*')
 if (error) {
 console.log('Error:', error)
 } else {
 console.log('Datos:', data)
 }
}
obtenerEstudiantes()