const express = require("express")
const cors = require("cors")


const app = express();
app.use(express.json())
app.use(cors())

const port = 3000;


app.post('/saludo', (req, res) => {
const {nombre} = req.body
res.json({mensaje: `Hola ${nombre}` })
});


app.listen(port, () => {
console.log(`Servidor escuchando en el puerto ${port}`);
});