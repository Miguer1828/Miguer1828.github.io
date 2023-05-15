const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const editBtn = document.getElementById("boton-editar");
const deleteBtn = document.getElementById("boton-eliminar");
const paragraph = document.getElementById("parrafo-sobre-mi");

document.addEventListener("DOMContentLoaded", function() {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (storedUsername === "admin" && storedPassword === "admin123") {
    loginBtn.style.display = "none";
    showEditBtns();
    logoutBtn.style.display = "block";
  } else {
    hideEditBtns();
    logoutBtn.style.display = "none";
  }

  logoutBtn.addEventListener("click", function() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";
    hideEditBtns();
  });
});

function showEditBtns() {
  const editBtns = document.querySelectorAll(".edit-btn, .eliminar-btn");
  editBtns.forEach(function(btn) {
    btn.style.display = "block";
  });
}

function hideEditBtns() {
  const editBtns = document.querySelectorAll(".edit-btn, .eliminar-btn");
  editBtns.forEach(function(btn) {
    btn.style.display = "none";
  });
}

function editParagraph(paragraph) {
  const newContent = prompt("Ingrese el nuevo contenido:");
  if (newContent) {
    paragraph.textContent = newContent;
  }
}

function deleteParagraph(paragraph) {
  if (confirm("¿Está seguro que desea eliminar este párrafo?")) {
    paragraph.remove();
  }
}

function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
}

editBtn.addEventListener("click", function() {
  editParagraph(paragraph);
});

deleteBtn.addEventListener("click", function() {
  deleteParagraph(paragraph);
});

logoutBtn.addEventListener("click", function() {
  logout();
  hideEditBtns();
  loginBtn.style.display = "block";
  logoutBtn.style.display = "none";
});
