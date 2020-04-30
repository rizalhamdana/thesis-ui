function showFamiliesListView(){
    isAuth()
    var token = getCookie("Token");
    families = getAllFamilies(token);
    families.then(data => {
    if (data instanceof Error){
        document.getElementById("numberMarriage").innerHTML = "-"
        return
    }
    console.log(data);
    
    familyRecordsTableMapping(data, true);
   });
}

function showFamilyForm(){
    isAuth()
    var token = getCookie("Token");

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const familyCardNumber = urlParams.get("family_card_number");

    result = getOneFamily(token, familyCardNumber)
    result.then(data => {
        if (data instanceof Error){
            errorMessage = document.getElementById("error-message");
            errorMessage.innerHTML = data;

            hiddenForm = document.getElementById("form-section");
            hiddenForm.style.visibility = 'hidden';
            return 
        }
        familyFormMapping(data)

    })
}

function verifyFamilyRecord(){
    isAuth()
    token = getCookie("Token")
    console.log(token)

    const regisNumber = document.getElementById("input-family-card-number").value;
    
    const verify = verifyOneFamily(token, regisNumber)
    verify.then(data => {
        if(data instanceof Error){
            alert("Failed Verifying Record: "+ data)
            return 
        }
        alert("Verifying record success")
        window.location  = "../families.html"

    })

}