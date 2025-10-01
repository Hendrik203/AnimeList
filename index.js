//login.html Login
/*
const lusername = "taylor";
const lpassword = "123";
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

if (loginBtn) {

loginBtn.addEventListener("click", () => {
  const enterUN = document.getElementById("username").value;
  const enterPW = document.getElementById("password").value;

  if (enterUN === lusername && enterPW === lpassword) {
    message.style.color = "green";
    message.textContent = "Welcome user!";
    console.log("New User logged in!");

    sessionStorage.setItem("loggedIn", "true");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid credentials!";
    console.log("Invalid credentials!");
  }
});

}

//index.html Logout

  if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }

  document.getElementById("logout").addEventListener("click", () => {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "login.html";
  });
*/