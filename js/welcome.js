const alertMensaje = document.getElementById("alertMensaje");
const btnEliminar = document.getElementById("btnEliminar");





window.addEventListener("load", function (event) {
    if (localStorage.getItem("nombre") != null) {
        alertMensaje.innerHTML = `Hola <strong>${localStorage.getItem("nombre")}</strong>, 
                                    bienvenido de nuevo`;
    }// if nombre!=null
    alertMensaje.style.display = "block";

})//load

btnEliminar.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem("nombre")
    location.href="welcome.html"

    //alertMensaje.innerHTML = `Por favor, dirigete a Index y escribe tu <strong>nombre</strong>`;
    //history.go(0)     


})//btnEliminar.addEventListener