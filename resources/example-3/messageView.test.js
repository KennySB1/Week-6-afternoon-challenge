/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    const messageInput = document.querySelector('#message-input')
    messageInput.value = "KEENY"
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message').innerText).toBe("KEENY")
  });

  it('hides the message on click', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    const deleteButtonEl = document.querySelector('#hide-message-button')
    buttonEl.click();
    deleteButtonEl.click();
    expect(document.querySelector('#message')).toBeNull();

  })
});