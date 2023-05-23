const signupModal = document.getElementById("signup-modal");
const myModal = new bootstrap.Modal(signupModal, {
	keyboard: true,
	focus: true,
	backdrop: true,
});

const signupBtn = document.getElementById("signup");
signupModal.addEventListener("click", () => {
	myModal.show();
});
