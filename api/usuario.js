const Usuario = require('../models/usuario');

module.exports = {
    crear: async (req, res) => {
        const { nombre, apellido } = req.body;
        let user = {};
        user.nombre = nombre;
        user.apellido = apellido;
        let userModel = new Usuario(user);
        await userModel.save();
        res.json(userModel);
    },
}