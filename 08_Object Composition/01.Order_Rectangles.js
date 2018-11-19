(function () {

})();
    function createRect(width, height) {
    let rect = {
        width: width,
        height: height,
        area: () => {
            return this.width * this.height
        },
        compareTo: function (other) {
            let result = this.area() - other.area();
            return result || this.width - other.width;
        }
    };
    return rect;
}

function orderRect(rectData) {
    let rects = [];
    for (let [width, height] of rectData) {
        let rect = createRect(width, height);
        rects.push(rect);
    }
    rects.sort((a,b)=> a.compareTo(b));
    return rects;
}

console.log(orderRect([[10, 5], [5, 12]]))
orderRect([[10, 5], [3, 20], [5, 12]]);