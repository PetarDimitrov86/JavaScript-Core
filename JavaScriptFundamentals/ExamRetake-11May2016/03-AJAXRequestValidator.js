function printResponses(input){
    let hashCode = input.pop();
    for (let line = 0; line < input.length; line+= 3){
        let method = input[line];
        let credentials = input[line + 1];
        let content = input[line + 2];

        let methodPattern = /^Method: (GET|POST|PUT|DELETE)$/g;
        let credentialsPattern = /^Credentials: (Bearer|Basic) ([a-zA-Z0-9]+)$/g;
        let contentPattern = /^Content: [a-zA-Z0-9.]*$/g;

        if (method.match(methodPattern) == null || credentials.match(credentialsPattern) == null || content.match(contentPattern) == null){
            console.log('Response-Code:400');
            continue;
        }

        let methodType = methodPattern.exec(method)[1];
        let credentialInfo = credentialsPattern.exec(credentials);
        let credentialType = credentialInfo[1];
        if (credentialType == 'Basic' && (methodType == 'POST' || methodType == 'DELETE' || methodType == 'PUT')){
            console.log(`Response-Method:${methodType}&Code:401`);
            continue;
        }

        let authenticationToken = credentialInfo[2];
        let hashCheck = validateHashCode(authenticationToken, hashCode);
        if (hashCheck == false){
            console.log(`Response-Method:${methodType}&Code:403`);
            continue;
        }

        console.log(`Response-Method:${methodType}&Code:200&Header:${authenticationToken}`)
    }

    function validateHashCode(authToken, hash){
        for (let i = 0; i < hashCode.length; i+= 2){
            let repeatCount = Number(hash[i]);
            let letter = hash[i + 1];
            let index = authToken.indexOf(letter);

            let occurenceCount = 0;
            while (index != -1){
                occurenceCount++;
                index = authToken.indexOf(letter, index + 1);
            }
            if (occurenceCount == repeatCount)
                return true;
        }
        return false;
    }
}

printResponses([
    'Method: PUT',
    'Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd/1782452$278///**asd123',
    'Method: POST',
    'Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas',
    'Content: Johnathan',
    'Method: DELETE',
    'Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx',
    'Content: This.is.a.sample.content',
    '2e5g'
]);