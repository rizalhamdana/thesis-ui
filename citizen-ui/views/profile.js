function showProfile() {
  isAuth();
  const token = getCookie("X-User-Token");
  console.log(token);
  decoded = decodeJWT();
  const nik = decoded.nik;
  const result = getOneCitizen(token, nik);
  result
    .then((data) => {
      if (data instanceof Error) {
        throw new Error(data);
      }
      citizenDataMapping(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
