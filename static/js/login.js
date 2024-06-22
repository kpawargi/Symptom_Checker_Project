const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));

const doctorImage = document.getElementById('doctorImage');

signUpButton.addEventListener('click', function () {
    doctorImage.style.left = '890px';
    doctorImage.style.transform = 'scaleX(-1)'
    doctorImage.style.transitionDelay = '400ms'
});

signInButton.addEventListener('click', function () {
    doctorImage.style.left = '230px';
    doctorImage.style.transform = 'scaleX(1)'
    doctorImage.style.transitionDelay = '400ms'
});