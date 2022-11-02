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

    $("#button-bergabung").click(function() {
        window.location.href = "./bergabung.html";
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

        $("#nama-akun-simpanan").html(sessionStorage.getItem("akun"));
    }
    else {
        $("#button-masuk").show();
        $("#dropdown-button-akun").hide();

        $("#menu-akun-login").hide();
    }
    
    $("#button-simpanan").click(function() {
        window.location.href = "./simpanan.html";
    });

    $("#button-pinjaman").click(function() {
        window.location.href = "./pinjaman.html";
    });

    $("#button-laporan").click(function() {
        window.location.href = "./laporan.html";
    });
    $("#button-dasar-hukum").click(function() {
        window.location.href = "./hukum.html";
    });

    $("#button-peraturan").click(function() {
        window.location.href = "./peraturan.html";
    });

    $("#button-hak-dan-kewajiban").click(function() {
        window.location.href = "./hak-kewajiban.html";
    });

    $("#button-lokasi").click(function() {
        window.location.href = "./lokasi.html";
    });

    $("#button-blog").click(function() {
        window.location.href = "./blog.html";
    });
});