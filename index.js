$('.account').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
}); //анимация при клике.


let formOne = document.querySelector('#btn-1');
formOne.onclick = function (event) {
    event.preventDefault();
    // данная ф-ия служит для отключения перезагрузки страницы

    let form = document.querySelector('#form_1');

    console.log(form_1.elements.username_registr.value);
    console.log(form_1.elements.password_registr.value);
    console.log(form_1.elements.email_registr.value);
}


let formTwo = document.querySelector('#btn-2');
formTwo.onclick = function (event) {
    event.preventDefault();
    let formLogin = document.querySelector('#form_2');

    console.log(form_2.elements.username.value);
    console.log(form_2.elements.password.value);
}