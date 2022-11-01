$(document).ready(function() {

    $("#button-masuk").click(function() {
        window.location.href = "./login.html";
    });
    
    $("#button-kelola-akun").click(function() {

    });

    $("#halaman-pertaruan").click(function() {
        window.location.href = "./peraturan.html";
    });
    
    $("#button-keluar").click(function() {
        sessionStorage.removeItem("akun");
        window.location.reload();
    });

    if (sessionStorage.getItem("akun") != null) {
        $("#button-masuk").hide();
        $("#dropdown-button-akun").show();

        $("#menu-akun-login").show();
        $("#nama-akun").html(sessionStorage.getItem("akun"));
    }
    else {
        $("#button-masuk").show();
        $("#dropdown-button-akun").hide();

        $("#menu-akun-login").hide();
    }
});