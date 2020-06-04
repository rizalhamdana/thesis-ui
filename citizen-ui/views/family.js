function showFamilyCard() {
  isAuth();
  const token = getCookie("X-User-Token");
  decoded = decodeJWT();
  nik = decoded.nik;
  getOneCitizen(token, nik).then((data) => {
    if (data instanceof Error) {
      console.log(data);
    }
    familyCardNumber = data.family_card_number;
    const familyData = getOneFamily(token, familyCardNumber);
    familyData.then((family) => {
      console.log(family);
      familyDataMapping(family);
    });
  });
}
