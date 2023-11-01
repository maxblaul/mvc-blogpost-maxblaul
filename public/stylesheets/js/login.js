const sendRequest = async (url, method, bodyData) => {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(bodyData),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  };
  
  const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const url = '/api/users/login';
      const method = 'POST';
      const bodyData = { email, password };
  
      sendRequest(url, method, bodyData);
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const url = '/api/users';
      const method = 'POST';
      const bodyData = { name, email, password };
  
      sendRequest(url, method, bodyData);
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  
// const loginFormHandler = async (event) => {
//     event.preventDefault();
  
//     // Collect values from the login form
//     const email = document.querySelector('#email-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();
  
//     if (email && password) {
//       // Send a POST request to the API endpoint
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         // If successful, redirect the browser to the profile page
//         document.location.replace('/dashboard');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };
  
//   const signupFormHandler = async (event) => {
//     event.preventDefault();
  
//     const name = document.querySelector('#name-signup').value.trim();
//     const email = document.querySelector('#email-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();
  
//     if (name && email && password) {
//       const response = await fetch('/api/users', {
//         method: 'POST',
//         body: JSON.stringify({ name, email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };
  
//   document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginFormHandler);
  
//   document
//     .querySelector('.signup-form')
//     .addEventListener('submit', signupFormHandler);
  