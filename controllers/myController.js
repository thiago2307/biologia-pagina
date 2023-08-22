const Cadena = require("../models/Cadenas");

exports.getCadenas = (req, res) => {
    Cadena.find({}, (err, cadenas) => {
        if (err) {
            console.error("Error al obtener las cadenas:", err);
            res.status(500).json({ error: "Error al obtener las cadenas" });
        } else {
            res.render("index", { cadenas: cadenas });
        }
    });
};

exports.getCadenas = (req, res) => {
    Cadena.find({}, (err, cadenas) => {
        if (err) {
            console.error("Error al obtener las cadenas:");
            res.status(500).json({ error: "Error al obtener las cadenas" });
        } else {
            res.render("index", { cadenas: cadenas });
        }
    });
};

exports.createCadena = (req, res) => {
    const nuevaCadena = new Cadena(req.body);
    nuevaCadena.save((err, cadena) => {
        if (err) {
            console.error("Error al crear la cadena:");
            res.status(500).json({ error: "Error al crear la cadena" });
        } else {
            res.redirect("/cadenas");
        }
    });
};

exports.getCadenaById = (req, res) => {
    const cadenaId = req.params.id;
    Cadena.findById(cadenaId, (err, cadena) => {
        if (err) {
            console.error("Error al obtener la cadena:");
            res.status(500).json({ error: "Error al obtener la cadena" });
        } else {
            res.status(200).json(cadena);
        }
    });
};

exports.updateCadena = (req, res) => {
    const cadenaId = req.params.id;
    Cadena.findByIdAndUpdate(
        cadenaId,
        req.body,
        { new: true },
        (err, cadena) => {
            if (err) {
                console.error("Error al actualizar la cadena:");
                res.status(500).json({ error: "Error al actualizar la cadena" });
            } else {
                res.redirect("/cadenas")
            }
        }
    );
};

exports.deleteCadena = (req, res) => {
    const cadenaId = req.params.id;
    Cadena.findByIdAndRemove(cadenaId, (err, cadena) => {
        if (err) {
            console.error("Error al eliminar la cadena:");
            res.status(500).json({ error: "Error al eliminar la cadena" });
        } else {
            res.redirect("/cadenas");
        }
    });
};
