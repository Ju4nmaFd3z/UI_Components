// MONKEY-PATCHING: técnica que consiste en modificar en tiempo de ejecución
// el comportamiento de una función o un objeto ya existente (aquí, console.log)
// sin tocar su código original.

// 1. Uso normal de console.log (todavía sin modificar)
console.log('Hola mundo');

// 2. Guardamos una referencia a la función original para no perderla
//    cuando la sobrescribamos
const originalLog = console.log;

// 3. Sobrescribo la función original de JS con otra a mi medida.
//    Con ...args recogemos todos los argumentos que reciba console.log
console.log = function (...args) {
  // 4. Añadimos un comportamiento nuevo: un prefijo con la fecha y hora actual
  const timestamp = `MONKEY-PATCHING LOG: [${new Date().toISOString()}]`;

  // 5. Llamamos a la función original (guardada en el paso 2) pasándole
  //    el prefijo y los argumentos que recibió la nueva función
  originalLog(timestamp, ...args);
};

// 6. A partir de aquí todos los console.log usan la versión modificada
console.log('Hola monkey patching');
