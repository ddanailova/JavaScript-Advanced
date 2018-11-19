function solution() {

    return {
        list: [],
        size: 0,
        add: function (element) {
            this.size++;
            this.list.push(element);
            this.sort();
        },

        remove: function (index) {
            if (index >= 0 && index < this.size) {
                this.list.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {
            if (index >= 0 && index < this.size) {
                return this.list[index]
            }
        },

        sort: function () {
            this.list.sort((a, b) => a - b);
        }
    }
}

let sorted = solution();
sorted.add(15);
sorted.add(13);
sorted.add(-115);
sorted.add(0);
console.log(sorted.list);
console.log(sorted.size);
sorted.remove(3);
console.log(sorted.list);
console.log(sorted.size);
console.log(sorted.get(1));