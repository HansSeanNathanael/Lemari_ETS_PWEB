
$(document).ready(function() {
    $("#form-login").validate({
        rules: {
            nama: {
                alphanumeric: true,
                diawaliHuruf: true,
                minlength: 8,
                maxlength: 16
            },
            pin: {
                digits: true,
                minlength: 6,
                maxlength: 6
            }
        },
        messages: {
            nama: {
                alphanumeric: "Format hanya huruf dan angka",
                diawaliHuruf: "Diawali oleh alfabet",
                minlength: "Panjang nama 8-12 karakter",
                maxlength: "Panjang pin 8-12 karakter",
                required: "Kolom harus diisi"
            },
            pin: {
                digits: "Pin harus angka",
                minlength: "Panjang pin 6 angka",
                maxlength: "Panjang pin 6 angka",
                required: "Kolom harus diisi"
            }
        },
        submitHandler: function(form) {
            sessionStorage.setItem("akun", $("#input-nama").val());
            window.location.href = "./index.html";
        }
    });
});

$.validator.addMethod("alphanumeric", function(value, element) {
    return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
}, "Format hanya huruf dan angka");

$.validator.addMethod("diawaliHuruf", function(value, element) {
    return this.optional(element) || /^[a-zA-Z].*$/.test(value);
}, "Diawali oleh alfabet");

function login() {
    $("#form-login").submit();
}