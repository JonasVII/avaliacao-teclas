document.onkeydown = Pega_Tecla;

function Pega_Tecla(e) 
{   
    e = e || window.event;

    tecla = e.keyCode;
    console.log(tecla); // MOSTRA O CÓDIGO DA TECLA PRESSIONADA
    element = document.getElementById(tecla)
    element.classList.remove('tecla')
    element.classList.add('oba')
    setTimeout(pisca,300);
                function pisca()
                {
                    element.classList.remove("oba");
                    element.classList.add("tecla");
                }
    
}