document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const usernameInput = document.getElementById("username");
  const welcomeMessage = document.getElementById("welcome-message");

  // Creazione del tooltip
  const tooltip = document.createElement("p");
  tooltip.textContent = "inserisci 'utente'";
  tooltip.style.position = "absolute";
  tooltip.style.color = "#ffffff";
  tooltip.style.textAlign = "center";
  tooltip.style.display = "none";
  document.body.appendChild(tooltip);

  // Posiziona il tooltip sopra la casella di testo
  function positionTooltip(event) {
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY + 10}px`;
}

// Il tooltip segue il mouse
usernameInput.addEventListener("mousemove", positionTooltip);


 // Mostra il tooltip al passaggio del mouse
 usernameInput.addEventListener("mouseenter", function (event) {
  tooltip.style.display = "block";
  positionTooltip(event);
});

  // Nascondi il tooltip quando il mouse esce dalla casella di testo
  usernameInput.addEventListener("mouseleave", function () {
    tooltip.style.display = "none";
  });

  // Evidenzia il testo durante la digitazione
  usernameInput.addEventListener("focus", function () {
    usernameInput.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  });

  // Ripristina lo stile normale quando si esce dalla casella di testo
  usernameInput.addEventListener("blur", function () {
    usernameInput.style.backgroundColor = "transparent";
  });

  // Funzione di login
  loginBtn.addEventListener("click", function () {
    const username = usernameInput.value.trim();
    if (username !== "") {
      welcomeMessage.textContent = `Benvenuto, ${username}`;
      welcomeMessage.style.display = "block";
      logoutBtn.style.display = "block";
      usernameInput.style.display = "none";
      loginBtn.style.display = "none";
    }
  });

  // Funzione di logout
  logoutBtn.addEventListener("click", function () {
    usernameInput.value = "";
    welcomeMessage.style.display = "none";
    logoutBtn.style.display = "none";
    usernameInput.style.display = "block";
    loginBtn.style.display = "block";
  });
});
