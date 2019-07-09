let email = prompt('Please enter your email.');
const userEmail = 'user@gmail.com';
const adminEmail = 'admin@gmail.com';
const minEmailLength = 6;
const minPassLength = 5;
const userPass = 'UserPass';
const adminPass = 'AdminPass';
let password;
let changePassUser;
let changePassAdmin;
let newAdminPass;
let newAdminPassConfirm;
let newUserPass;
let newUserPassConfirm;

if (email === null || email === ''){
    alert('Canceled.');
} else if (email.length > 0 && email.length < minEmailLength){
    alert(`I don't know any emails having name length less than 6 symbols`);
} else if (email === userEmail){
    password = prompt('Please enter your password');
    if(password === userPass){
        changePassUser = confirm('Do you want to change your password?'); 
    } else if(password === null || password === '') {
        alert('Canceled.');
    } else {
        alert('Wrong password');
    }
} else if (email === adminEmail){
    password = prompt('Please enter your password');
    if (password === adminPass){
        changePassAdmin = confirm('Do you want to change your password?'); 
    } else if(password === null || password === '') {
        alert('Canceled.');
    } else {
        alert('Wrong password');
    }
} else {
    alert(`I don’t know you`);
}

if(changePassAdmin){
    password = prompt('Please enter your password');
    if (password === adminPass) {
        newAdminPass = prompt('Please enter your new password');
        if (newAdminPass.length < minPassLength) {
            alert(`It’s too short password. Sorry.`);
        } else {
            newAdminPassConfirm = prompt('Please enter your new password');
        }
    } else if(password === null || password === '') {
        alert('Canceled.');
    } else {
        alert('Wrong password');
    }
} else if(changePassUser){
    password = prompt('Please enter your password');
    if (password === userPass) {
        newUserPass = prompt('Please enter your new password');
        if (newUserPass.length < minPassLength) {
            alert(`It’s too short password. Sorry.`);
        } else {
            newUserPassConfirm = prompt('Please enter your new password');
        }
    } else if(password === null || password === '') {
        alert('Canceled.');
    } else {
        alert('Wrong password');
    }
} else if (changePassAdmin !== undefined || changePassUser !== undefined) {
    alert('You have failed the change.');
}


if (newAdminPass !== undefined) {
    if (newAdminPass === newAdminPassConfirm) {
        alert('You have successfully changed your password.');
    } else {
        alert('You wrote the wrong password.');
    }
}


if (newUserPass !== undefined) {
    if (newAdminPass === newAdminPassConfirm) {
        alert('You have successfully changed your password.');
    } else {
        alert('You wrote the wrong password.');
    }
}

