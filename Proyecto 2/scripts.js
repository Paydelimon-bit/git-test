// Seleccionamos todos los botones de tu lista
const botones = document.querySelectorAll('.list__button');

// Les añadimos un "escuchador" de clics
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const redSocial = boton.textContent.trim();
        alert(`¡Te estás dirigiendo a ${redSocial} de Gatombessa!`);
    });
});