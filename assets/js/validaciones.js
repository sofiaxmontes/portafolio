export function validaInput (input){
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]){
            validadores[tipoDeInput](input);
    }
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-mensaje-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
        input.style.background = "#e8e8e8";
    };
};
export function validaTextArea(textarea) {
    const tipoDeInput = textarea.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](textarea);
    }

    if(textarea.validity.valid){
        textarea.parentElement.classList.remove("input-container--invalid");
    }else{
        textarea.parentElement.classList.add("input-container--invalid");
        textarea.parentElement.querySelector(".input-mensaje-error").innerHTML = mostrarMensajeDeError(tipoDeInput, textarea);
        textarea.style.background = "#e8e8e8";
    }
}
const input = document.querySelector(".caja__respuesta");
const textarea = document.querySelector("#mensaje");
const botonEnviar = document.querySelector("#boton__formulario");
botonEnviar.addEventListener("click", () =>{
    if (input.value == "" && textarea.value == ""){
        alert("No puedo escribirte de vuelta si no rellenas todo el formulario :(");
    }else{
        alert("Tu mensaje se envío, nos escribimos pronto :)");
        input.innerHTML =="";
        textarea.innerHTML == "";
    }
});


const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
];

const mensajesDeError = {
    nombre:{
        valueMissing: "Necesito tu nombre",
    },
    email:{
        valueMissing: "Necesito tu correo electrónico",
        typeMismatch: "¡Hey! este correo no es válido",
    },
    asunto:{
        valueMissing: "Me gustaría saber de qué vamos a hablar",
    },
    mensaje:{
        valueMissing: "Aquí falta escribir cosas bonitas >:(",
    },
};

const validadores = {
    nacimiento: (input) => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach((error) =>{
        if (input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
};