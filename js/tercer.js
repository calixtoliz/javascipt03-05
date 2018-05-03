
/*
function miPrimerFuncion() {
    var ID_A_MODIFICAR="pon_codigo_html";
var texto=
'\
<div class="row">\
<div class="col-2">Tabla del 1 </div>\
<div class="col-1">1</div>\
<div class="col-1">2</div>\
<div class="col-1">3</div>\
<div class="col-1">4</div>\
<div class="col-1">5</div>\
<div class="col-1">6</div>\
<div class="col-1">7</div>\
<div class="col-1">8</div>\
<div class="col-1">9</div>\
<div class="col-1">10</div>\
</div>\
<div class="row">\
<div class="col-2">Tabla del 2 </div>\
<div class="col-1">2</div>\
<div class="col-1">4</div>\
<div class="col-1">6</div>\
<div class="col-1">8</div>\
<div class="col-1">10</div>\
<div class="col-1">12</div>\
<div class="col-1">14</div>\
<div class="col-1">16</div>\
<div class="col-1">18</div>\
<div class="col-1">20</div>\
</div>\
<div class="row">\
<div class="col-2">Tabla del 3 </div>\
<div class="col-1">3</div>\
<div class="col-1">6</div>\
<div class="col-1">9</div>\
<div class="col-1">12</div>\
<div class="col-1">15</div>\
<div class="col-1">18</div>\
<div class="col-1">21</div>\
<div class="col-1">24</div>\
<div class="col-1">27</div>\
<div class="col-1">30</div>\
</div>\
<div class="row">\
<div class="col-2">Tabla del 4 </div>\
<div class="col-1">4</div>\
<div class="col-1">8</div>\
<div class="col-1">12</div>\
<div class="col-1">16</div>\
<div class="col-1">20</div>\
<div class="col-1">24</div>\
<div class="col-1">28</div>\
<div class="col-1">32</div>\
<div class="col-1">36</div>\
<div class="col-1">40</div>\
</div>\
<div class="row">\
<div class="col-2">Tabla del 5 </div>\
<div class="col-1">5</div>\
<div class="col-1">10</div>\
<div class="col-1">15</div>\
<div class="col-1">20</div>\
<div class="col-1">25</div>\
<div class="col-1">30</div>\
<div class="col-1">35</div>\
<div class="col-1">40</div>\
<div class="col-1">45</div>\
<div class="col-1">50</div>\
</div>\
<div class="row">\
<div class="col-2">Tabla del 6 </div>\
<div class="col-1">6</div>\
<div class="col-1">12</div>\
<div class="col-1">18</div>\
<div class="col-1">24</div>\
<div class="col-1">30</div>\
<div class="col-1">36</div>\
<div class="col-1">42</div>\
<div class="col-1">48</div>\
<div class="col-1">54</div>\
<div class="col-1">60</div>\
</div>\
<div class="row">\
<div class="col-2">Tabla del 7 </div>\
<div class="col-1">7</div>\
<div class="col-1">14</div>\
<div class="col-1">21</div>\
<div class="col-1">28</div>\
<div class="col-1">35</div>\
<div class="col-1">42</div>\
<div class="col-1">49</div>\
<div class="col-1">56</div>\
<div class="col-1">63</div>\
<div class="col-1">70</div>\
</div>\
<div class="row">\
<div class="col-2">Tabla del 8 </div>\
<div class="col-1">8</div>\
<div class="col-1">16</div>\
<div class="col-1">24</div>\
<div class="col-1">32</div>\
<div class="col-1">40</div>\
<div class="col-1">48</div>\
<div class="col-1">56</div>\
<div class="col-1">64</div>\
<div class="col-1">72</div>\
<div class="col-1">80</div>\
</div>\
<div class="row">\
<div class="col-2">Tabla del 9 </div>\
<div class="col-1">9</div>\
<div class="col-1">18</div>\
<div class="col-1">27</div>\
<div class="col-1">36</div>\
<div class="col-1">45</div>\
<div class="col-1">54</div>\
<div class="col-1">63</div>\
<div class="col-1">72</div>\
<div class="col-1">81</div>\
<div class="col-1">90</div>\
</div>\
<div class="row">\
<div class="col-2">Tabla del 10 </div>\
<div class="col-1">10</div>\
<div class="col-1">20</div>\
<div class="col-1">30</div>\
<div class="col-1">40</div>\
<div class="col-1">50</div>\
<div class="col-1">60</div>\
<div class="col-1">70</div>\
<div class="col-1">80</div>\
<div class="col-1">90</div>\
<div class="col-1">100</div>\
</div>\
'
;


document.getElementById(ID_A_MODIFICAR).innerHTML=texto;
}
*/



