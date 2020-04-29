function getAllFamilies(token){
    const url = "http://192.168.1.3:31679/family"
    const other_params = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Token": token
        },
        mode: "cors"
      };
    var result = fetch(url, other_params)
      .then(function(response) {
        if (response.ok) {
          
          return response.text();
        } else if(response.status==401) {   
          throw new Error("Unauthorized");
        } else {  
          throw new Error("Could Not Reach API");
        }
      })
      .then(function(data) {
            jsonData = data == null || data == '' || data == undefined ? [] : JSON.parse(data);
            
            return jsonData;

      })
      .catch(function(error) {
        return error     
      });
    return result;
}