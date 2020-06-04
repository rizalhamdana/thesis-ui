function showMarriage() {
  isAuth();
}

function marriageSearch() {
  isAuth();
  const token = getCookie("X-User-Token");
  certificateNumber = document.getElementById("input-search-marriage").value;
  if (certificateNumber === "" || certificateNumber === undefined) {
    return;
  }
  marriage = getOneMarriage(token, certificateNumber);
  marriage
    .then((data) => {
      if (data instanceof Error) {
        throw new Error(data);
        return;
      }
      marriageDataMapping(data);
    })
    .catch((err) => {
      console.log(err);
      return;
    });
}

function getMarriageDataForm() {
  data = { verified_status: false };
  allInputs = document.getElementsByClassName("input-marriage-data");
  for (var i = 0; i < allInputs.length; i++) {
    key = allInputs[i].getAttribute("data");
    value = allInputs[i].value;
    data[key] = value;
  }
  data["husband_married_numbers"] = parseInt(data["husband_married_numbers"]);
  data["wife_married_number"] = parseInt(data["wife_married_number"]);
  console.log(data);
  return data;
}

function insertMarriage() {
  isAuth();
  const token = getCookie("X-User-Token");
  const data = getMarriageDataForm();
  const result = insertOneMarriage(token, data);
  result
    .then((data) => {
      if (data instanceof Error) {
        throw new Error(data);
        return;
      }
      alert(
        "Marriage data has recorded, please wait the verification update from admin"
      );
      window.location = "../marriage.html";
    })
    .catch((err) => {
      alert(err);
    });
}

function checkNIK(element) {
  isAuth();
  const token = getCookie("X-User-Token");
  const nik = element.value;
  const targetInput = element.getAttribute("data-target");
  const citizen = getOneCitizen(token, nik);
  if (citizen != null) {
    citizen
      .then((data) => {
        if (data instanceof Error) {
          throw new Error(data);
        }
        inputMapping(data, targetInput);
        element.setAttribute(
          "class",
          "form-control is-valid input-marriage-data"
        );
        element.parentElement.setAttribute("class", "has-success");
      })
      .catch((err) => {
        deleteMapping(targetInput);
        element.setAttribute(
          "class",
          "form-control is-invalid input-marriage-data"
        );
        element.parentElement.setAttribute("class", "has-danger");
      });
  } else {
    deleteMapping(targetInput);
    element.setAttribute(
      "class",
      "form-control is-invalid input-marriage-data"
    );
    element.parentElement.setAttribute("class", "has-danger");
  }
}

function inputMapping(data, target) {
  elementNameId = "input-" + target + "-name";
  fieldName = document.getElementById(elementNameId);
  if (fieldName == undefined || fieldName == null) {
    return;
  }
  fieldName.value = data.name;
  elementStatus = "input-" + target + "-status";
  fieldStatus = document.getElementById(elementStatus);
  fieldStatus.value = data.married_status;

  elementFatherNik = "input-" + target + "-fathers-nik";
  fieldFatherNik = document.getElementById(elementFatherNik);
  fieldFatherNik.value = data.NIK_of_father;

  elementMotherNik = "input-" + target + "-mothers-nik";
  fieldMotherNik = document.getElementById(elementMotherNik);
  fieldMotherNik.value = data.NIK_of_mother;
}

function deleteMapping(target) {
  elementNameId = "input-" + target + "-name";
  fieldName = document.getElementById(elementNameId);
  if (fieldName == undefined || fieldName == null) {
    return;
  }
  fieldName.value = "data.name;";
  elementStatus = "input-" + target + "-status";
  fieldStatus = document.getElementById(elementStatus);
  fieldStatus.value = "";

  elementFatherNik = "input-" + target + "-fathers-nik";
  fieldFatherNik = document.getElementById(elementFatherNik);
  fieldFatherNik.value = "";

  elementMotherNik = "input-" + target + "-mothers-nik";
  fieldMotherNik = document.getElementById(elementMotherNik);
  fieldMotherNik.value = "";
}
