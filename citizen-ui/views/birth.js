function showBirth() {
  isAuth();
}
function birthSearch() {
  isAuth();
  const token = getCookie("X-User-Token");
  certificateNumber = document.getElementById("input-search-birth").value;
  if (certificateNumber === "" || certificateNumber === undefined) {
    return;
  }
  birth = getOneBirth(token, certificateNumber);
  birth
    .then((data) => {
      if (data instanceof Error) {
        throw new Error(data);
        return;
      }
      birthDataMapping(data);
    })
    .catch((err) => {
      console.log(err);
      return;
    });
}

function getBirthDataForm() {
  data = { verified_status: false };
  allInputs = document.getElementsByClassName("input-data-birth");
  for (var i = 0; i < allInputs.length; i++) {
    key = allInputs[i].getAttribute("data");
    value = allInputs[i].value;
    data[key] = value;
  }
  data["birth_date"] = stringToDate(data["birth_date"]);
  data["weight"] = parseFloat(data["weight"]);
  data["length"] = parseFloat(data["length"]);
  return data;
}

function insertNewBirth() {
  isAuth();
  const token = getCookie("X-User-Token");
  const birthData = getBirthDataForm();
  console.log(birthData);
  const result = insertOneBirth(token, birthData);
  result
    .then((data) => {
      console.log(data);
      if (data instanceof Error) {
        throw new Error(data);
        return;
      }
      alert(
        "birth has recorded, please wait the verification update by the admin"
      );
      window.location = "../birth.html";
    })
    .catch((err) => {
      alert(err.message);
    });
}

function checkFamily(element) {
  isAuth();
  const token = getCookie("X-User-Token");
  const familyCard = element.value;
  const result = getOneFamily(token, familyCard);
  if (result != null) {
    result
      .then((data) => {
        if (data instanceof Error) {
          throw new Error(data);
          return;
        }
        document.getElementById("input-head-of-household").value =
          data.head_of_household;
        element.setAttribute("class", "form-control is-valid input-data-birth");
        element.parentElement.setAttribute("class", "has-success");
      })
      .catch((err) => {
        element.setAttribute(
          "class",
          "form-control is-invalid input-data-birth"
        );
        element.parentElement.setAttribute("class", "has-danger");
        document.getElementById("input-head-of-household").value = "";
      });
  } else {
    element.setAttribute("class", "form-control is-invalid input-data-birth");
    element.parentElement.setAttribute("class", "has-danger");
    document.getElementById("input-head-of-household").value = "";
  }
}

function checkNIK(element) {
  isAuth();
  const token = getCookie("X-User-Token");
  const nik = element.value;
  const result = getOneCitizen(token, nik);

  target = element.getAttribute("data-target");
  if (result != null) {
    result
      .then((data) => {
        if (data instanceof Error) {
          throw new Error(data);
          return;
        }
        inputMapping(data, target);
        element.setAttribute("class", "form-control is-valid input-data-birth");
        element.parentElement.setAttribute("class", "has-success");
      })
      .catch((err) => {
        element.setAttribute(
          "class",
          "form-control is-invalid input-data-birth"
        );
        element.parentElement.setAttribute("class", "has-danger");
        deleteMapping(target);
      });
  } else {
    element.setAttribute("class", "form-control is-invalid input-data-birth");
    element.parentElement.setAttribute("class", "has-danger");
    deleteMapping(target);
  }
}

function inputMapping(data, target) {
  elementNameId = "input-" + target + "-name";
  field = document.getElementById(elementNameId);
  if (field == undefined || field == null) {
    return;
  }
  field.value = data.name;
}

function deleteMapping(target) {
  elementNameId = "input-" + target + "-name";
  field = document.getElementById(elementNameId);
  if (field == undefined || field == null) {
    return;
  }
  field.value = "";
}
