function getOneBirth(token, certificateNumber) {
  const url = "birth/" + certificateNumber;
  return makeRequest("GET", token, url, "", false);
}

function insertOneBirth(token, data) {
  const url = "birth";
  return makeRequest("POST", token, url, data, false);
}
function updateOneBirth(token, certificateNumber) {
  const url = "birth/" + certificateNumber;
  return makeRequest("PUT", token, url, data);
}
