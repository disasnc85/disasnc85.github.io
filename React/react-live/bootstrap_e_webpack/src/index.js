import modal from "/bootstrap/js/src/modal";

const signupModal = document.getElementById("signup-modal");
const myModal = new modal(signupModal, {
	keyboard: true,
	focus: true,
	backdrop: true,
});

const signupBtn = document.getElementById("signup");
signupModal.addEventListener("click", () => {
	myModal.show();
});
