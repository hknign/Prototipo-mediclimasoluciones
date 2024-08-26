// script.js

// Mostrar el modal de login
document.getElementById('login-link').onclick = function() {
    document.getElementById('login-modal').style.display = "block";
};

// Cerrar el modal
document.querySelector('.close').onclick = function() {
    document.getElementById('login-modal').style.display = "none";
};

// Agendar una hora
document.getElementById('schedule-btn').onclick = function() {
    let date = document.getElementById('date-picker').value;
    let time = document.getElementById('time-picker').value;
    alert("Appointment scheduled for " + date + " at " + time);
};

// Establecer horas disponibles por el administrador
document.getElementById('set-hours-btn').onclick = function() {
    let date = document.getElementById('admin-date-picker').value;
    let time = document.getElementById('admin-time-picker').value;
    alert("Available hours set for " + date + " at " + time);
};
