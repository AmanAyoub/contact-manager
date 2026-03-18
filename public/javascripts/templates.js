const Templates = {
  newContact: function () {
    return `
    <div class="create-contact">
      <h2 class="create-contact-title">Create Contact</h2>
      <hr class="create-contact-divider">
      <form class="create-contact-form">
        <div class="form-group">
          <label for="full-name">Full name:</label>
          <input type="text" id="full-name" name="full_name" class="form-input" autocomplete="off" required>
        </div>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" id="email" name="email" class="form-input" autocomplete="off" required>
        </div>
        <div class="form-group">
          <label for="telephone">Telephone number:</label>
          <input type="text" id="telephone" name="phone_number" class="form-input" autocomplete="off" required>
        </div>
        <div class="form-actions">
          <button type="submit" class="form-btn submit-btn">Submit</button>
          <button type="button" class="form-btn cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
    `
  },

  noContacts: function () {
    return `
    <div class="main-content">
      <div class="no-contacts">
        <p>There is no contacts.</p>
        <button class="add-contact-btn">Add Contact</button>
      </div>
    </div>
    `
  },

  contactList: function (contacts) {
    let contactCards = contacts.map(contact => {
      return this.contactCard(contact);
    });
    let template = `
      <div class="contacts-list">
        ${contactCards.join(' ')}
      </div>
      `;

    return template;
  },

  contactCard: function(contact) {
    return `
    <div class="contact-card">
      <h3>${contact.full_name}</h3>
      <p><strong>Phone Number:</strong><br>${contact.phone_number}</p>
      <p><strong>Email:</strong><br>${contact.email}</p>
      <div class="card-actions">
        <button class="card-btn edit-btn"><span class="icon">✏️</span> Edit</button>
        <button class="card-btn delete-btn" data-id=${contact.id}><span class="icon">🗑️</span> Delete</button>
      </div>
    </div>`
  },

  noContactsFound(searchTerm) {
    return `
    <div class="search-empty-result">
      There is no contacts starting with <strong>${searchTerm}.</strong>
    </div>`;
  }
}
export default Templates;