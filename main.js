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

// Ciclo principal de la calculadora
while (true) {
    // Se solicita al usuario la operación y los números
    let operacion = prompt("Ingrese que clase de operación quiere hacer (+, -, *, /):");
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    // Verifica si los números son válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese números válidos.");
        continue; // Vuelve al inicio del ciclo
    }

    // Calcular el resultado usando la función calcular()
    let resultado = calcular(operacion, numero1, numero2);

    // Verificar si la operación es válida
    if (isNaN(resultado)) {
        alert("Operación inválida. Por favor, ingrese un operador válido (+, -, *, /).");
        continue; // Vuelve al inicio del ciclo
    }

    // Mostrar el resultado al usuario
    alert("El resultado es: " + resultado);

    // Preguntar al usuario si desea hacer otra operación
    let opcion = prompt("¿Desea realizar otra operación? (si/no)");{
        if (opcion === "no") {
            break; // Sale del ciclo
        }
        else{ continue;}
    }
}