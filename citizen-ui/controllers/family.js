function getOneFamily(token, cardNumber) {
  console.log(cardNumber);
  if (cardNumber == null || cardNumber == "" || cardNumber == undefined) {
    return null;
  }
  const url = "family/" + cardNumber;
  return makeRequest("GET", token, url);
}

function updateOneFamily(token, cardNumber, data) {
  const url = "family/" + cardNumber;
  return makeRequest("PUT", token, url, data);
}
