document.addEventListener("DOMContentLoaded", () => {
  // Set cookies for login
  const logInBtn = document.getElementById('logIn');
  logInBtn.addEventListener('click', () => {
    setCookies();
  });

  // Show cookies from browser
  const showCookiesBtn = document.getElementById('showCookies');
  showCookiesBtn.addEventListener('click', () => {
    showCookies();
  });

});

// Function definitions
function setCookies () {
  let firstName = document.getElementById('firstname').value;
  let email = document.getElementById('email').value;
  
  document.cookie = `firstname=${firstName};`;
  document.cookie = `email=${email};`;

  // console.log(firstName, email);
}

function showCookies () {
  let cookiesPara = document.createElement('p');
  let browserCookies = document.cookie;
  console.log(browserCookies)
  cookiesPara.innerHTML = browserCookies;
  document.body.appendChild(cookiesPara);

}
