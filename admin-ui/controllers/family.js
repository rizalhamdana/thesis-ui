var apiGatewayURL = "http://192.168.1.8:31679";
function getAllFamilies(token) {
  const url = apiGatewayURL + "/family";
  const other_params = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Token: token,
    },
    mode: "cors",
  };
  var result = fetch(url, other_params)
    .then(function (response) {
      if (response.ok) {
        return response.text();
      } else if (response.status == 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error("Could Not Reach API");
      }
    })
    .then(function (data) {
      jsonData =
        data == null || data == "" || data == undefined ? [] : JSON.parse(data);

      return jsonData;
    })
    .catch(function (error) {
      return error;
    });
  return result;
}

function getOneFamily(token, familyCardNumber) {
  const url = apiGatewayURL + "/family/" + familyCardNumber;
  const other_params = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Token: token,
    },
    mode: "cors",
  };
  var result = fetch(url, other_params)
    .then(function (response) {
      if (response.ok) {
        return response.text();
      } else if (response.status == 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error("Could Not Reach API");
      }
    })
    .then(function (data) {
      jsonData =
        data == null || data == "" || data == undefined ? [] : JSON.parse(data);

      return jsonData;
    })
    .catch(function (error) {
      return error;
    });
  return result;
}

function verifyOneFamily(token, regisNumber) {
  const url = apiGatewayURL + "/verify/family/" + regisNumber;
  const other_params = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Token: token,
    },
  };
  var result = fetch(url, other_params)
    .then(function (response) {
      if (response.ok) {
        return response.text();
      } else if (response.status == 401) {
        throw new Error("Unauthorized");
      } else if (response.status == 404) {
        throw new Error("Not Found");
      } else {
        throw new Error("Could Not Reach API");
      }
    })
    .then(function (data) {
      console.log(data);
      return data;
    })
    .catch(function (error) {
      console.log(error.message);
      return error;
    });
  return result;
}
