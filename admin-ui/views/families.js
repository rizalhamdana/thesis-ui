function showFamiliesListView(){
    isAuth()
    isAuth();
    var token = getCookie("Token");
    // console.log(token)
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