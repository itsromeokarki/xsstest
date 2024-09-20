var xhr = new XMLHttpRequest();
        xhr.open("POST", "https:\/\/one.newrelic.com\/graphql", true);
        xhr.setRequestHeader("accept", "*\/*");
        xhr.setRequestHeader("Newrelic-Requesting-Services", "platform|nr1-ui");
        xhr.setRequestHeader("accept-language", "en-US,en;q=0.5");
        xhr.setRequestHeader("content-type", "application\/json; charset=utf-8");
        xhr.withCredentials = true;
        var body = "{\"query\":\"mutation AddUsersToGroups($groupIds:[ID!]!$userIds:[ID!]!){userManagementAddUsersToGroups(addUsersToGroupsOptions:{groupIds:$groupIds userIds:$userIds}){groups{displayName id __typename}__typename}}\",\"variables\":{\"groupIds\":[\"d13adc98-5ece-4bdd-804f-2963c9825a1c\"],\"userIds\":[\"1006224090\"]}}";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhr.send(new Blob([aBody]));
