let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value == "" || email.value == "" || password.value == "") {
    alert("please fill all the data");
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    setInterval(() => {
      location.href = "signin.html";
    }, 2000);
  }
});
// making the hamburger menu

let hamburger = document.querySelector(".hamburger");
let lists = document.querySelectorAll("ul");
hamburger.addEventListener("click", () => {
  lists.forEach((list) => {
    list.classList.toggle("active");
  });
});
