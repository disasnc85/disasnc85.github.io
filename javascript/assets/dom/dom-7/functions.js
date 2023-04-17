import { UserInfo } from "./types.js";

const invalid = "invalid";

export function toggleButtonDisabled(form) {
	const button = document.querySelector("button");
	button.disabled = !form.checkValidity();
}

export function toggleInputValidity(e) {
	const input = e.target;
	console.log(input.classList);
	if (input instanceof HTMLInputElement) {
		if (input.checkValidity()) {
			input.classlist.remove(invalid);
		} else {
			input.classlist.add(invalid);
		}
	}
}

const list = [];

export function formListener(e) {
	e.preventDefault();
	e.stopPropagation();

	let form = e.target;
	if (form instanceof HTMLFormElement) {
		const { mail, psw } = parameters(form);
		list.push(new UserInfo(mail, psw));
		updateList();
		form.reset();
		form.classList.add("was-validated");
		return;
	}
	throw new Error("Evenr is not from a form");
}

export function parameters(form) {
	if (Array === 0) {
	}
	if (form instanceof HTMLFormElement) {
		const emailElement = form.elements[0];
		const pswElement = form.elements[1];
		const mail = emailElement instanceof HTMLInputElement ? emailElement.value : "";
		const psw = pswElement instanceof HTMLInputElement ? pswElement.value : "";
		return { mail, psw };
	}
	throw new Error("not a form");
}

export function updateList() {
	document.querySelector(".list-group").innerHTML = list
		.filter((ciao) => ciao instanceof UserInfo)
		.map(
			({ mail, psw }) =>
				`<li class="list-group-item"> indirizzo mail: ${mail} | password: ${psw} </li>`
		)
		.reduce((previous, current) => previous + current);
}