function miPrimerFuncion() {
    var ID_A_MODIFICAR="pon_codigo_html";
var i;
var texto=
        '\
        <div class="row">\
            <div class="col-2">Tabla del 1</div>\
            ';
    for(i=1;i<=10;i=i+1){
    texto+='<div class="col-1">';
    texto+=i*1;
    texto+='</div>';
}
texto+='\
<div class="row">\
<div class="col-2">Tabla del 2 </div>\
<div class="col-1">2</div>\
<div class="col-1">4</div>\
<div class="col-1">6</div>\
<div class="col-1">8</div>\
<div class="col-1">10</div>\
<div class="col-1">12</div>\
<div class="col-1">14</div>\
<div class="col-1">16</div>\
<div class="col-1">18</div>\
<div class="col-1">20</div>\
</div>\
<div class="row">\
<div class="col-2">Tabla del 3 </div>\
<div class="col-1">3</div>\
<div class="col-1">6</div>\
<div class="col-1">9</div>\
<div class="col-1">12</div>\
<div class="col-1">15</div>\
<div class="col-1">18</div>\
<div class="col-1">21</div>\
<div class="col-1">24</div>\
<div class="col-1">27</div>\
<div class="col-1">30</div>\
</div>\
<div class="row">\
<div class="col-2">Tabla del 4 </div>\
<div class="col-1">4</div>\
<div class="col-1">8</div>\
<div class="col-1">12</div>\
<div class="col-1">16</div>\
<div class="col-1">20</div>\
<div class="col-1">24</div>\
<div class="col-1">28</div>\
<div class="col-1">32</div>\
<div class="col-1">36</div>\
<div class="col-1">40</div>\
</div>\
<div class="row">\
<div class="col-2">Tabla del 5 </div>\
<div class="col-1">5</div>\
<div class="col-1">10</div>\
<div class="col-1">15</div>\
<div class="col-1">20</div>\
<div class="col-1">25</div>\
<div class="col-1">30</div>\
<div class="col-1">35</div>\
<div class="col-1">40</div>\
<div class="col-1">45</div>\
<div class="col-1">50</div>\
</div>\
<div class="row">\
<div class="col-2">Tabla del 6 </div>\
<div class="col-1">6</div>\
<div class="col-1">12</div>\
<div class="col-1">18</div>\
<div class="col-1">24</div>\
<div class="col-1">30</div>\
<div class="col-1">36</div>\
<div class="col-1">42</div>\
<div class="col-1">48</div>\
<div class="col-1">54</div>\
<div class="col-1">60</div>\
</div>\
<div class="row">\
<div class="col-2">Tabla del 7 </div>\
<div class="col-1">7</div>\
<div class="col-1">14</div>\
<div class="col-1">21</div>\
<div class="col-1">28</div>\
<div class="col-1">35</div>\
<div class="col-1">42</div>\
<div class="col-1">49</div>\
<div class="col-1">56</div>\
<div class="col-1">63</div>\
<div class="col-1">70</div>\
</div>\
<div class="row">\
<div class="col-2">Tabla del 8 </div>\
<div class="col-1">8</div>\
<div class="col-1">16</div>\
<div class="col-1">24</div>\
<div class="col-1">32</div>\
<div class="col-1">40</div>\
<div class="col-1">48</div>\
<div class="col-1">56</div>\
<div class="col-1">64</div>\
<div class="col-1">72</div>\
<div class="col-1">80</div>\
</div>\
<div class="row">\
<div class="col-2">Tabla del 9 </div>\
<div class="col-1">9</div>\
<div class="col-1">18</div>\
<div class="col-1">27</div>\
<div class="col-1">36</div>\
<div class="col-1">45</div>\
<div class="col-1">54</div>\
<div class="col-1">63</div>\
<div class="col-1">72</div>\
<div class="col-1">81</div>\
<div class="col-1">90</div>\
</div>\
<div class="row">\
<div class="col-2">Tabla del 10 </div>\
<div class="col-1">10</div>\
<div class="col-1">20</div>\
<div class="col-1">30</div>\
<div class="col-1">40</div>\
<div class="col-1">50</div>\
<div class="col-1">60</div>\
<div class="col-1">70</div>\
<div class="col-1">80</div>\
<div class="col-1">90</div>\
<div class="col-1">100</div>\
</div>\
'
;


document.getElementById(ID_A_MODIFICAR).innerHTML=texto;
}



function estudiantes(){
    var alumno=["alumno1","alumno2","alumno3","alumno4","alumno5"]
    var nombre=
    var apellidos=
    var edad=

}

<div class="row">
            <div class="col-3"><b>Alumno</b></div>
            <div class="col-3"><b>Nombre</b></div>
            <div class="col-3"><b>Apellidos</b></div>
            <div class="col-3"><b>Edad</b></div>
        </div>
        <div class="row">
            <div class="col-3">Alumno 1</div>
            <div class="col-3">Ramses</div>
            <div class="col-3">Playa</div>
            <div class="col-3">55</div>
        </div>
        <div class="row">
            <div class="col-3">Alumno 2</div>
            <div class="col-3">Jonathan</div>
            <div class="col-3">El serio</div>
            <div class="col-3">80</div>
        </div>
        <div class="row">
            <div class="col-3">Alumno 3</div>
            <div class="col-3">Liz</div>
            <div class="col-3">Esta bien facil</div>
            <div class="col-3">15</div>
        </div>
        <div class="row">
            <div class="col-3">Alumno 4</div>
            <div class="col-3">Jorge</div>
            <div class="col-3">Albures</div>
            <div class="col-3">30</div>
        </div>
        <div class="row">
            <div class="col-3">Alumno 5</div>
            <div class="col-3">Ricardo</b></div>
            <div class="col-3">Anaya</div>
            <div class="col-3">41</div>
        </div>
        <div class="row">
            <div class="col-3">Alumno 6</div>
            <div class="col-3">Jair</div>
            <div class="col-3">Apellido chino</div>
            <div class="col-3">55</div>
        </div>




