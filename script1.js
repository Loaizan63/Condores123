const baseA = 550;
    const baseB = 799;
    const baseC = 32;
    const baseD = 281;
    for (let i = 1; i <= 20; i++) {
      const a = baseA - i;
      const b = baseB - i;
      const c = baseC + i;
      const d = baseD + i;

      }
// Datos de los 20 bonos
const bonos1 = {
  "X7K92M4T8C1D": {
    nombre: "",
    celular: "",
    bono: 1,
    fechaCompra: new Date('') 
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
    bono: 3,
    fechaCompra: new Date('') 
  },
  "Z5N3M2X8T4K6": {
    nombre: "Lady Laura Delgado Guerrero",
    celular: "3011007228",
    bono: 4,
    fechaCompra: new Date('2025-04-11') 
  },
  "F4Y8C9P3L7T2": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 5,
    fechaCompra: new Date('') 
  },
  "M2X7B5L9Q6D3": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 6,
    fechaCompra: new Date('') 
  },
  "T9C3P5X7Y2K6": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 7,
    fechaCompra: new Date('') 
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
    bono: 9,
    fechaCompra: new Date('') 
  },
  "Q7B6X2M9L3D8": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 10,
    fechaCompra: new Date('') 
  },
  "P5C7T9X2M3Y6": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 11,
    fechaCompra: new Date('') 
  },
  "Y2B8X9M3L7D5": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 12,
    fechaCompra: new Date('') 
  },
  "X7C9T5P3M2Y6": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 13,
    fechaCompra: new Date('') 
  },
  "Q9B6X2M8L3D7": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 14,
    fechaCompra: new Date('') 
  },
  "P3C7T9X5M2Y6": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 15,
    fechaCompra: new Date('') 
  },
  "B5X7Q9M2L3D8": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 16,
    fechaCompra: new Date('') 
  },
  "X9C3T7P5M2Y6": {
    nombre: "No-Register",
    celular: "No-register",
    bono: 17,
  fechaCompra: new Date('') 
  },
  "L3B8X9Q2M7D5": {
    nombre: "Adriana Loaiza ",
    celular: "3173750621",
    bono: 18,
    echaCompra: new Date('2025-04-08')
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
  if (celular !== "No-register") {
    const primeros3 = celular.slice(0, 3);
    const ultimos4 = celular.slice(-4);
    return `${primeros3}***${ultimos4}`;
  } else {
    return celular;
  }
}

// Función que maneja la verificación del código
document.getElementById("verification-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const code = document.getElementById("code").value.trim();
  const resultDiv = document.getElementById("result");

  if (bonos1[code]) {
    const i = bonos1[code].bono; // El índice i es el número del bono
    const a = baseA - i;
    const b = baseB - i;
    const c = baseC + i;
    const d = baseD + i;

    const fechaCompra = new Date(bonos1[code].fechaCompra);
    const fechaCompraFormateada = `${fechaCompra.getDate()}/${fechaCompra.getMonth() + 1}/${fechaCompra.getFullYear()}`;

    const fechaActual = new Date();
    const fechaFormateada = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`;

    const celularCensurado = censurarCelular(bonos1[code].celular);

    resultDiv.innerHTML = `
      <div class="checkmark">✔️</div>
      <div class="success">
        <h2>Bono verificado</h2>
        <p>Felicidades ${bonos1[code].nombre}, usted ha realizado la compra del Bono # ${bonos1[code].bono}</p>
        <p><strong>Número de celular:</strong> ${celularCensurado}</p>
        <p><strong>Seriales del bono:</strong></p>
        <ul>
          <li><strong>Número A:</strong> ${a}</li>
          <li><strong>Número B:</strong> ${b}</li>
          <li><strong>Número C:</strong> ${c.toString().padStart(3, '0')}</li>
          <li><strong>Número D:</strong> ${d}</li>
        </ul>
        <p><strong>Fecha de compra:</strong> ${fechaCompraFormateada}</p>
        <p><strong>Fecha de validación:</strong> ${fechaFormateada}</p>
      </div>
    `;
  } else {
    resultDiv.innerHTML = `
      <div class="error-mark">❌</div>
      <div class="error">
        <h2>¡Código no válido!</h2>
        <p>El código ingresado no está registrado. Intenta de nuevo.</p>
      </div>
    `;
  }

  resultDiv.style.display = "block";
});

