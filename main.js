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
            return NaN;
    }
}

function guardarHistorialEnStorage(historial) {
    localStorage.setItem('historialCalculos', JSON.stringify(historial));
}

function obtenerHistorialDesdeStorage() {
    const historialJSON = localStorage.getItem('historialCalculos');
    if (historialJSON) {
        return JSON.parse(historialJSON);
    }
    return [];
}

let historial = obtenerHistorialDesdeStorage();

function guardarHistorial() {
    guardarHistorialEnStorage(historial);
    Swal.fire('¡Éxito!', 'Historial guardado correctamente.', 'success');
}

function borrarHistorial() {
    historial = [];
    guardarHistorialEnStorage(historial);
    const historialElement = document.getElementById('historial');
    historialElement.innerHTML = '';
    Swal.fire('¡Éxito!', 'Historial borrado correctamente.', 'success');
}

function imprimirHistorial() {
    const historialElement = document.getElementById('historial');
    historialElement.innerHTML = '';

    const historialList = document.createElement('ul');
    historial.forEach(function (calculo) {
        const calculoItem = document.createElement('li');
        calculoItem.textContent = calculo;
        historialList.appendChild(calculoItem);
    });

    historialElement.appendChild(historialList);
}

function fetchNumberTrivia(number) {
    return new Promise((resolve, reject) => {
        fetch(`http://numbersapi.com/${number}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo obtener la información.');
                }
                return response.text();
            })
            .then(trivia => resolve(trivia))
            .catch(error => reject('Hubo un problema al obtener la información del número.'));
    });
}

async function realizarOperacion() {
    const operacionInput = document.getElementById('operacion');
    const numero1Input = document.getElementById('numero1');
    const numero2Input = document.getElementById('numero2');

    const operacion = operacionInput.value;
    const numero1 = parseFloat(numero1Input.value);
    const numero2 = parseFloat(numero2Input.value);

    // Validar si se ingresaron números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        Swal.fire('Error', 'Por favor, ingrese números válidos.', 'error');
        return;
    }

    // Validar si el operador es uno de los cuatro operadores básicos (+, -, *, /)
    const operadorRegex = /^[+\-*/]$/;
    if (!operadorRegex.test(operacion)) {
        Swal.fire('Error', 'Operador inválido. Por favor, ingrese un operador válido (+, -, *, /).', 'error');
        return;
    }

    let resultado = calcular(operacion, numero1, numero2);

    if (isNaN(resultado)) {
        Swal.fire('Error', 'Operación inválida. Por favor, ingrese un operador válido (+, -, *, /).', 'error');
        return;
    }

    Swal.fire('Resultado', `El resultado es: ${resultado}`, 'success');

    let calculo = numero1 + " " + operacion + " " + numero2 + " = " + resultado;
    historial.push(calculo);

    imprimirHistorial();

    operacionInput.value = '';
    numero1Input.value = '';
    numero2Input.value = '';
}

// Imprimir el historial al cargar la página si hay un historial en el sessionStorage
window.onload = function () {
    imprimirHistorial();
};