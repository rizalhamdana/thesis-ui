function birthRecordTableMapping(data, isListView = false){
    var limit = data.lenght >= 5 ? 5 : data.length;
    for(var i=0;i<limit;i++){
        var tableRow = document.createElement("tr");
        
        var birthCertificateNumber = document.createElement("th");
        birthCertificateNumber.innerHTML = data[i].birth_regis_number;

        var name = document.createElement("td");
        name.innerHTML = data[i].name;

        var sex = document.createElement("td");
        sex.innerHTML = data[i].sex;      
        
        
        tableRow.appendChild(birthCertificateNumber);
        tableRow.appendChild(name);
        tableRow.appendChild(sex);

        if(isListView){

            const parentsName = document.createElement("td")
            parentsName.innerHTML = data[i].father_name + "|" + data[i].mother_name
            tableRow.appendChild(parentsName)

            const verifiedStatus = document.createElement("td");
            const verifiedValue = document.createElement("span");
            const verifiedClass = data[i].verified_status ? "ni ni-check-bold" : "ni ni-fat-remove"
            verifiedValue.setAttribute("class", verifiedClass);
            
            verifiedStatus.appendChild(verifiedValue);
            tableRow.appendChild(verifiedStatus);

            const action = document.createElement("td");
            const anchorDetails = document.createElement("a");
            var url = "forms/marriageForm.html?married_certificate_number="+data[i].married_certificate_number;
            anchorDetails.setAttribute("href", url);
            anchorDetails.setAttribute("class", "ni ni-badge");

            action.appendChild(anchorDetails);
            tableRow.appendChild(action);
        }

        document.getElementById("familyRecords").appendChild(tableRow);
    }
}


