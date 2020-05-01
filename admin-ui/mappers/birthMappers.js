function birthRecordTableMapping(data, isListView = false) {
  var limit = data.lenght >= 5 ? 5 : data.length;
  for (var i = 0; i < limit; i++) {
    var tableRow = document.createElement("tr");

    var birthCertificateNumber = document.createElement("th");
    birthCertificateNumber.innerHTML = data[i].birth_regis_number;

    var name = document.createElement("td");
    name.innerHTML = data[i].name;

    var sex = document.createElement("td");
    sex.innerHTML = data[i].sex;

    tableRow.appendChild(birthCertificateNumber);
    tableRow.appendChild(name);
    tableRow.appendChild(sex);

    if (isListView) {
      const parentsName = document.createElement("td");
      parentsName.innerHTML = data[i].father_name + "|" + data[i].mother_name;
      tableRow.appendChild(parentsName);

      const verifiedStatus = document.createElement("td");
      const verifiedValue = document.createElement("span");
      const verifiedClass = data[i].verified_status
        ? "ni ni-check-bold"
        : "ni ni-fat-remove";
      verifiedValue.setAttribute("class", verifiedClass);

      verifiedStatus.appendChild(verifiedValue);
      tableRow.appendChild(verifiedStatus);

      const action = document.createElement("td");
      const anchorDetails = document.createElement("a");
      var url =
        "forms/birthForm.html?birth_regis_number=" + data[i].birth_regis_number;
      anchorDetails.setAttribute("href", url);
      anchorDetails.setAttribute("class", "ni ni-badge");

      action.appendChild(anchorDetails);
      tableRow.appendChild(action);
    }

    document.getElementById("birthRecords").appendChild(tableRow);
  }
}

function birthFormMapping(data) {
  console.log(data);
  const regisNumberField = document.getElementById("registration-number");
  regisNumberField.innerHTML =
    "Birth Registration Number: " + data.birth_regis_number;

  const nameField = document.getElementById("input-name");
  nameField.value = data.name;

  const sex = document.getElementById("input-sex");
  sex.value = data.sex;

  //   const dateBirth = document.getElementById("input-birth-date");
  //   dateBirth.value = data.mother_nik;

  const birthPlaceField = document.getElementById("input-birth-place");
  birthPlaceField.value = data.birth_place;

  const kindOfBirthField = document.getElementById("input-kind-of-birth");
  kindOfBirthField.value = data.kind_of_birth;

  const birthOrderField = document.getElementById("input-birth-order");
  birthOrderField.value = data.birth_order;

  const birthAssistantField = document.getElementById("input-birth-assistant");
  birthAssistantField.value = data.birth_assistant;

  const weightField = document.getElementById("input-weight");
  weightField.value = data.weight;

  const lengthField = document.getElementById("input-length");
  lengthField.value = data.length;

  const fatherNIK = document.getElementById("input-fathers-nik");
  fatherNIK.value = data.father_nik;

  const fatherName = document.getElementById("input-fathers-name");
  fatherName.value = data.father_name;

  const motherNIK = document.getElementById("input-mothers-nik");
  motherNIK.value = data.mother_nik;

  const motherName = document.getElementById("input-mothers-name");
  motherName.value = data.mother_name;

  const reporterNIK = document.getElementById("input-reporter-nik");
  reporterNIK.value = data.reporter_nik;

  const witnessOneNIK = document.getElementById("input-witness-one-nik");
  witnessOneNIK.value = data.witness_one_nik;

  const witnessTwoNIK = document.getElementById("input-witness-two-nik");
  witnessTwoNIK.value = data.witness_two_nik;

  //   const isVerifiedLogo = document.getElementById("is-verified");
  //   const verifiedClass = data.verified_status
  //     ? "ni ni-check-bold"
  //     : "ni ni-fat-remove";
  //   isVerifiedLogo.setAttribute("class", verifiedClass);

  //   const regisNumber = document.getElementById("input-regis-number");
  //   regisNumber.value = data.regis_number;

  //   if (data.verified_status) {
  //     document.getElementById("verify-button").style.visibility = "hidden";
  //   }
}
