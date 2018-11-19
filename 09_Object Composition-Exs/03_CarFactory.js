function solution(orderObj) {
    let engineSmall = {power: 90, volume: 1800};
    let engineNormal = {power: 120, volume: 2400};
    let engineMonster = {power: 200, volume: 3500};

    let wheelsSize = orderObj.wheelsize % 2 === 0 ? orderObj.wheelsize - 1 : orderObj.wheelsize;
    let carObj = {
        model: orderObj.model,
        engine: {},
        carriage: {
            type: orderObj.carriage,
            color: orderObj.color
        },
        wheels: [wheelsSize, wheelsSize, wheelsSize, wheelsSize]
    };

    if(orderObj.power <= 90){
        carObj.engine = engineSmall;
    }else if (orderObj.power <= 120){
        carObj.engine = engineNormal;
    }else if (orderObj.power <= 200){
        carObj.engine = engineMonster;
    }

    return carObj;
}

solution({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});