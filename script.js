// let form=document.querySelector("form");
// let nom=form.elements['nom'];
// let pnom=form.elements['prenom'];
// console.log(nom.value);
// console.log(pnom.value);
// let char=/^[a-zA-Z-\s]$/;
// form.addEventListener('submit',function(event){
//     event.preventDefault();
//     if(nom.value.length==0){
//         let error=document.getElementById("error");
//         error.innerText="The box is obligatory please fill in the box";
//         error.style.color="red";
//     }else if (char.test(nom.value)=false){
//         error.innerText="The box is obligatory please fill in the box";
//         error.style.color="red";
//     }
// })

// let email="Salma4s@gmail.com"
// let char = /^[a-zA-Z0-9-]+@[a-zA-Z]+\.[a-z]+$/;
// console.log(char.test(email));

let form = document.querySelector("form");
let pwd = form.elements["pwd"];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let char = /^[a-zA-Z0-9._-]{6,12}$/;
  let inputs = form.elements;
  let invMess = document.querySelector(".invalid_password");
  if (inputs["pwd"].value.length == 0) {
    inputs["pwd"].className = "is_invalid";
    invMess.textContent = "Please Enter a Password";
  } else if (inputs["pwd"].value.length != 0 && inputs["pwd"].value.match(char)) {
    inputs["pwd"].className = "is_valid";
    invMess.textContent = "Valid password";
    // recuperation de la valeur saisi qui est valide
    const pwd = inputs["pwd"].value;
    console.log(pwd);
    console.log(pwd.value);
  }
});
