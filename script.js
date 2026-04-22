const chatMessages = document.getElementById("chatMessages");

function addMessage(text, className) {
  const message = document.createElement("div");
  message.className = className;
  message.innerText = text;
  chatMessages.appendChild(message);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const userText = input.value.trim();

  if (userText === "") return;

  addMessage(userText, "user-message");
  input.value = "";

  setTimeout(() => {
    addMessage("This is a demo response.", "bot-message");
  }, 500);
}

function sendFAQ(text) {
  addMessage(text, "user-message");

  setTimeout(() => {
    addMessage("This is a FAQ demo response.", "bot-message");
  }, 500);
}
