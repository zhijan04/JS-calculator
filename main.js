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

let historial = []; // Array para almacenar el historial de cálculos

do {
    // Se pide al usuario la operación y los números
    let operacion = prompt("Ingrese qué operación desea realizar (+, -, *, /):");
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    // Verifica si los números son válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese números válidos.");
        continue;
    }

    let resultado = calcular(operacion, numero1, numero2);

    if (isNaN(resultado)) {
        alert("Operación inválida. Por favor, ingrese un operador válido (+, -, *, /).");
        continue;
    }

    alert("El resultado es: " + resultado);

    let calculo = numero1 + " " + operacion + " " + numero2 + " = " + resultado;
    historial.push(calculo); // Agrega el cálculo al historial

    document.write("<p>Historial de cálculos:</p>");
    document.write("<ul>");
    historial.forEach(function (calculo) {
        document.write("<li>" + calculo + "</li>");
    });
    document.write("</ul>");

    // Pregunta al usuario si desea hacer otra operación
    let opcion = prompt("¿Desea realizar otra operación? (si/no)");
    if (opcion.toLowerCase() !== "si") {
        break; // Sale del ciclo
    }
} while (true);
