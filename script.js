const password = document.getElementById("password");
const eyeCont = document.getElementById("eye-cont");
const eye = document.getElementById("eye");
const eyeOff = document.getElementById("eye-off");

eyeCont.addEventListener("click", function() {
  if(password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password"
  }
});

eyeOff.addEventListener("click", () => {
  eye.style.display = "block";
  eyeOff.style.display = "none"
})
eye.addEventListener("click", () => {
  eyeOff.style.display = "inline-block";
  eye.style.display = "none"
})