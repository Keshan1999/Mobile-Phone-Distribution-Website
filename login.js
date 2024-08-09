// Login form JavaScript code
const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'user' && password === '184609') {
    window.location.href = 'category.html';
    alert('Login Successfull');
  }
  else if(username === 'admin' && password === '121212'){
    window.location.href = 'dashboard.html';
    alert('Login Successfull');
  }
   else {
    alert('Invalid username or password');
  }
});


// Register form JavaScript code
