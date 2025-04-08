// Datos de los 20 bonos
const bonos = {
  "X7K92M4T8C1D": {
    nombre: "Julian Lozano",
    celular: "301808074",
    bono: 1
  },
  "A9X3C7P5T2M4": {
    nombre: "Alvaro Loaiza",
    celular: "3017290201",
    bono: 2,
    fechaCompra: new Date('2025-04-06') // Coma añadida
  },
  "B7K6Y2L9Q8D1": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 3
  },
  "Z5N3M2X8T4K6": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 4
  },
  "F4Y8C9P3L7T2": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 5
  },
  "M2X7B5L9Q6D3": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 6
  },
  "T9C3P5X7Y2K6": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 7
  },
  "L8Q2B7X9M3D5": {
    nombre: "Ana Paola Loaiza",
    celular: "3155090889",
    bono: 8,
    fechaCompra: new Date('2025-04-06') // Coma añadida
  },
  "X3T9C5P7M2Y6": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 9
  },
  "Q7B6X2M9L3D8": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 10
  },
  "P5C7T9X2M3Y6": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 11
  },
  "Y2B8X9M3L7D5": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 12
  },
  "X7C9T5P3M2Y6": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 13,
    fechaCompra: new Date('2025-04-08') // Coma añadida
  },
  "Q9B6X2M8L3D7": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 14
  },
  "P3C7T9X5M2Y6": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 15
  },
  "B5X7Q9M2L3D8": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 16
  },
  "X9C3T7P5M2Y6": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 17
  },
  "L3B8X9Q2M7D5": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 18
  },
  "M7C9T5X3P2Y6": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 19,
    fechaCompra: new Date('2025-04-08') // Coma añadida
  },
  "D2B6X9M7L3Q8": {
    nombre: "Aura Perez",
    celular: "3017285859",
    bono: 20,
    fechaCompra: new Date('2025-04-06') // Coma añadida
  }
};

// Función para censurar el número de celular
function censurarCelular(celular) {
  // Verificar si el celular es un número válido
  if (celular !== "No-register") {
    // Extraer los primeros 3 y los últimos 4 dígitos
    const primeros3 = celular.slice(0, 3);
    const ultimos4 = celular.slice(-4);
    // Reemplazar los 4 dígitos del medio por '***'
    return `${primeros3}***${ultimos4}`;
  } else {
    return celular; // Si no es válido, retornar 'No-register'
  }
}

// Función que maneja la verificación del código
document.getElementById("verification-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Obtener el código ingresado por el usuario
  const code = document.getElementById("code").value.trim();
  
  // Verifica si el bono existe
  const resultDiv = document.getElementById("result");

  if (bonos[code]) {
    // Si el código es válido

    // Formatear la fecha de compra
    const fechaCompra = new Date(bonos[code].fechaCompra);
    const fechaCompraFormateada = `${fechaCompra.getDate()}/${fechaCompra.getMonth() + 1}/${fechaCompra.getFullYear()}`;

    // Obtener la fecha actual
    const fechaActual = new Date();
    const fechaFormateada = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`;

    // Censurar el número de celular
    const celularCensurado = censurarCelular(bonos[code].celular);

    resultDiv.innerHTML = `
      <div class="checkmark">✔️</div>
      <div class="success">
        <h2>Bono verificado</h2>
        <p>Felicidades, usted ha realizado la compra del <strong>Bono #</strong> ${bonos[code].bono}</p>
        <p><strong>Nombre:</strong> ${bonos[code].nombre}</p>
        <p><strong>Numero de celular:</strong> ${celularCensurado}</p>
        <p><strong>Fecha de compra:</strong> ${fechaCompraFormateada}</p>
        <p><strong>Fecha de validación:</strong> ${fechaFormateada}</p>
      </div>
    `;
  } else {
    // Si el código no es válido
    resultDiv.innerHTML = `
      <div class="error-mark">❌</div>
      <div class="error">
        <h2>¡Código no válido!</h2>
        <p>El código ingresado no está registrado. Intenta de nuevo.</p>
      </div>
    `;
  }

  // Mostrar el resultado
  resultDiv.style.display = "block";
});
