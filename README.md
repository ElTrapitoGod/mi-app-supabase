# Mi app Supabase

Práctica de Node.js con Supabase: consulta de estudiantes, formulario HTML e inicio de sesión por correo.

## Requisitos y arranque

Necesitas Node.js 22 o posterior y la dependencia @supabase/supabase-js. En PowerShell, usa npm.cmd install si hace falta.

Copia Project URL y la clave anon (o publishable) a las variables SUPABASE_URL y SUPABASE_ANON_KEY del archivo .env local. .env está excluido de Git. No uses una clave secret/service_role.

Para consultar desde Node: node index.js

Para iniciar el formulario: npm.cmd run start y abre http://localhost:3000. Crea una cuenta; si Supabase pide confirmar el correo, confírmalo y luego inicia sesión. Después agrega filas desde el formulario. Para detener el servidor pulsa Ctrl+C.

La tabla public.estudiantes debe tener id autoincremental, nombre text y carrera text.

## RLS

Mantén RLS activado. En Supabase SQL Editor ejecuta para que usuarios autenticados puedan consultar e insertar:

    create policy "estudiantes_select_authenticated" on public.estudiantes for select to authenticated using (true);
    create policy "estudiantes_insert_authenticated" on public.estudiantes for insert to authenticated with check (true);

Si ya existe alguna política con el mismo nombre, no la dupliques. node index.js usa anon sin iniciar sesión y requiere una política SELECT anon. Una política anon permite acceso público; usa solo datos ficticios si la mantienes. No publiques información real de estudiantes mediante una política pública.
