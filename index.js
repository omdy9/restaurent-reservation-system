let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let admin = document.querySelector(".admin");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
let adminFormSection = document.querySelector(".admin-box"); // Selecting the admin form section

// Updated event listeners for buttons
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
    adminFormSection.classList.remove("form-section-move"); // Hide admin form
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
    adminFormSection.classList.remove("form-section-move"); // Hide admin form
});

admin.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
    adminFormSection.classList.add("form-section-move"); // Show admin form
});

document.addEventListener('DOMContentLoaded', function () {
	const loginBtn = document.querySelector('.login-btn');
	const signupBtn = document.querySelector('.signup-btn');
	const adminBtn = document.querySelector('.admin-btn');

	loginBtn.addEventListener('click', function () {
		slider.classList.remove("moveslider"); // Reset slider position
		formSection.classList.remove("form-section-move");
		const email = document.querySelector('.login-box .email').value;
		const password = document.querySelector('.login-box .password').value;

		// Here, you would validate the login credentials.
		// For demonstration purposes, let's assume validation is successful.
		// Redirect to home.html
		window.location.href = 'home.html';
	});

	signupBtn.addEventListener('click', function () {
		slider.classList.remove("moveslider"); // Reset slider position
		formSection.classList.remove("form-section-move");
		const name = document.querySelector('.signup-box .name').value;
		const email = document.querySelector('.signup-box .email').value;
		const password = document.querySelector('.signup-box .password').value;
		const confirmPassword = document.querySelector('.signup-box .confirm-password').value;

		// Here, you would validate the signup credentials.
		// For demonstration purposes, let's assume validation is successful.
		// Redirect to home.html
		window.location.href = 'home.html';
	});
	adminBtn.addEventListener('click', function () {
		slider.classList.add("moveslider"); // Move slider to middle
		formSection.classList.add("form-section-move");
		const email = document.querySelector('.admin-box .email').value;
		const password = document.querySelector('.admin-box .password').value;

		// Here, you would validate the login credentials.
		// For demonstration purposes, let's assume validation is successful.
		// Redirect to admin.html
		window.location.href = 'admin.html';
	});
});
