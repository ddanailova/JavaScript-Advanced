function aggregate(inputArr) {
    console.log(`Sum = ${inputArr.reduce((a,b)=>a+b)}`);
    console.log(`Min = ${inputArr.reduce((a,b)=>Math.min(a,b))}`);
    console.log(`Max = ${inputArr.reduce((a,b)=>Math.max(a,b))}`);
    console.log(`Sum = ${inputArr.reduce((a,b)=>a*b)}`);
    console.log(`Sum = ${inputArr.reduce((a,b)=>a.toString()+b)}`);
}

aggregate([2,3,10,5])