function generatePassword() {
  // stores numbers, letters, and characters in consts
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXY";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  // Prompts the user for password requirements
  const includeLowercase = confirm("Include lowercase letters?");
  const includeUppercase = confirm("Include uppercase letters?");
  const includeNumbers = confirm("Include numbers?");
  const includeSpecialChars = confirm("Include special characters?");

  // returns following message if user doesn't confirm any prompts
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumbers &&
    !includeSpecialChars
  ) {
  }

  // Combines slected character sets into one string
  let charSet = "";
  if (includeLowercase) charSet += lowercaseChars;
  if (includeUppercase) charSet += uppercaseChars;
  if (includeNumbers) charSet += numberChars;
  if (includeSpecialChars) charSet += specialChars;

  // Generates a password of user length (between 8 and 128 characters)
  const passwordLength = prompt(
    "Enter a password length between 8 and 128 charaxrerss:"
  );
  const passwordLengthInt = parseInt(passwordLength, 10);

  if (
    isNaN(passwordLengthInt) ||
    passwordLengthInt < 8 ||
    passwordLengthInt > 128
  ) {
    alert("Please enter a password length between 8 and 128 characters!");
    return "";
  }

  let password = "";
  for (let i = 0; i < passwordLengthInt; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(randomIndex);
  }

  return password;
}

// sets consts generateButton and PasswordTextarea
const generateButton = document.getElementById("generate");
const passwordTextarea = document.getElementById("password");

// adds event listener on click to generate button
generateButton.addEventListener("click", function () {
  const generatedPassword = generatePassword();
  passwordTextarea.value = generatedPassword;
});
