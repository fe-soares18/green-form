const changeButton = document.querySelector(".change_mode");
const loginContainer = document.querySelector("div#login_input-id");
const regContainer = document.querySelector("div#register_input-id");

changeButton.addEventListener("click", () => {
    console.log("teste");
    changeMode ()
});

function changeMode () {
    if (changeButton.innerHTML === "Registrar" ){
        loginContainer.style.display = "none";
        regContainer.style.display = "flex";
        changeButton.innerHTML = "Entrar";
    } else {
        loginContainer.style.display = "flex";
        regContainer.style.display = "none";
        changeButton.innerHTML = "Registrar";
    }
}