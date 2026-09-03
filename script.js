document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("start-btn");
  var message = document.getElementById("message");

  if (!button || !message) {
    return;
  }

  function showMessage() {
    message.textContent = "You're all set — welcome aboard! 🎉";
    message.classList.add("visible");
  }

  // Mouse (and touch/keyboard-via-Enter-or-Space, since "click" covers all of these
  // for a <button> element)
  button.addEventListener("click", showMessage);
});