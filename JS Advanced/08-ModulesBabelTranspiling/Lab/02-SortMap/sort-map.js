function mapSort(map, sortCriteria) {
    if (sortCriteria == undefined){
        sortCriteria = function (a, b) {
            return a[0].toString().localeCompare(b[0].toString());
        };
    }

    let sortedMap = new Map();
    for (let [key, value] of Array.from(map).sort(sortCriteria)){
        sortedMap.set(key, value)
    }
    return sortedMap
}

module.exports = mapSort;

/*
let map = new Map();
map.set(3,{age:13,hoby:"Skiing"});
map.set(1,{name:"Stamat",age:29,color:"blue"});
map.set(7,{name:"Yordan",age:3});
let sortedMap = mapSort(map,(a,b)=>a[1].age - b[1].age);
console.log(sortedMap);*/
