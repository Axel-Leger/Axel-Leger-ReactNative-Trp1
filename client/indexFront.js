const form = document.getElementById("formulario")
const respuesta = document.getElementById("respuesta")

 form.addEventListener("submit", async(e)=>{
    e.preventDefault()
    const nombre = document.getElementById("nombre").value

    try {
        const res = await fetch("http://localhost:3000/saludo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ nombre })
          })

        const data = await res.json();
        respuesta.textContent = data.mensaje;
        console.log("salio bien");
        
      } catch (error) {
        console.log("salio mal ")
        respuesta.textContent = "Hubo un error al enviar el formulario.";
    }
 })