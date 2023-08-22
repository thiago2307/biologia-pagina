const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
const Evento = require("./models/Evento");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose.set('strictQuery', false);

mongoose.connect(DB, {
    useNewUrlParser: true,
})
.then(() => {
    console.log("Conectado a la base de datos correctamente");
})
.catch(() => {
    console.log("No se pudo conectar a la base de datos");
});

Evento.find({}, (err, eventos) => {
    if (err) {
        console.error("Error al obtener los eventos:", err);
        return;
    } else {
        console.log("Eventos:", eventos);

        app.locals.eventos = eventos;
    }
});

//localhost:3000/eventos
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});