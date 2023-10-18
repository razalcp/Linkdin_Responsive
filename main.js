function validateEmail() {
    var email = document.getElementById('exampleInputEmail1').value;
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (email === '') {
        document.getElementById(' ').innerText = 'Email is required';
        document.getElementById('emailError').style.color = 'red';
    } else if (!email.match(emailRegex)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address';
        document.getElementById('emailError').style.color = 'red';
    } else {
        document.getElementById('emailError').innerText = '';
    }
}

function validatePassword() {
    var password = document.getElementById('exampleInputPassword1').value;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required';
        document.getElementById('passwordError').style.color = 'red';
    } else if (!password.match(passwordRegex)) {
        document.getElementById('passwordError').innerText = 'Password should have at least 8 characters, including uppercase, lowercase, and a number';
        document.getElementById('passwordError').style.color = 'red';
    } else {
        document.getElementById('passwordError').innerText = '';
    }
}

function validateForm() {
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;

    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required';
        document.getElementById('emailError').style.color = 'red';
        return false;
    }

    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required';
        document.getElementById('passwordError').style.color = 'red';
        return false;
    }

    alert('Sign-in successful');
    return true;
}