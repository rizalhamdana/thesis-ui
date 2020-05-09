const apiGatewayURL = "http://192.168.1.9:31679";

function getAllAdmin(token) {
  const url = apiGatewayURL + "/admin";
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

function insertOneAdmin(token, data) {
  const url = apiGatewayURL + "/admin";
  const other_params = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Token: token,
    },
    mode: "cors",
    body: JSON.stringify(data),
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
