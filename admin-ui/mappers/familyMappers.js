function familyRecordsTableMapping(data, isListView = false){
    var limit = data.lenght >= 5 ? 5 : data.length;
    for(var i=0;i<limit;i++){
        var tableRow = document.createElement("tr");
        
        var familyCardNumber = document.createElement("th");
        familyCardNumber.innerHTML = data[i].family_card_number;

        var headOfHousehold = document.createElement("td");
        headOfHousehold.innerHTML = data[i].head_of_household;

        var familyMembersCount = document.createElement("td");
        familyMembersCount.innerHTML = data[i].family_members.length;        
        
        tableRow.appendChild(familyCardNumber);
        tableRow.appendChild(headOfHousehold);
        tableRow.appendChild(familyMembersCount);
        
        if (isListView){
            const verifiedStatus = document.createElement("td");
            const verifiedValue = document.createElement("span");
            const verifiedClass = data[i].verified_status ? "ni ni-check-bold" : "ni ni-fat-remove"
            verifiedValue.setAttribute("class", verifiedClass);

            verifiedStatus.appendChild(verifiedValue);
            tableRow.appendChild(verifiedStatus);

            const action = document.createElement("td");
            const anchorDetails = document.createElement("a");
            var url = "forms/marriageForm.html?married_certificate_number="+data[i].family_card_number;
            anchorDetails.setAttribute("href", url);
            anchorDetails.setAttribute("class", "ni ni-badge");

            action.appendChild(anchorDetails);
            tableRow.appendChild(action);
        } else {
            var address = document.createElement("td");
            address.innerHTML = data[i].address;
            tableRow.appendChild(address);
        }
        document.getElementById("familyRecords").appendChild(tableRow);

    }
}
