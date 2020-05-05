function showBirthsListView() {
  isAuth();
  token = getCookie("Token");
  console.log(token);

  birth = getAllBirth(token);
  birth.then((data) => {
    if (data instanceof Error) {
      document.getElementById("numberBirth").innerHTML = "-";
      return;
    }
    console.log(data);

    birthRecordTableMapping(data, true);
  });
}

function showBirthForm() {
  isAuth();
  const token = getCookie("Token");
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const regisNumber = urlParams.get("birth_regis_number");

  const birth = getOneBirth(token, regisNumber);
  birth.then((data) => {
    if (data instanceof Error) {
      errorMessage = document.getElementById("error-message");
      errorMessage.innerHTML = data;

      hiddenForm = document.getElementById("form-section");
      hiddenForm.style.visibility = "hidden";
      return;
    }

    birthFormMapping(data);
  });
}

function verifyBirth() {
  isAuth();
  const token = getCookie("Token");

  const regisNumber = document.getElementById("input-regis-number").value;
  console.log(regisNumber);

  const verify = verifyOneBirth(token, regisNumber);
  verify.then((data) => {
    if (data instanceof Error) {
      alert("Failed Verifying Birth Record: " + data);
      window.location = "../birth.html";
      return;
    }
    alert("Verifying birth record success");
    window.location = "../birth.html";
  });
}
