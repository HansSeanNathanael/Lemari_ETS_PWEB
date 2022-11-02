$(document).ready(function() {

    $("#button-masuk").click(function() {
        window.location.href = "./login.html";
    });
    
    $("#button-detail-simpanan").click(function() {
        window.location.href = "./simpanan.html";
    });
    
    $("#button-detail-pinjaman").click(function() {
        window.location.href = "./pinjaman.html";
    });
    
    $("#button-keluar").click(function() {
        sessionStorage.removeItem("akun");
        window.location.href = "./index.html";
    });

    if (sessionStorage.getItem("akun") != null) {
        $("#button-masuk").hide();
        $("#dropdown-button-akun").show();

        $("#nama-akun").html(sessionStorage.getItem("akun"));

        $("#nama-akun-simpanan").html(sessionStorage.getItem("akun"));
    }
    else {
        $("#button-masuk").show();
        $("#dropdown-button-akun").hide();

    }

    $("#button-syarat-pinjaman").click(function() {
        window.location.href = "./peraturan.html#pinjaman";
    });
});