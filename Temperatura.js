const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertirTemperatura(tempCelsius) {
    if (isNaN(tempCelsius)) {
        console.log("Ingrese un número válido.");
        return;
    }

    const tempFahrenheit = (tempCelsius * 9/5) + 32;
    const tempKelvin = tempCelsius + 273.15;

    console.log(`Grados Kelvin: ${tempKelvin.toFixed(2)}`);
    console.log(`Grados Fahrenheit: ${tempFahrenheit.toFixed(2)}`);
}

rl.question("Ingrese la temperatura en grados Celsius: ", (input) => {
    const tempCelsius = parseFloat(input);
    convertirTemperatura(tempCelsius);

    rl.close();
});