(function () {
    String.prototype.ensureStart = function (str) {
        let currStr = this.valueOf();
        if (currStr.indexOf(str) === 0) {
            return currStr;
        } else {
            return str + currStr;
        }
    };

    String.prototype.ensureEnd = function (str) {
        let currStr = this.valueOf();
        if (currStr.indexOf(str) === currStr.length - str.length) {
            return currStr;
        } else {
            return currStr + str;
        }
    };
    String.prototype.isEmpty = function () {
        return !this.valueOf();

    };
    String.prototype.truncate = function (n) {
        let currStr = this.valueOf();
        if (currStr.length <= n) {
            return currStr;
        }else{
            if(!currStr.includes(' ')){
                if(n>=4){
                    currStr = currStr.slice(0,n-3)+'...';
                }else{
                    currStr='.'.repeat(n);
                }
            }else{
                if (currStr.length>=n){
                    currStr = currStr.slice(0, n);
                    let newStr = currStr.split(' ');
                    newStr.pop();
                    if(newStr.join(' ').length+3>=n){}
                    currStr=newStr.join(' ') +'...';
                }
            }
            return currStr;
        }
    };
    String.format = function (s) {
        let currStr = arguments[0];
        let params =[];
        for (let i = 1; i < arguments.length; i++) {
           params.push(arguments[i]);
        }
        let counter =0;
        for (let param of params) {
            currStr = currStr.replace(`{${counter}}`, param);
            counter++;
        }
        return currStr;
    };
})();

// let str = 'my string';
// str = str.ensureStart('my');
// str = str.ensureStart('hello ');
// str = str.truncate(16);
// str = str.truncate(14);
// str = str.truncate(8);
// str = str.truncate(4);
// str = str.truncate(2);
// str = String.format('The {0} {1} fox',
//     'quick', 'brown');
// str = String.format('jumps {0} {1}',
//     'dog');

let str = 'the quick brown fox jumps over the lazy dog';
str = str.truncate(43);

console.log(str);