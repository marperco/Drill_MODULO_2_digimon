var url = "https://digimon-api.vercel.app/api/digimon";
var contenido = document.querySelector("#contenido");

fetch(url)
.then(response => response.json())
.then(datos => {
    for (item of datos) {
        contenido.innerHTML += `
            <div class="tarjeta">
                <div class="card" style="width: 18rem;">
                    <img src="${item.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.level}</p>
                        <a href="#" class="btn btn-primary" data-digimon-id="${item.id}">Ver más</a>
                    </div>
                </div>
            </div>
        `;
        if (item.id == 100) {break;}
    }

    var verMasBotones = document.querySelectorAll(".btn-primary");
    verMasBotones.forEach(boton => {
        boton.addEventListener("click", mostrarDetalle);
    });
})


function mostrarDetalle(event) {
    var digimonId = event.target.getAttribute("data-digimon-id");

    fetch(`https://digimon-api.vercel.app/api/digimon/${digimonId}`)
    .then(response => response.json())
    .then(digimon => {
        // Ocultar contenido principal
        var contenidoContainer = document.getElementById("contenido");
        contenidoContainer.style.display = "none";

        // Mostrar detalles
        var detalleContainer = document.getElementById("detalle");
        var nombreDigimonElement = document.getElementById("nombre-digimon");
        var fotoDigimonElement = document.getElementById("foto-digimon");
        var datosDigimonElement = document.getElementById("datos-digimon");
        var volverButton = document.getElementById("volver-button");

        nombreDigimonElement.textContent = digimon[0].name;
        fotoDigimonElement.innerHTML = `<img src="${digimon[0].img}" alt="Foto del Digimon" class="img-fluid mx-auto d-block">`;
        datosDigimonElement.textContent = `Nivel: ${digimon[0].level}`;

        // Mostrar detalles y botón de volver
        detalleContainer.style.display = "block";
        volverButton.style.display = "block";

        // Desplazar a la sección de detalles
        window.location.hash = "detalle"; // Agrega "#detalle" al final de la URL para desplazar
    });
}

// Agregar evento de clic al botón "Volver"
var volverButton = document.getElementById("volver-button");
volverButton.addEventListener("click", function() {
    // Ocultar detalles y botón de volver
    var detalleContainer = document.getElementById("detalle");
    detalleContainer.style.display = "none";
    volverButton.style.display = "none";

    // Mostrar contenido principal
    var contenidoContainer = document.getElementById("contenido");
    contenidoContainer.style.display = "block";

    // Desplazar al inicio de la página
    scrollToTop();
});

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

var backgroundMusic = document.getElementById("backgroundMusic");
var logo = document.querySelector(".logo");

logo.addEventListener("mouseover", function () {
  backgroundMusic.play();
});

logo.addEventListener("mouseout", function () {
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0; // Reinicia la música al inicio
});

