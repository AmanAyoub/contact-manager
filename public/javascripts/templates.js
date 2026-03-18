const Templates = {
  newContact: function () {
    return `
    <div class="create-contact">
      <h2 class="create-contact-title">Create Contact</h2>
      <hr class="create-contact-divider">
      <form class="create-contact-form">
        <div class="form-group">
          <label for="full-name">Full name:</label>
          <input type="text" id="full-name" name="full-name" class="form-input">
        </div>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" id="email" name="email" class="form-input">
        </div>
        <div class="form-group">
          <label for="telephone">Telephone number:</label>
          <input type="text" id="telephone" name="telephone" class="form-input">
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
        <button class="card-btn delete-btn"><span class="icon">🗑️</span> Delete</button>
      </div>
    </div>`
  }
}
export default Templates;