function showAdminListView() {
  isAuth();
  const token = getCookie("Token");
  result = getAllAdmin(token);

  result.then((data) => {
    if (data instanceof Error) {
      console.log("Error");
      return;
    }
    adminTableMapping(data);
  });
}

function addNewAdmin() {
  isAuth();
  token = getCookie("Token");

  const data = {
    username: document.getElementById("input-username").value,
    full_name: document.getElementById("input-fullname").value,
    location: document.getElementById("input-location").value,
    password: document.getElementById("input-password").value,
  };
  result = insertOneAdmin(token, data);
  result
    .then((data) => {
      if (data instanceof Error) {
        // window.location = "../admin.html";
        alert("Failed to add new Admin");
        return;
      }
      alert("New admin successfully added");
      window.location = "../admin.html";
      return;
    })
    .catch((error) => {
      alert("Failed to add new Admin");
      return;
    });
}
