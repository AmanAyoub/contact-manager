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
  }
}
export default Templates;