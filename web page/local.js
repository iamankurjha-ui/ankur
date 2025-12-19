function login() {
  const username = document.getElementById('loginusername').value;
  const password = document.getElementById('loginpassword').value;
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (username === storedUsername && password === storedPassword) {
    alert('Login successful!');
    window.location.href = 'home.html';
  } else {
    alert('Invalid username or password');
  }
  return false;
}