import Templates from "./templates.js";
const BASE_URL = "http://localhost:3000";
let contacts;

function formDataToJson(data) {
  let obj = {};
  for (let [key, value] of data.entries()) {
    obj[key] = value;
  }

  return obj;
}

async function handleNewContact(event) {
  event.preventDefault();
  
  let data = formDataToJson(new FormData(event.currentTarget));
  data.tags = null;
  await fetch(BASE_URL + "/api/contacts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(data),
  });

  await loadContacts();
}

function handleAddContact(event) {
  let container = document.querySelector("#container");
  container.innerHTML = Templates.newContact();

  let newContactForm = document.querySelector("form");
  newContactForm.addEventListener("submit", handleNewContact);

  let cancelButton = document.querySelector(".cancel-btn");
  cancelButton.addEventListener("click", event => renderContacts(contacts));
}

async function fetchContacts() {
  let response = await fetch(BASE_URL + "/api/contacts");
  contacts = await response.json();
}

function renderContacts(contacts) {
  let container = document.querySelector("#container");

  if (contacts.length === 0) {
    container.innerHTML = Templates.noContacts();
  } else {
    container.innerHTML = Templates.contactList(contacts);
  }
}

function findContacts(term) {
  return contacts.filter(contact => {
    return contact.full_name.toLowerCase().includes(term.toLowerCase());
  });
}

function handleSearch(event) {
  if (event.key === " ") return;
  let searchTerm = event.target.value;

  if (!(/^[\(\)\\\?\.]/g.test(searchTerm))) {
    let contacts = findContacts(searchTerm);
    if (contacts.length === 0) {
      document.querySelector("#container").innerHTML = Templates.noContactsFound(searchTerm);
    } else {
      renderContacts(contacts);
    }
  }
}

async function deleteContact(id) {
  if (confirm("Do you want to delete the contact?")) {
    let response = await fetch(BASE_URL + `/api/contacts/${id}`, {
      method: "DELETE"
    });
  }

}

async function loadContacts() {
  await fetchContacts();
  renderContacts(contacts);
}

async function main(event) {
  await loadContacts();

  let addContact = Array.from(document.querySelectorAll(".add-contact-btn"));
  addContact.forEach(node => node.addEventListener("click", handleAddContact));

  let searchForm = document.querySelector(".search-input");
  searchForm.addEventListener("keyup", handleSearch);


  let container = document.querySelector("#container");
  container.addEventListener("click", async event => {
    let target = event.target;
    if (target.classList.contains("delete-btn")) {
      await deleteContact(target.getAttribute("data-id"));
      await loadContacts();
    }
  });

}

document.addEventListener("DOMContentLoaded", main);