$(document).ready(function() {

    $("#button-masuk").click(function() {
        window.location.href = "./login.html";
    });
    
    $("#button-keluar").click(function() {
        sessionStorage.removeItem("akun");
        window.location.reload();
    });

    if (sessionStorage.getItem("akun") != null) {
        $("#button-masuk").hide();
        $("#dropdown-button-akun").show();

        $("#nama-akun").html(sessionStorage.getItem("akun"));
    }
    else {
        $("#button-masuk").show();
        $("#dropdown-button-akun").hide();
    }
});