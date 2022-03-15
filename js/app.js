var captcha, chars;

function generateNewCaptcha() {
  chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; //characters for captcha
  captcha = chars[Math.floor(Math.random() * chars.length)];

  for (var i = 0; i < 5; i++) {
    captcha = captcha + chars[Math.floor(Math.random() * chars.length)];
  }

  form1.text1.value = captcha;
}

function checkCaptcha() {
  var check = document.getElementById("captchaEnter").value;

  if (captcha == check) {
    alert("Valid Captcha. Congratulations..!!!");
    document.getElementById("captchaEnter").value = "";
  } else {
    alert("Invalid Captcha. Try Again..!!!");
    document.getElementById("captchaEnter").value = "";
  }

  generateCaptcha();
}
