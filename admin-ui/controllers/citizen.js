var apiGatewayURL = "/gateway";
function getAllCitizen(token) {
  const url = apiGatewayURL + "/citizens";
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
      jsonData = JSON.parse(data);
      return jsonData;
    })
    .catch(function (error) {
      console.log(error.message);
      return error;
    });
  return result;
}
function getOneCitizen(token, nik) {
  const url = apiGatewayURL + "/citizens/" + nik;
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
      } else if (response.status == 404) {
        throw new Error("Not Found");
      } else {
        throw new Error("Could Not Reach API");
      }
    })
    .then(function (data) {
      jsonData = JSON.parse(data);
      return jsonData;
    })
    .catch(function (error) {
      console.log(error.message);
      return error;
    });
  return result;
}
function insertCitizen(token, data) {
  const url = apiGatewayURL + "/citizens";
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
function deleteOneCitizen(token, nik) {
  const url = apiGatewayURL + "/citizens/" + nik;
  const other_params = {
    method: "DELETE",
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
function updateOneCitizen(token, data, nik) {
  const url = apiGatewayURL + "/citizens/" + nik;
  const other_params = {
    method: "PUT",
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
function verifyOneCitizen() {}
