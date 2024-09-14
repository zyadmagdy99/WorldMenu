const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const phone = document.getElementById('phone').value.trim();
const age = document.getElementById('age').value.trim();
const password = document.getElementById('password').value.trim();
const repassword = document.getElementById('repassword').value.trim();



$('#email').on('input', function(e) { 
    const email = document.getElementById('email').value.trim();
    let emailrx=/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

    if(emailrx.test(email))
    {
        $("#emailError").addClass("hidden");
    }else{
        $("#emailError").removeClass("hidden");

    }

});
$('#phone').on('input', function(e) { 
    const phone = document.getElementById('phone').value.trim();
let phonerx=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if(phonerx.test(phone))
    {
        $("#phoneError").addClass("hidden");
    }else{
        $("#phoneError").removeClass("hidden");

    }

});
$('#password').on('input', function(e) { 
    const password = document.getElementById('password').value.trim();
    let passrx=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

    if(passrx.test(password))
    {
        $("#passwordError").addClass("hidden");
    }else{
        $("#passwordError").removeClass("hidden");

    }

});

$('#name').on('input', function(e) { 
    const name = document.getElementById('name').value.trim();


    if(name.length > 3 && name.length < 20 )
    {
        $("#nameError").addClass("hidden");
    }else{
        $("#nameError").removeClass("hidden");

    }

});
$('#age').on('input', function(e) { 
    const age = document.getElementById('age').value.trim();


    if(age > 16 && age < 100 )
    {
        $("#ageError").addClass("hidden");
    }else{
        $("#ageError").removeClass("hidden");

    }

});
$('#repassword').on('input', function(e) { 
    const repassword = document.getElementById('repassword').value.trim();
    const password = document.getElementById('password').value.trim();



    if(password===repassword)
    {
        $("#repasswordError").addClass("hidden");
    }else{
        $("#repasswordError").removeClass("hidden");

    }

});