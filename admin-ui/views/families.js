function showFamiliesListView() {
  isAuth();
  var token = getCookie("Token");
  families = getAllFamilies(token);
  families.then((data) => {
    if (data instanceof Error) {
      document.getElementById("numberMarriage").innerHTML = "-";
      return;
    }
    console.log(data);

    familyRecordsTableMapping(data, true);
  });
}

function showFamilyForm() {
  isAuth();
  var token = getCookie("Token");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const familyCardNumber = urlParams.get("family_card_number");

  result = getOneFamily(token, familyCardNumber);
  result.then((data) => {
    if (data instanceof Error) {
      errorMessage = document.getElementById("error-message");
      errorMessage.innerHTML = data;

      hiddenForm = document.getElementById("form-section");
      hiddenForm.style.visibility = "hidden";
      return;
    }
    familyFormMapping(data);
  });
}

function verifyFamilyRecord() {
  isAuth();
  token = getCookie("Token");
  console.log(token);

  const regisNumber = document.getElementById("input-family-card-number").value;
  console.log(regisNumber);
  const verify = verifyOneFamily(token, regisNumber);
  verify.then((data) => {
    if (data instanceof Error) {
      alert("Failed Verifying Record: " + data);
      return;
    }
    alert("Verifying record success");
    window.location = "../families.html";
  });
}

function updateLocationFamily() {
  isAuth();
  const token = getCookie("Token");
  const regisNumber = document.getElementById("input-family-card-number").value;
  const data = {
    rt: document.getElementById("input-rt").value,
    rw: document.getElementById("input-rw").value,
    village_or_kelurahan: document.getElementById("input-village-kelurahan")
      .value,
    subdistrict: document.getElementById("input-subdistrict").value,
    district_or_municipality: document.getElementById("input-city-regency")
      .value,
    province: document.getElementById("input-province").value,
  };

  resultUpdate = updateFamilyLocation(token, data, regisNumber);
  resultUpdate
    .then((result) => {
      if (result instanceof Error) {
        throw new Error("Failed to Update");
        return;
      }
      alert("Record Updated");
      window.location = "../families.html";
    })
    .catch((err) => {
      alert(err);
    });
}

function modifyUnlock() {
  document.getElementById("dissability").removeAttribute("disabled");
}
