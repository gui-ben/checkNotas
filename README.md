# checkNotas

Es un Bot que descarga el .html un sitio web cada cierto tiempo y envía un email cuando detecta un cambio en el .html del sitio. 

La idea surgió porque en una materia no anunciaron cuándo estarían las notas subidas a la página, por lo que los alumnos debían entrar cada cierto tiempo al sitio de la materia. Este Bot se encarga del trabajo sucio (?), y envía un email cuando detecte que las notas fueron subidas (en realidad es más básico, solo se fija que haya cambiado el .html). La gracia es tener configurado el celular o algún dispositvo tal que nos mande una notificación cada vez que nos llega un email, y enterarnos de esa forma.


Para usarlo, hace falta una Terminal Bash y tener instalado Nodejs (con npm y NodeMailer).

Ejemplo de cómo instalarlo/usarlo en Ubuntu:

1. Abrir una Terminal (`Crtl + Alt + t`).
2. Instalar NodeJs (`sudo apt-get install nodejs`)
3. Instalar npm (`sudo apt-get install npm`)
4. Instalar NodeMailer (`npm install nodemailer`)
5. Bajarse el Bot (`git clone https://github.com/ingmrb/checkNotas`). 
6. Ir a la carpeta donde están los 2 archivos. 
7. Editar el archivo checkNotas.sh con la URL que queremos que chequee (por default aparece la URL de la materia Zoología del 2c 2014 FCEN).
    También podemos cambiar la frecuencia con la que visitará la URL (la línea que dice "sleep 120". Por default es 2 minutos (120 segundos). 
8. Editar el archvio enviarEmail.js con el email desde donde vamos a enviarlo (por default tiene que ser gmail) y el o los email/s a donde queremos que nos avise el Bot una vez que detecte un cambio en el .html del sitio.
9. Volver a la Terminal y ejecutar `cd checkNotas` y luego `sh checkNotas.sh`. 
10. El Bot va a descargar el sitio cada x segundos (por default 120) y nos enviará un email cuando detecte que el el sitio fue actualizado.
