import { toggleButtonDisabled, formListener, toggleInputValidity } from "./functions.js"

const divElement = document.createElement("div")
divElement.innerHTML = `<div class="card my-3">
                            <div class="card-body">
                                <ul class="list-group"></ul>
                            </div>
                        </div>`
document.querySelector(".container").append(divElement)

const form = document.querySelector("form")
const emailInput = document.querySelector("#exampleInputEmail")
const passwordInput = document.querySelector("#exampleInputPassword")

form.addEventListener("submit", formListener)
emailInput.addEventListener("input", () => toggleButtonDisabled(form))
passwordInput.addEventListener("input", () => toggleButtonDisabled(form))
emailInput.addEventListener("change", toggleInputValidity)
passwordInput.addEventListener("change", toggleInputValidity)

toggleButtonDisabled(form)
