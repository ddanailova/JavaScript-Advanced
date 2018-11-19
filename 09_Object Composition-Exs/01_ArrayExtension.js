(function solution(arr) {

    Array.prototype.last = function () {
       let indexLast = this.length-1;

       return this[indexLast];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        return this.slice(0,n);
    };

    Array.prototype.sum = function () {
        return this.reduce((a,b)=>a+b);
    };

    Array.prototype.average = function () {
        return (this.sum())/this.length;
    };
})();
