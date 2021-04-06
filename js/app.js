var formulario = document.getElementById("formulario");
var rut = document.getElementById("rut");
var mensaje = document.getElementById("mensaje");
var digitoverificador = document.getElementById("digitoverificador");
var checkboxes = document.querySelectorAll("input[checkbox]");
var radial = document.querySelectorAll("input[radio]");
function radios(radial) {
    var flag = 0;
    var _loop_1 = function (i) {
        radial[i].addEventListener('change', function () {
            if (radial[i].target.checked)
                flag++;
        });
        if (flag == 0) {
            return { value: false };
        }
        return { value: true };
    };
    for (var i = 0; i < radial.length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
}
function check(checkboxes) {
    var count = 0;
    var _loop_2 = function (i) {
        checkboxes[i].addEventListener('change', function () {
            if (checkboxes[i].checked)
                console.log("pase por aqui");
            count++;
        });
        if (count == 0) {
            return { value: false };
        }
        return { value: true };
    };
    for (var i = 0; i < checkboxes.length; i++) {
        var state_2 = _loop_2(i);
        if (typeof state_2 === "object")
            return state_2.value;
    }
}
function validar(linea) {
    if (isNaN(linea)) {
        return false;
    }
    return true;
}
function validardigito(caracter) {
    if (isNaN(caracter) && caracter === "k") {
        return true;
    }
    else if (isNaN(caracter)) {
        return false;
    }
    else {
        return true;
    }
}
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    if (radios(radial)) {
        console.log("true");
    }
    if (check(checkboxes)) {
        console.log("true");
    }
    if (validar(rut.value) && validardigito(digitoverificador.value)) {
        console.log(rut.value);
        formulario.style.display = "none";
        mensaje.style.display = "block";
        mensaje.innerHTML = "hemos recibido sus datos, pronto nos estaremos comunicando con usted";
        mensaje.style.color = "red";
    }
    else {
        alert("Debes haber cometido un error en uno o mas de los siguientes campos: \n-rut invalido \n-digito verificador invalido\n");
        console.log("rut invalido");
    }
});
