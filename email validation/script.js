function generate() {
    var emailinput = document.getElementById('email');
    var result = document.getElementById('result');
    var validationError = document.getElementById('error');

    var mainnput = emailinput.value.trim();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(mainnput)) {
        result.textContent = mainnput + "      is a valid email address";
        validationError.textContent = '';
    } else {
        result.textContent = '';
        validationError.textContent = mainnput + "    is not a valid mail Address .";
    }
}