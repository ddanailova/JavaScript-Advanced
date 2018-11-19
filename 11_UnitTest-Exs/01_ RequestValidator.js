
function validateRequest(inputObj) {
    let validMethods =['GET', 'POST', 'DELETE','CONNECT'];
    let validVersions =['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1','HTTP/2.0'];
     let uriPattern = /^(\.?[a-zA-Z0-9]*\.?)+$/;
     let specialChars =['<', '>', '\\', '&', '\'', '\"'];

    if(!inputObj.method || !validMethods.includes(inputObj.method)){
        throw new Error(`Invalid request header: Invalid Method`);
        return;
    }
    if(!inputObj.uri || !inputObj.uri.match(uriPattern)){
        throw new Error(`Invalid request header: Invalid URI`);
        return;
    }
    if(!inputObj.version || !validVersions.includes(inputObj.version)){
        throw new Error(`Invalid request header: Invalid Version`);
        return;
    }

    if(inputObj.message === undefined){
        throw new Error(`Invalid request header: Invalid Message`);
        return;
    }
    specialChars.forEach(ch =>{
        if(inputObj.message.includes(ch)){
            throw new Error(`Invalid request header: Invalid Message`);
            return;
        }
    });
    return inputObj;
}

validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/0.9',
    message: ''
});