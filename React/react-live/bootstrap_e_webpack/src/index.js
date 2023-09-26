import Modal from "bootstrap/js/dist/modal";
const signupModal = document.getElementById("signup-modal");
const myModal = new Modal(signupModal, {
	keyboard: true,
	focus: true,
	backdrop: true,
});

const signupBtn = document.getElementById("signup");
signupBtn.addEventListener("click", () => {
	myModal.show();
});
