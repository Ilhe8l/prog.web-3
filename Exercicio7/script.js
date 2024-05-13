const user = document.querySelector("#user"),
    password = document.querySelector("#password"),
    userError = document.querySelector(".error.user"),
    passwordError = document.querySelector(".error.password"),
    btnS = document.querySelector("#btn_submit"),
    form = document.querySelector(".login");


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    Validate(user, userError);
    Validate(password, passwordError);

});

function Validate(compI, compT){
    const input = compI.value.trim();
    compT.textContent = "";
    if(input === ""){
        ShowError(compI, compT, "Deve ser preenchido!")
    }
    else if(input.length < 6 || input.length >30){
        ShowError(compI, compT, "Deve ter entre 6 a 30 caracteres")
    }
    else{
        showSuccess(compI)
    }
}

function showSuccess(compI){
    compI.style.borderColor = "green";
};

function ShowError(compI, compT,  error){
    compI.style.borderColor = "red"
    compT.textContent = error;
    compT.style.color = "red"
};

function showMenu(){
    console.log("a");
    document.querySelector(".dropdown_content").classList.toggle("show");
}
