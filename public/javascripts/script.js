import Templates from "./templates.js";
const BASE_URL = "http://localhost:3000";


function handleAddContact(event) {
  let container = document.querySelector("#container");
  container.innerHTML = Templates.newContact();
}

async function fetchContacts() {
  let response = await fetch(BASE_URL + "/api/contacts");
  return await response.json();
}

async function renderContacts() {
  let contacts = await fetchContacts();
  let container = document.querySelector("#container");

  if (contacts.length === 0) {
    container.innerHTML = Templates.noContacts();
  } else {
    container.innerHTML = Templates.contactList(contacts);
  }
}

function main(event) {
  renderContacts();
  let addContact = Array.from(document.querySelectorAll(".add-contact-btn"));

  addContact.forEach(node => {
    node.addEventListener("click", handleAddContact);
  });
}

document.addEventListener("DOMContentLoaded", main);