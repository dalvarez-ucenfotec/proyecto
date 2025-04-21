window.onload = function() {
    const logo = "<img src='imagenes/logo.png' class='img-fluid rounded' alt='logo' />";
    const servicio = document.getElementById("servicio");
    const outputImg = document.getElementById("output-img");
    const outputTxt = document.getElementById("output-txt");

    outputImg.innerHTML = logo;

    servicio.onchange = function(e) {
        let n = e.target.value;
        let imagen = "<img src='imagenes/s" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='servicio' />";
        let text = [
            "Desde logotipos hasta paletas de colores y tono de comunicaci&oacute;n, te damos la identidad que tu negocio necesita.",
            "Dise&ntilde;amos campa&ntilde;as estrat&eacute;gicas en redes sociales, Google Ads y m&aacute;s, asegurando que tu mensaje llegue a la audiencia correcta en el momento adecuado",
            "Construimos sitios web modernos, optimizados y con alto impacto visual para atraer y convertir clientes potenciales",
            "Mejoramos tu visibilidad en los motores de b&uacute;squeda para que tu marca destaque y genere tr&aacute;fico org&aacute;nico de calidad."
        ];
        if (n) {
            outputImg.innerHTML = imagen;
            outputTxt.innerHTML = text[n - 1];
        } else {
            outputImg.innerHTML = logo;
            outputTxt.innerHTML = "";
        }
    }
}