function solicitarNumeros() {
    let num1 = parseFloat(prompt("Primer número:"));
    let num2 = parseFloat(prompt("Segundo número:"));
    let num3 = parseFloat(prompt("Tercer número:"));
    
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Ingresa números válidos.");
        return null;
    }
    
    return [num1, num2, num3];
}

function analizarNumeros(numeros) {
    if (!numeros) return;
    
    let [num1, num2, num3] = numeros;
    
    let sortedAsc = [...numeros].sort((a, b) => a - b);
    let sortedDesc = [...sortedAsc].reverse();
    
    console.log("Orden de mayor a menor:", sortedDesc);
    console.log("Orden de menor a mayor:", sortedAsc);
    
    if (num1 === num2 && num2 === num3) {
        console.log("Todos los números son iguales.");
    }
}

let numeros = solicitarNumeros();
analizarNumeros(numeros);