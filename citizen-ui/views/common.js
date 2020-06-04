function showLogin() {
  console.log("SHOW PAGE LOGIN");
  var isAuthenticated = tokenCheck();
  console.log(isAuthenticated);
  if (isAuthenticated) {
    window.location = "../profile.html";
  }
}

function loginRequest() {
  showLogin();
  requestBody = {
    NIK: document.getElementById("input-nik").value,
    password: document.getElementById("input-password").value,
  };

  result = login(requestBody);
  result
    .then((data) => {
      if (data instanceof Error) {
        throw new Error(data);
      }
      const token = data;
      saveToken(token);
      alert(token);
      document.location = "../profile.html";
    })
    .catch((err) => {
      console.log(err);
      //   document.getElementById("error-message").innerHTML = err;
    });
}
