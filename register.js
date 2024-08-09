const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password === confirmPassword) {
    alert('Successfuly Registered!');
    window.location.href = 'category.html';
  } else {
    alert('Password Do not match!!!')
  }
});