function sortedList(){
    let list = (function () {
        let nums = [];
        return {
            size : 0,
            get : function(index) {
                if (index < nums.length && index >= 0)
                    return nums[index]
            },
            add: function(element) {
                nums.push(element);
                this.size++;
                nums = nums.sort((a, b) => a - b)
            },
            remove: function(index) {
                if (index < nums.length && index >= 0){
                    nums.splice(index, 1);
                    nums = nums.sort((a, b) => a - b);
                    this.size--;
                }
            }
        }
    })();
    return list;
}

let list = sortedList();
console.log(list.size);
list.add(5);
list.add(4);
list.add(3);
console.log(list.size);
list.remove(1);
console.log(list.get(0));
console.log(list.get(1));