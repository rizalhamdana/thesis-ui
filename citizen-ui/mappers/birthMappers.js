function birthDataMapping(data) {
  console.log(data);
  const regisNumberField = document.getElementById("value-certificate-number");
  regisNumberField.innerHTML = "No: " + data.birth_regis_number;

  const nameField = document.getElementById("value-name");
  nameField.innerHTML = data.name;

  const sex = document.getElementById("value-sex");
  sex.innerHTML = data.sex;

  const birthPlaceField = document.getElementById("value-birth-place");
  birthPlaceField.innerHTML = data.birth_place;

  const birthDate = document.getElementById("value-birth-date");
  birthDate.innerHTML = data.birth_date;

  const fatherName = document.getElementById("value-fathers-name");
  fatherName.innerHTML = data.father_name;

  const motherName = document.getElementById("value-mothers-name");
  motherName.innerHTML = data.mother_name;

  document.getElementById("card-section").removeAttribute("hidden");
}

function dateConverter(stringDate) {
  const [day, month, year] = stringDate.split("-");
  date = new Date(year, month - 1, day);
  return [date.getFullYear(), month, day].join("-");
}

function stringToDate(dateInput) {
  const [year, month, day] = dateInput.split("-");
  date = new Date(year, month - 1, day);
  return [day, month, date.getFullYear()].join("-");
}
