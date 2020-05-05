var apiGatewayURL = "http://192.168.1.8:31679";

function getAllBirth(token) {
  const url = apiGatewayURL + "/birth";
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
      console.log(error.message);
      return error;
    });
  return result;
}
function getOneBirth(token, regisNumber) {
  const url = apiGatewayURL + "/birth/" + regisNumber;
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
      console.log(error.message);
      return error;
    });
  return result;
}
function insertBirth() {}
function deleteBirth() {}
function updateOneBirth() {}
function verifyOneBirth(token, regisNumber) {
  const url = apiGatewayURL + "/birth/verif/" + regisNumber;
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
