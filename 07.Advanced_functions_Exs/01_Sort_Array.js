function sortArray(inputArr, order) {

    let asc = function (a,b) {
        return a-b;
    };

    let desc = function (a,b) {
        return b-a;
    };

    let strategies ={asc, desc};

    return inputArr.sort(strategies[order]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));



function solution(inputArr, order) {
    let sortOrder = {
        asc: (arr) => arr.sort((a,b) => a-b),
        desc: (arr) => arr.sort((a,b) => b-a),
    };
    console.log(sortOrder[order](inputArr.map(Number)));
}

solution([14, 7, 17, 6, 8], 'desc');
