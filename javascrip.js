function convertir() {

    let campo = document.getElementById("temperatura");

    let temperatura = campo.value;

    let unidad = document.getElementById("unidad").value;

    let destino = document.getElementById("unidadDestino").value;

    let resultado = document.getElementById("resultado");

    let mensajeError = document.getElementById("mensajeError");


    

    campo.classList.remove("error");

    mensajeError.innerHTML = "";


    

    if (temperatura == "") {

        campo.classList.add("error");

        mensajeError.innerHTML =
            "Ingrese una temperatura";

        return;
    }


    

    temperatura = Number(temperatura);


    

    if (isNaN(temperatura)) {

        campo.classList.add("error");

        mensajeError.innerHTML =
            "Ingrese solamente números";

        return;
    }


    let conversion;


    

    if (unidad == "celsius" && destino == "fahrenheit") {

        conversion = (temperatura * 9 / 5) + 32;

    }


    

    else if (unidad == "fahrenheit" && destino == "celsius") {

        conversion = (temperatura - 32) * 5 / 9;

    }


    

    else {

        conversion = temperatura;

    }


    conversion = conversion.toFixed(2);


    let simboloOrigen;

    let simboloDestino;


    if (unidad == "celsius") {

        simboloOrigen = "°C";

    } else {

        simboloOrigen = "°F";

    }


    if (destino == "celsius") {

        simboloDestino = "°C";

    } else {

        simboloDestino = "°F";

    }


    resultado.innerHTML =
        temperatura + " " +
        simboloOrigen + " = " +
        conversion + " " +
        simboloDestino;

}