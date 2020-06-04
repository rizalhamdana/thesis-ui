function marriageDataMapping(data) {
  const certificateNumber = document.getElementById("value-certificate-number");
  certificateNumber.innerHTML = data.married_certificate_number;

  const marriagePlace = document.getElementById("value-marriage-place");
  marriagePlace.innerHTML = data.married_place;

  const marriageDateTime = document.getElementById("value-marriage-date-time");
  marriageDateTime.innerHTML = data.married_date + "/" + data.married_time;

  //   const husbandNIK = document.getElementById("value-husbands-nik");
  //   husbandNIK.innerHTML = data.husband_nik;

  const husbandName = document.getElementById("value-husbands-name");
  husbandName.innerHTML = data.husband_name;

  //   const wifeNIK = document.getElementById("value-wifes-nik");
  //   wifeNIK.innerHTML = data.wife_nik;

  const wifeName = document.getElementById("value-wifes-name");
  wifeName.innerHTML = data.wife_name;

  const courtName = document.getElementById("value-court-name");
  courtName.innerHTML = data.court_name;

  const courtDecisionNumber = document.getElementById(
    "value-court-decision-number"
  );
  courtDecisionNumber.innerHTML = data.court_decision_number;

  document.getElementById("card-section").removeAttribute("hidden");
}
