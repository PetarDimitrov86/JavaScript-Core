function processor(input){
    let listProcessor = (function(){
        let arr = [];
        return {
            add : (element) => arr.push(element),
            remove: (element) => arr = arr.filter(el => el != element),
            print: (bla) => console.log(arr)
        }
    })();
    for (let element of input){
        let operationInfo = element.split(' ');
        let commandType = operationInfo[0];
        let string = operationInfo[1]
        listProcessor[commandType](string);
    }
}
processor(['add hello', 'add again', 'remove hello', 'add again', 'print']);