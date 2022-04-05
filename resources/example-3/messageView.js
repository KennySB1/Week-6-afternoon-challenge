class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.deleteButton = document.querySelector('#hide-message-button')
    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
    this.deleteButton.addEventListener('click', () => {
      this.hideMessage()
    })


  }

  displayMessage() {
    const mainContainer = document.querySelector('#main-container')
    const newDiv = document.createElement('div')
    newDiv.id = 'message'
    newDiv.innerText = "This message displayed by JavaScript"
    mainContainer.append(newDiv)
    console.log('Thanks for clicking me!');
  }

  hideMessage() {

      const messageToDelete = document.querySelector('#message')
      messageToDelete.remove()

  }
}

module.exports = MessageView;