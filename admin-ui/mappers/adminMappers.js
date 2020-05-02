function adminTableMapping(data) {
  for (var i = 0; i < data.length; i++) {
    var tableRow = document.createElement("tr");

    var adminUsername = document.createElement("th");
    adminUsername.innerHTML = data[i].username;

    var adminFullName = document.createElement("td");
    adminFullName.innerHTML = data[i].full_name;

    var adminLocation = document.createElement("td");
    adminLocation.innerHTML = data[i].location;

    tableRow.appendChild(adminUsername);
    tableRow.appendChild(adminFullName);
    tableRow.appendChild(adminLocation);

    document.getElementById("adminRecords").appendChild(tableRow);
  }
}
