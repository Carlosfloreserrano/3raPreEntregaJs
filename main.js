// BANCOCODER DE CARLOS FLORES JAVASCRIPT COMISION 49770
document.addEventListener("DOMContentLoaded", function () {
    let cuentas = [
        {
            nombre: "Carlos",
            apellido: "Flores",
            dni: "12345678",
            saldo: 1000,
        },
        {
            nombre: "Nesmar",
            apellido: "ApellidoNesmar",
            dni: "87654321",
            saldo: 2000,
        },
    ];
// CAMBIANDO LA CUENTA ACTUAL SE PUEDE ACCEDER AL SALDO DE CARLOS O DE NESMAR
// CARLOS = 0
// NESMAR = 1
    let cuentaActual = 0;
    let retiroInput = document.getElementById('retiro-input');
    let saldoElement = document.getElementById('saldo-valor'); // Modificado para actualizar el valor directamente
    let retirarBtn = document.getElementById('retirar-btn');

    actualizarSaldo();

    retirarBtn.addEventListener('click', function () {
        realizarRetiro();
    });

    function realizarRetiro() {
        let retiroAmount = parseInt(retiroInput.value);

        if (isNaN(retiroAmount) || retiroAmount <= 0) {
            mostrarMensaje("Ingrese un monto válido.");
            return;
        }
// MENSAJE DE SALDO INSUFICIENTE!
        if (retiroAmount > cuentas[cuentaActual].saldo) {
            mostrarMensaje("Saldo insuficiente.");
        } else {
            cuentas[cuentaActual].saldo -= retiroAmount;
            actualizarSaldo();
            mostrarMensaje("Retiro exitoso. Saldo actual: $" + cuentas[cuentaActual].saldo);
        }
    }

    function actualizarSaldo() {
        saldoElement.textContent = cuentas[cuentaActual].saldo;
        guardarSaldo();
    }

    function obtenerSaldo() {
        let saldoGuardado = localStorage.getItem('saldo');
        return saldoGuardado ? parseInt(saldoGuardado) : null;
    }
// FUNCION PARA GUARDAR EL SALDO! ATENTO A LA CUENTA ACTUAL!
    function guardarSaldo() {
        localStorage.setItem('saldo', cuentas[cuentaActual].saldo.toString());
    }
// FUNCION PARA MOSTRAR EL MENSAJE EN PANTALLA!!
    function mostrarMensaje(mensaje) {
        let mensajeElement = document.createElement('p');
        mensajeElement.textContent = mensaje;
        document.getElementById('cajero').appendChild(mensajeElement);
// TIEMPO ESTIMADO!!. 
        setTimeout(function() {
            mensajeElement.remove();
        }, 3000);
    }
});
