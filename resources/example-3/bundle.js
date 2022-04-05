(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.buttonEl = document.querySelector("#show-message-button");
          this.deleteButton = document.querySelector("#hide-message-button");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.deleteButton.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          const mainContainer = document.querySelector("#main-container");
          const newDiv = document.createElement("div");
          newDiv.id = "message";
          newDiv.innerText = "This message displayed by JavaScript";
          mainContainer.append(newDiv);
          console.log("Thanks for clicking me!");
        }
        hideMessage() {
          const messageToDelete = document.querySelector("#message");
          messageToDelete.remove();
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
