function showBirthsListView(){
    isAuth()
    token = getCookie("Token")
    console.log(token)

    birth = getAllBirth(token);
    birth.then(data => {
        if (data instanceof Error){
            document.getElementById("numberMarriage").innerHTML = "-"
            return
        }
        console.log(data);

        birthRecordTableMapping(data, true)
    })
}