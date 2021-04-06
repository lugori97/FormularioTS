
let formulario = document.getElementById("formulario");

let rut:any = document.getElementById("rut");

let mensaje:any = document.getElementById("mensaje");

let digitoverificador:any = document.getElementById("digitoverificador");


let checkboxes:any = document.querySelectorAll("input[checkbox]")



let radial:any = document.querySelectorAll("input[radio]")


function radios(radial:any): boolean{
    let flag = 0;

    for(let i = 0; i < radial.length; i++){
        radial[i].addEventListener('change', function(){
             if(radial[i].target.checked)
                  flag++;
    });
    if(flag == 0){
        return false;
    }
    return true;
}

}
function check(checkboxes:any):boolean{
    let count = 0;

    for(let i = 0; i < checkboxes.length; i++){
        checkboxes[i].addEventListener('change', function(){
             if(checkboxes[i].checked)
             console.log("pase por aqui")
                  count++;
    });
    if(count == 0){
        return false;
    }
    return true;
}
    
}
function validar(linea:any): boolean {
    if(isNaN(linea)){
        return false;
    }
        return true;
    
}
function validardigito(caracter:any): boolean {
    if(isNaN(caracter) && caracter==="k"){
        return true;
    }else if(isNaN(caracter)){
        return false;
    }else{
        return true;
    }

}



formulario.addEventListener("submit", function(evento){
    
    evento.preventDefault();
    if(radios(radial)){
        console.log("true");
    }
   if(check(checkboxes)){
    console.log("true");
   }
    


    if(validar(rut.value) && validardigito(digitoverificador.value)){
        
        console.log(rut.value);
        formulario.style.display="none";
        mensaje.style.display = "block";
        mensaje.innerHTML="hemos recibido sus datos, pronto nos estaremos comunicando con usted";
        mensaje.style.color="red";
    }else{
        alert("Debes haber cometido un error en uno o mas de los siguientes campos: \n-rut invalido \n-digito verificador invalido\n");
        console.log("rut invalido");
    }
    
});
