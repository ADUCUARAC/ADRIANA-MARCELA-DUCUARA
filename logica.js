// Cajero automático - Ejemplo
// ----------------------------

// ----------------------------

let initialBalance = 100000; // Ejemplo: balance inicial. Esto está en scope global. // Variable GLOBAL (scope global)

// ----------------------------

showWelcome(); // HOISTING: llamo a una función antes de declararla.

// ----------------------------
// Función principal (declaración clásica)

function atm() {       // Scope de función: variables definidas //Todo lo que pasa dentro del cajero ocurre aqui
  const CORRECT_PIN = '1234'; // PIN correcto (simulación)
  let balance = initialBalance; // copia local del saldo actual
  let authenticated = false; // indica si el usuario ingresó bien la clave

  // --- Autenticación: 3 intentos (for)
  for (let attempt = 1; attempt <= 3; attempt++) {
    let enteredPin = prompt(`Intento ${attempt}/3 - Ingrese su clave:`);
    if (enteredPin === CORRECT_PIN) {
      authenticated = true;
      console.log('Clave correcta. Bienvenido.');
      break;
    } else {
      console.log('Clave incorrecta.');
    }
  }

  if (!authenticated) {
    console.log('Has excedido los intentos. Cuenta bloqueada.');
    return; // Salir de la función atm
  }

  // --- Menú: repetir mientras el usuario quiera (do...while)
  let continueSession = true;
  do {
    // Usamos for para mostrar el menú (práctica de for)
    const menu = [
      '1. Consultar saldo',
      '2. Retirar dinero',
      '3. Depositar dinero',
      '4. Salir'
    ];
    console.log('\n--- MENÚ ---');
    for (let i = 0; i < menu.length; i++) {
      console.log(menu[i]);
    }

    let option = prompt('Seleccione una opción (1-4):');

    // switch para las opciones
    switch (option) {
      case '1':
        console.log(`Su saldo actual es: $${balance}`);
        break;

      case '2': // Retirar
        let withdrawStr = prompt('Ingrese el monto a retirar:');
        let withdraw = Number(withdrawStr);

        if (Number.isNaN(withdraw) || withdraw <= 0) {
          console.log('Monto inválido. Debe ingresar un número mayor que 0.');
        } else if (withdraw > balance) {
          console.log('Saldo insuficiente para ese retiro.');
        } else {
          // Ejemplo de scope de bloque: esta variable solo existe dentro de las llaves {}
          {
            let fee = 1000; // tarifa por retiro (solo dentro de este bloque)
            console.log(`Se aplicará una tarifa de $${fee} por el retiro.`);
            balance = balance - withdraw - fee;
          }
          console.log(`Retiro realizado. Nuevo saldo: $${balance}`);
        }
        break;

      case '3': // Depositar
        let depositStr = prompt('Ingrese el monto a depositar:');
        let deposit = Number(depositStr);
        if (Number.isNaN(deposit) || deposit <= 0) {
          console.log('Monto inválido. Debe ingresar un número mayor que 0.');
        } else {
          balance += deposit;
          console.log(`Depósito exitoso. Nuevo saldo: $${balance}`);
        }
        break;

      case '4':
        console.log('Saliendo. Gracias por usar el cajero.');
        continueSession = false;
        break;

      default:
        console.log('Opción no válida. Intente nuevamente.');
    }

    // le preguntamos si desea otra operación
    if (continueSession) {
      let again = prompt('¿Desea realizar otra operación? (s/n):') || 'n';
      again = again.trim().toLowerCase();
      if (again !== 's' && again !== 'si') {
        continueSession = false;
        console.log('Cerrando sesión por petición del usuario.');
      }
    }
  } while (continueSession);

  // Al final actualizamos la variable global 
  initialBalance = balance;
  console.log('Sesión finalizada. ¡Hasta luego!');
}

// ----------------------------
// Otra función DECLARADA: hoisting (ya fue llamada arriba)
// ----------------------------
function showWelcome() {
  console.log('--- Bienvenido al Cajero Automático ---');
}

// ----------------------------
// Ejecutar la función principal
// ----------------------------
atm();

/* 
  Comentarios sobre hoisting y scope:
  - Hoisting: showWelcome() fue llamada antes de que la función aparezca
   escrita.
  - Scope global: initialBalance está definido fuera de cualquier 
  función: es global.
  - Scope de función: balance está dentro de atm() y solo se usa dentro
   de atm.
  - Scope de bloque: fee está dentro de { } y solo existe ahí.
*/
