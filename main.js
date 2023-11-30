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
            apellido: "Arias",
            dni: "12345678",
            saldo: 1500,
        },
    ];

    // CAMBIANDO LA CUENTA ACTUAL SE PUEDE ACCEDER AL SALDO DE CARLOS O DE NESMAR
    // CARLOS = 0
    // NESMAR = 1
    let cuentaActual = 0;//<--AQUI SE PUEDE CAMBIAR LOS QUE ESTAN GUARDADOS EN EL ARRAY
    let retiroInput = document.getElementById('retiro-input');
    let saldoElement = document.getElementById('saldo');
    let retirarBtn = document.getElementById('retirar-btn');

    actualizarSaldo();

    retirarBtn.addEventListener('click', function () {
        realizarRetiro();
    });

    function realizarRetiro() {
        let retiroAmount = parseInt(retiroInput.value);

        if (isNaN(retiroAmount) || retiroAmount <= 0) {
            alert("Ingrese un monto válido.");
            return;
        }
// CUANDO EL SALDO EN PANTALLA SEA MENOR!!! DIRA UN AVISO DE "SALDO INSUFICIENTE"
        if (retiroAmount > cuentas[cuentaActual].saldo) {
            alert("Saldo insuficiente.");
        } else {
            cuentas[cuentaActual].saldo -= retiroAmount;
            actualizarSaldo();
            alert("Retiro exitoso. Saldo actual: $" + cuentas[cuentaActual].saldo);
        }
    }

    function actualizarSaldo() {
        saldoElement.textContent = "Saldo actual: $" + cuentas[cuentaActual].saldo;
        guardarSaldo();
    }
    // FUNCION PARA OBTENER EL SALDO!!
    function obtenerSaldo() {
        let saldoGuardado = localStorage.getItem('saldo');
        return saldoGuardado ? parseInt(saldoGuardado) : null;
    }

    // FUNCION PARA GUARDAR EL SALDO!!!
    function guardarSaldo() {
        localStorage.setItem('saldo', cuentas[cuentaActual].saldo.toString());
    }
});