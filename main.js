let username = document.getElementById('username');
let password = document.getElementById('password');
let submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', submit);

function submit(e) {
    e.preventDefault();
    if (username.value == '' || password.value == ''){
        alert('Please fill your username and password');
    }else{
        console.log('Good Job!');
    }
}