function login(data) {
  const url = "citizens/auth";
  return makeRequest("POST", "token", url, data, true);
}

function logout() {
  document.cookie = "X-User-Token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  window.location = "../index.html";
}

function tokenCheck() {
  token = getCookie("X-User-Token");
  return token == undefined || token == "" ? false : true;
}

function saveToken(token) {
  document.cookie = "X-User-Token=" + token;
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function isAuth() {
  isAuthenticated = tokenCheck();
  if (!isAuthenticated) {
    window.location = "../index.html";
  }
  decodeJWT();
}

function decodeJWT() {
  const token = getCookie("X-User-Token");
  const decoded = jwt_decode(token);
  return decoded;
}
