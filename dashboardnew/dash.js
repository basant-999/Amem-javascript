// Simulated JSON-based user data (in localStorage)
const usersKey = 'users'; // Local storage key
let users = JSON.parse(localStorage.getItem(usersKey)) || {};

// Signup
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('newUsername').value;
  const password = document.getElementById('newPassword').value;

  if (users[username]) {
    alert('Username already exists');
  } else {
    users[username] = password;
    localStorage.setItem(usersKey, JSON.stringify(users));
    alert('Signup successful');
    window.location.href = 'index.html';
  }
});

// Login
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (users[username] && users[username] === password) {
    sessionStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'index.html';
  } else {
    alert('Invalid username or password');
  }
});

// Dashboard and Logout
// document.getElementById('logoutBtn')?.addEventListener('click', function () {
//   sessionStorage.removeItem('isLoggedIn');
//   window.location.href = 'index.html';
// });

// window.onload = function () {
//   if (location.pathname.endsWith('dashboard.html')) {
//     if (!sessionStorage.getItem('isLoggedIn')) {
//       alert('Please log in first');
//       window.location.href = 'index.html';
//     }
//   }
// };