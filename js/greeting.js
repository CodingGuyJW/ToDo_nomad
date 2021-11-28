const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#log-out");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

function onLogout(){
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginInput.value = "";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else{
    // show the greetings
    paintGreetings(savedUsername);
}

logoutBtn.addEventListener("click", onLogout);
