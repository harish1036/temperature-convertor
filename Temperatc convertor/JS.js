const celsiusE1 = document.getElementById("celsius");

const fohrenheitE1 = document.getElementById("fohrenheit");

const KelvinE1 = document.getElementById("Kelvin");

function computeTemp(event){
    const currentValue = +event.target.value

    switch (event.targent.name){
        case "celsius":
            KelvinE1.value = (currentValue + 273.72).toFixed(2);
            fohrenheitE1.value = (currentValue*1.8+32).toFixed(2);
        case "fohrenheit":
            celsiusE1.value = ((currentValue-32) / 1.8 ).toFixed(2);
            KelvinE1.value = ((currentValue-32) / 1.8 +273.32 ).toFixed(2);
            break;
        case "Kelvin":
            celsiusE1.value=(currentValue - 273.72).toFixed(2);
            fohrenheitE1.value =  ((currentValue-273.72)*1.8+32).toFixed(2);
            break;

        default:
            break;
    }

   
}