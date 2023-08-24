const form = document.querySelector(".content__addres");
const nameConfirm = document.querySelector(".input__name");
const emailConfirm = document.querySelector(".input__email");
const parrafo = document.querySelector(".warnigns");
const thanks = document.querySelector(".main__thanks");
const mainForm = document.querySelector('.main')
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnigns  = ""
    let entrar = false;
    let regularEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""

    if(nameConfirm.value.length <5){

        warnigns += `Nombre Invalido ` 
        entrar = true
    }
    if (!regularEmail.test(emailConfirm.value)){
     
        warnigns  += `Email Invalido` 
        entrar = true
   }

   if(entrar){
    parrafo.innerText = warnigns
   }else{
    parrafo.innerHTML = "Enviado"
    thanks.style.display = 'block';
    mainForm.style.display = 'none';
    
   }
});