function solve(){
    let obj = {};
    // let obj = Object.create({});
    obj.extend = function(template){
        for (let prop in template){
            if (typeof template[prop] == 'function')
                Object.getPrototypeOf(obj)[prop] = template[prop]
            else
                obj[prop] = template[prop];
        }
    };
    return obj;
}
let template = {
        extensionMethod: function () { console.log('Extension Method')},
    extensionProperty: 'someString'
};

let myObj = solve();
myObj.extend(template);
