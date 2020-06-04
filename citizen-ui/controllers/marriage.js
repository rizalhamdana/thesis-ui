function getOneMarriage(token, certificateNumber) {
  const url = "married/" + certificateNumber;
  result = makeRequest("GET", token, url);
  return result;
}

function insertOneMarriage(token, data) {
  url = "married/";
  result = makeRequest("POST", token, url, data);
  return result;
}

function updateOneMarriage(token, certificateNumber, data) {
  url = "married/" + certificateNumber;
  result = makeRequest("PUT", token, url, data);
}
