function patientBMI(name, age, weight, height) {

    let patientInfo = {
        name: name,
        personalInfo: {age:age, weight:weight, height:height},
        BMI: calcBMI().BMI,
        status: calcBMI().statuse,
        };


    if (patientInfo.status === "obese") {
        patientInfo.recommendation = "admission required";
    }
    return patientInfo;

    function calcBMI() {
        let index = {
            BMI: Math.round((weight * 10000) / (height ** 2)),
        };
        if (index.BMI < 18.5) {
            index.statuse = "underweight";
        } else if (index.BMI < 25) {
            index.statuse = "normal"
        } else if (index.BMI < 30) {
            index.statuse = "overweight"
        } else {
            index.statuse = "obese"
        }
        return index;
    }
}

// patientBMI('Peter', 29, 75, 182);
patientBMI('Honey Boo Boo', 9, 57, 137);