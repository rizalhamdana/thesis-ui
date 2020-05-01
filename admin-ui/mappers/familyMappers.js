function familyRecordsTableMapping(data, isListView = false) {
  var limit = data.lenght >= 5 ? 5 : data.length;
  for (var i = 0; i < limit; i++) {
    var tableRow = document.createElement("tr");

    var familyCardNumber = document.createElement("th");
    familyCardNumber.innerHTML = data[i].family_card_number;

    var headOfHousehold = document.createElement("td");
    headOfHousehold.innerHTML = data[i].head_of_household;

    var familyMembersCount = document.createElement("td");
    familyMembersCount.innerHTML = data[i].family_members.length;

    tableRow.appendChild(familyCardNumber);
    tableRow.appendChild(headOfHousehold);
    tableRow.appendChild(familyMembersCount);

    if (isListView) {
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
        "forms/familyForm.html?family_card_number=" +
        data[i].family_card_number;
      anchorDetails.setAttribute("href", url);
      anchorDetails.setAttribute("class", "ni ni-badge");

      action.appendChild(anchorDetails);
      tableRow.appendChild(action);
    } else {
      var address = document.createElement("td");
      address.innerHTML = data[i].address;
      tableRow.appendChild(address);
    }
    document.getElementById("familyRecords").appendChild(tableRow);
  }
}

function familyFormMapping(data) {
  const familyCardNumber = document.getElementById("family-card-number");
  familyCardNumber.innerHTML = "Family Card Number: " + data.family_card_number;

  const husbandNIK = document.getElementById("input-head-of-household");
  husbandNIK.value = data.head_of_household;

  const rtrwField = document.getElementById("input-rt-rw");
  rtrwField.value = data.rt + "/" + data.rw;

  const villageField = document.getElementById("input-village-kelurahan");
  villageField.value = data.village_or_kelurahan;

  const subDistrictField = document.getElementById("input-subdistrict");
  subDistrictField.value = data.subdistrict;

  const cityRegencyField = document.getElementById("input-city-regency");
  cityRegencyField.value = data.district_or_municipality;

  const provinceField = document.getElementById("input-province");
  provinceField.value = data.province;

  const isVerifiedLogo = document.getElementById("is-verified");
  const verifiedClass = data.verified_status
    ? "ni ni-check-bold"
    : "ni ni-fat-remove";
  isVerifiedLogo.setAttribute("class", verifiedClass);

  const number = document.getElementById("input-family-card-number");
  number.value = data.family_card_number;

  members = data.family_members;
  var limit = members.length;
  for (var i = 0; i < limit; i++) {
    const nik = document.createElement("td");
    nik.innerHTML = members[i].NIK;

    const name = document.createElement("td");
    name.innerHTML = members[i].name;

    const sex = document.createElement("td");
    sex.innerHTML = members[i].sex;

    const birthday = document.createElement("td");
    birthday.innerHTML = members[i].birth_date;

    const religion = document.createElement("td");
    religion.innerHTML = members[i].religion;

    occupation = document.createElement("td");
    occupation.innerHTML = members[i].occupation;

    const marriageStatus = document.createElement("td");
    marriageStatus.innerHTML = members[i].married_status;

    const familyRelStatus = document.createElement("td");
    familyRelStatus.innerHTML = members[i].family_relationship_status;

    tableRow = document.createElement("tr");

    tableRow.appendChild(nik);
    tableRow.appendChild(name);
    tableRow.appendChild(sex);
    tableRow.appendChild(birthday);
    tableRow.appendChild(religion);
    tableRow.appendChild(occupation);
    tableRow.appendChild(marriageStatus);
    tableRow.appendChild(familyRelStatus);

    document.getElementById("familyMembersTable").appendChild(tableRow);
  }

  if (data.verified_status) {
    document.getElementById("verify-button").style.visibility = "hidden";
  }
}
