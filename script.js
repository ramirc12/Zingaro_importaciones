const botonesWhatsapp = document.querySelectorAll(".whatsapp-btn");

botonesWhatsapp.forEach((boton) => {

    const tarjeta = boton.closest(".product-card");

    const nombre = tarjeta.querySelector(".product-name").innerText;

    const mensaje = `Hola! Quiero consultar por el producto: ${nombre}`;

    const url = `https://wa.me/5493415455934?text=${encodeURIComponent(mensaje)}`;

    boton.href = url;

});

const formulario = document.getElementById("contactForm");

if (formulario) {

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        const nombre = document.getElementById("nombre").value;

        const email = document.getElementById("email").value;

        const telefono = document.getElementById("telefono").value;

        const mensaje = document.getElementById("mensaje").value;

        const texto =
`Hola, mi nombre es ${nombre}.

Mi correo es: ${email}

Mi teléfono es: ${telefono}

Consulta:

${mensaje}`;

        const url = `https://wa.me/5493415455934?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");

    });

}
function toggleMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("active");

}

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase().trim();

    cards.forEach(card => {

        const text = card.textContent.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

});