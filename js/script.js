const signinBtn = document.getElementById("signin");
const signupBtn = document.getElementById("signup");
const firstForm = document.getElementById("from1");
const secondForm = document.getElementById("from2");
const container = document.querySelector(".container");
const runame = document.getElementById("runame")
const remail = document.getElementById("remail")
const rpwd = document.getElementById("rpwd")
const lemail = document.getElementById("lemail")
const lpwd = document.getElementById("lpwd")

signinBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
})

signupBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
})

firstForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

function f_reg() {
	alert("register");
}

function f_login() {
	alert("login");
}
