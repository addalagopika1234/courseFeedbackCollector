document.getElementById("adminLoginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  login('admin');
});

document.getElementById("studentLoginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  login('student');
});

function login(role) {
  const username = document.getElementById(role + "Username").value.trim();
  const password = document.getElementById(role + "Password").value;

  const users = JSON.parse(localStorage.getItem(role + "Users")) || [];

  const found = users.find(user => user.username === username && user.password === password);

  if (found) {
    alert("Login successful!");
    window.location.href = role + ".html";
  } else {
    alert("Invalid username or password.");
  }
}

function signup(role) {
  const username = prompt("Enter new username:");
  const password = prompt("Enter new password:");

  if (!username || !password) {
    alert("Signup cancelled or invalid.");
    return;
  }

  const users = JSON.parse(localStorage.getItem(role + "Users")) || [];

  const exists = users.some(user => user.username === username);

  if (exists) {
    alert("Username already exists!");
    return;
  }

  users.push({ username, password });
  localStorage.setItem(role + "Users", JSON.stringify(users));
  alert("Account created successfully! Now log in.");
}
