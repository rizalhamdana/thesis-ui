function familyDataMapping(data) {
  let certificateNumberValue = document.getElementById(
    "value-certificate-number"
  );
  certificateNumberValue.innerHTML = "No: " + data.family_card_number;

  let headOfHousehold = document.getElementById("value-head-of-household");
  headOfHousehold.innerHTML = data.head_of_household;

  let valueRTRW = document.getElementById("value-rt-rw");
  valueRTRW.innerHTML = data.rt + "/" + data.rw;

  let kelurahan = document.getElementById("value-village-kelurahan");
  kelurahan.innerHTML = data.village_or_kelurahan;

  let subdistrict = document.getElementById("value-subdistrict");
  subdistrict.innerHTML = data.subdistrict;

  let cityRegency = document.getElementById("value-city-regency");
  cityRegency.innerHTML = data.district_or_municipality;

  let province = document.getElementById("value-province");
  province.innerHTML = data.province;

  const members = data.family_members;

  for (let i = 0; i < members.length; i++) {
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
}
