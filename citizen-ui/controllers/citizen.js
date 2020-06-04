function getOneCitizen(token, nik) {
  if (nik == "" || nik == undefined || nik == null) {
    return null;
  }
  const result = makeRequest("GET", token, "citizens/" + nik);
  return result;
}
