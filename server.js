const mongoose = require("mongoose");
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const myRouter = require('./routes/myRouter');
const dotenv = require("dotenv");

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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', myRouter);
app.use("/no", myRouter);

// Agrega el código HTML, CSS y JavaScript aquí
app.get('/', (req, res) => {
    res.render('index'); // Cambia 'index' por el nombre de tu archivo .ejs
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});
