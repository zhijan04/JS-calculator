// Función para realizar las operaciones
function calcular(operador, num1, num2) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return NaN; // Si el operador no es válido, devuelve NaN
    }
}

function aplicarOperacion(array, operacion, num) {
    return array.map(function (element) {
        return operacion(element, num);
    });
}

do {
    // Se solicita al usuario la operación y los números
    let operacion = prompt("Ingrese qué operación desea realizar (+, -, *, /):");
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    // Verifica si los números son válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese números válidos.");
        continue; // Vuelve al inicio del ciclo
    }

    let resultado = calcular(operacion, numero1, numero2);

    if (isNaN(resultado)) {
        alert("Operación inválida. Por favor, ingrese un operador válido (+, -, *, /).");
        continue; // Vuelve al inicio del ciclo
    }

    alert("El resultado es: " + resultado);

    let numeros = [1, 2, 3, 4, 5];
    let multiplicados = aplicarOperacion(numeros, function (elemento, num) {
        return elemento * num;
    }, numero1);

    console.log("Array original:", numeros);
    console.log("Array multiplicado por", numero1 + ":", multiplicados);

    // Pregunta al usuario si desea hacer otra operación
    let opcion = prompt("¿Desea realizar otra operación? (si/no)");
    if (opcion.toLowerCase() !== "si") {
        break; // Sale del ciclo
    }
} while (true);
