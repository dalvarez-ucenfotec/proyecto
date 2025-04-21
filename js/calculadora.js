document.getElementById("form-campana").addEventListener("submit", function(e) {
    e.preventDefault();

    const dias = parseInt(document.getElementById("dias").value);
    const baseDia = 30000;
    let totalPorDia = baseDia;

    const redesSeleccionadas = Array.from(document.querySelectorAll("input[name='red']:checked"))
                                    .map(el => el.value);

    if (redesSeleccionadas.includes("facebook")) totalPorDia += 15000;
    if (redesSeleccionadas.includes("instagram")) totalPorDia += 20000;
    if (redesSeleccionadas.includes("tiktok")) totalPorDia += 30000;

    const total = dias * totalPorDia;

    document.getElementById("resultado").innerHTML = 
        `<p>Redes seleccionadas: ${redesSeleccionadas.join(", ") || "ninguna"}</p>
         <p>Total por día: ₡${totalPorDia.toLocaleString()}</p>
         <p>Total por ${dias} día(s): <strong>₡${total.toLocaleString()}</strong></p>`;
});