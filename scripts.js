let menuVisible = false;
//funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.querySelector("#nav").classList="";
        menusVisible = false;
    }else{
        document.querySelector("#nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.querySelector("#nav").classList=""
    menuVisible=false;
}
//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.querySelector("#skills")
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("basesdedatos");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajoEnEquipo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
        habilidades[8].classList.add("eficiencia");
    }
}
// detecto el scrolling para aplicar la animacion de la barra de  habilidades
window.onscroll = function(){
    efectoHabilidades();
}