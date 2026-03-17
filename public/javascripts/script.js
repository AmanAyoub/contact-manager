import Templates from "./templates.js";


function handleAddContact(event) {
  let mainContent = document.querySelector("main");

}

function main(event) {
  let addContact = Array.from(document.querySelectorAll(".add-contact-btn"));

  addContact.forEach(node => {
    node.addEventListener("click", handleAddContact);
  });
}

document.addEventListener("DOMContentLoaded", main);