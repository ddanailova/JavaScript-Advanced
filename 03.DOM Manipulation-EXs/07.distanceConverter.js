function attachEventsListeners() {
    // 1 km = 1000 m
    // 1 m = 1 m
    // 1 cm = 0.01 m
    // 1 mm = 0.001 m
    // 1 mi = 1609.34 m
    // 1 yrd = 0.9144 m
    // 1 ft = 0.3048 m
    // 1 in = 0.0254 m

    let btn = document.getElementById('convert');
    btn.addEventListener('click', convert);

    function convert() {
        let inputDistance = Number(document.getElementById('inputDistance').value);
        let outputDistance = document.getElementById('outputDistance');
        let inputUnits = document.getElementById('inputUnits');
        let selectedFrom = inputUnits.options[inputUnits.selectedIndex];
        let outputUnits = document.getElementById('outputUnits');
        let selectedTo = outputUnits.options[outputUnits.selectedIndex];
        let distanceInMeters;

        if (selectedFrom.value === "km") {
            distanceInMeters = inputDistance * 1000;
        } else if (selectedFrom.value === "m") {
            distanceInMeters = inputDistance;
        } else if (selectedFrom.value === "cm") {
            distanceInMeters = inputDistance*0.01;
        } else if (selectedFrom.value === "mm") {
            distanceInMeters = inputDistance*0.001;
        } else if (selectedFrom.value === "mi") {
            distanceInMeters = inputDistance*1609.34;
        } else if (selectedFrom.value === "yrd") {
            distanceInMeters = inputDistance*0.9144;
        } else if (selectedFrom.value === "ft") {
            distanceInMeters = inputDistance*0.3048;
        } else if (selectedFrom.value === "in") {
            distanceInMeters = inputDistance*0.0254;
        }


        if (selectedTo.value === "km") {
            outputDistance.value = distanceInMeters / 1000;
        } else if (selectedTo.value === "m") {
            outputDistance.value = distanceInMeters;
        } else if (selectedTo.value === "cm") {
            outputDistance.value = distanceInMeters/0.01;
        } else if (selectedTo.value === "mm") {
            outputDistance.value = distanceInMeters/0.001;
        } else if (selectedTo.value === "mi") {
            outputDistance.value = distanceInMeters/1609.34;
        } else if (selectedTo.value === "yrd") {
            outputDistance.value = distanceInMeters/0.9144;
        } else if (selectedTo.value === "ft") {
            outputDistance.value = distanceInMeters/0.3048;
        } else if (selectedTo.value === "in") {
            outputDistance.value = distanceInMeters/0.0254;
        }

    }
}