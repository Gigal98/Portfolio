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