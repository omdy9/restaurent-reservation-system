let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});
document.addEventListener('DOMContentLoaded', function () {
	const loginBtn = document.querySelector('.login-btn');
	const signupBtn = document.querySelector('.signup-btn');

	loginBtn.addEventListener('click', function () {
		const email = document.querySelector('.login-box .email').value;
		const password = document.querySelector('.login-box .password').value;

		// Here, you would validate the login credentials.
		// For demonstration purposes, let's assume validation is successful.
		// Redirect to home.html
		window.location.href = 'home.html';
	});

	signupBtn.addEventListener('click', function () {
		const name = document.querySelector('.signup-box .name').value;
		const email = document.querySelector('.signup-box .email').value;
		const password = document.querySelector('.signup-box .password').value;
		const confirmPassword = document.querySelector('.signup-box .confirm-password').value;

		// Here, you would validate the signup credentials.
		// For demonstration purposes, let's assume validation is successful.
		// Redirect to home.html
		window.location.href = 'home.html';
	});
});