function validateRequest(request) {
    let methodPattern = /^(GET|POST|DELETE|CONNECT)$/g;
    let uriPattern = /^((\.)*[a-zA-Z0-9]+)+$/g;
    let versionPattern = /^(HTTP\/1\.1|HTTP\/1\.0|HTTP\/0\.9|HTTP\/2\.0)$/g;
    let messagePattern = /^([^<>&'"\\]*)$/g;

    if (!methodPattern.test(request.method) || request.method == undefined)
        throw new Error(`Invalid request header: Invalid Method`);
    if (!uriPattern.test(request.uri) || !request.uri == '*' || request.uri == undefined)
        throw new Error(`Invalid request header: Invalid URI`);
    if (!versionPattern.test(request.version) || request.version == undefined)
        throw new Error(`Invalid request header: Invalid Version`);
    if (!messagePattern.test(request.message) || request.message == undefined)
        throw new Error(`Invalid request header: Invalid Message`);

    return request;
}
let obj1 = {
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
};
let obj2 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};
let obj3 = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
};
let obj4 = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
};
console.log(validateRequest(obj1));