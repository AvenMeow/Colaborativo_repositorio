function sumar(num1, num2) {
    let resultado = num1 + num2;
    console.log("La suma es: " + resultado);
    
    // Agregar una operación adicional, por ejemplo:
    let resultadoModificado = resultado * 2;
    console.log("El resultado modificado es: " + resultadoModificado);
    
    return resultadoModificado; // Devolvemos el resultado modificado
}

let resultado = sumar(5, 7);