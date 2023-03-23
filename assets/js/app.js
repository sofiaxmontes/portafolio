import { validaInput, validaTextArea} from "./validaciones.js";

const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

inputs.forEach((input) =>{
    input.addEventListener("blur", (input) =>{
        validaInput(input.target);
    });
});

textareas.forEach((textarea) =>{
    textarea.addEventListener("blur", (textarea) =>{
        validaTextArea(textarea.target);
    });
});