wget http://www.dbbe.fcen.uba.ar/objetos/introduccion-a-la-zoologia-2do-cuatrimestre-P121.html -O notas.html

notasSubidas=0


while [ $notasSubidas -ne 1 ]
do
    sitio="$(wget http://www.dbbe.fcen.uba.ar/objetos/introduccion-a-la-zoologia-2do-cuatrimestre-P121.html -O nuevasNotas.html)"
    if diff notas.html nuevasNotas.html >/dev/null ; then
        sleep 120
    else
        node enviarEmail.js
        notasSubidas=1
        echo "Email enviado. Cambio y fuera."
   fi
done
