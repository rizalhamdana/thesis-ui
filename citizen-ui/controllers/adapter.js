function makeRequest(
  requestMethod,
  token,
  prefix,
  requestBody = "",
  isLogin = false
) {
  const BASE_URL = "/gateway/";
  const other_params = {
    method: requestMethod,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Token: token,
    },
    mode: "cors",
  };
  if (requestMethod != "GET") {
    other_params.body = JSON.stringify(requestBody);
  }

  const url = BASE_URL + prefix;
  var result = fetch(url, other_params)
    .then(function (response) {
      if (response.ok) {
        return response.text();
      } else if (response.status == 401) {
        throw new Error("Unauthorized");
      } else if (response.status == 404) {
        throw new Error("Not Found");
      } else if (response.status == 403) {
        throw new Error("Forbidden");
      } else if (response.status == 405) {
        throw new Error("Method Not Allowed");
      } else if (response.status == 400) {
        throw new Error("Bad Request");
      } else {
        throw new Error("Could Not Reach API");
      }
    })
    .then(function (data) {
      if (!isLogin) {
        jsonData =
          data == null || data == "" || data == undefined
            ? []
            : JSON.parse(data);
        return jsonData;
      }
      return data;
    })
    .catch(function (error) {
      return error;
    });
  return result;
}
