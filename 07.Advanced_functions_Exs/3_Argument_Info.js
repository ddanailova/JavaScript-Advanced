function getType() {
    let summery = {};
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;

        if (!summery[type]) {
            summery[type] = 0;
        }
            summery[type]++;
        console.log(`${type}: ${obj}`);
    }

    Object.keys(summery)
        .sort((a,b)=>summery[b]-summery[a])
        .forEach(e=>{
            console.log(`${e} = ${summery[e]}`);
        })
}

// getType('cat', 42, function () { console.log('Hello world!')});
getType(42, 'cat', [], undefined);
