// Selectors
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateButton = document.getElementById('generate');
const passwordOutput = document.getElementById('password');
const copyButton = document.getElementById('copy');

// Character sets
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

// Generate password function
function generatePassword() {
    const length = parseInt(lengthInput.value);
    let charSet = '';

    if (uppercaseCheckbox.checked) charSet += uppercaseChars;
    if (lowercaseCheckbox.checked) charSet += lowercaseChars;
    if (numbersCheckbox.checked) charSet += numberChars;
    if (symbolsCheckbox.checked) charSet += symbolChars;

    if (charSet === '') {
        alert('Please select at least one character type.');
        return '';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    return password;
}

// Event listeners
generateButton.addEventListener('click', () => {
    const password = generatePassword();
    passwordOutput.value = password;
});

copyButton.addEventListener('click', () => {
    if (passwordOutput.value === '') {
        alert('Generate a password first!');
        return;
    }

    passwordOutput.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});
