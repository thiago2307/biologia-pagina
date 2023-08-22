const Cadena = require("../models/Cadenas");

exports.inicio = (req, res) => {
    Evento.find({}, (err, eventos) => {
    if (err) {
        console.error("Error al obtener los eventos:");
        res.status(500).json({ error: "Error al obtener los eventos" });
    } else {
    res.render("index", { eventos: eventos });  
    }
    });
};

exports.getEventos = (req, res) => {
    Evento.find({}, (err, eventos) => {
    if (err) {
        console.error("Error al obtener los eventos:");
        res.status(500).json({ error: "Error al obtener los eventos" });
    } else {
        res.render("index", { eventos: eventos });
    }
    });
};

exports.createEvento = (req, res) => {
    const nuevoEvento = new Evento(req.body);
    nuevoEvento.save((err, evento) => {
    if (err) {
        console.error("Error al crear el evento:");
        res.status(500).json({ error: "Error al crear el evento" });
    } else {
        res.redirect("/eventos");
    }
    });
};

exports.getEventoById = (req, res) => {
    const eventoId = req.params.id;
    Evento.findById(eventoId, (err, evento) => {
    if (err) {
        console.error("Error al obtener el evento:");
        res.status(500).json({ error: "Error al obtener el evento" });
    } else {
        res.status(200).json(evento);
    }
    });
};

exports.updateEvento = (req, res) => {
    const eventoId = req.params.id;
    Evento.findByIdAndUpdate(
    eventoId,
    req.body,
    { new: true },
    (err, evento) => {
        if (err) {
        console.error("Error al actualizar el evento:");
        res.status(500).json({ error: "Error al actualizar el evento" });
        } else {
        res.redirect("/eventos")
        }
    }
    );
};

exports.deleteEvento = (req, res) => {
    const eventoId = req.params.id;
    Evento.findByIdAndRemove(eventoId, (err, evento) => {
    if (err) {
        console.error("Error al eliminar el evento:");
        res.status(500).json({ error: "Error al eliminar el evento" });
    } else {
        res.redirect("/eventos");
    }
    });
};

