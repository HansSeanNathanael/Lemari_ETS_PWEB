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

    $("#button-peraturan").click(function() {
        window.location.href = "./peraturan.html";
    });

    $("#button-lokasi").click(function() {
        window.location.href = "./lokasi.html";
    });
});