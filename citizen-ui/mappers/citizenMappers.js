function citizenDataMapping(data) {
  let headingFullName = document.getElementById("heading-fullname");
  headingFullName.innerHTML = data.name;

  let labelSex = document.getElementById("label-sex");
  labelSex.innerHTML = data.sex;

  let labelAddress = document.getElementById("label-address");
  labelAddress.innerHTML = data.current_address;

  let valueNik = document.getElementById("value-nik");
  valueNik.innerHTML = data.NIK;

  let dateBirth = document.getElementById("value-birth-date");
  dateBirth.innerHTML = data.birth_date;

  let birthPlace = document.getElementById("value-birth-place");
  birthPlace.innerHTML = data.birth_place;

  let valueSex = document.getElementById("value-sex");
  valueSex.innerHTML = data.sex;

  let occupation = document.getElementById("value-occupation");
  occupation.innerHTML = data.occupation;

  let religion = document.getElementById("value-religion");
  religion.innerHTML = data.religion;

  let bloodType = document.getElementById("value-blood-type");
  bloodType.innerHTML = data.blood_type;

  let marriageStatus = document.getElementById("value-marriage-status");
  marriageStatus.innerHTML = data.married_status;

  let address = document.getElementById("value-address");
  address.innerHTML = data.current_address;
}
