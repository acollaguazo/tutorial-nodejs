const Libro = require('../models/libro');

module.exports = {
    crear: async (req, res) => {
        libro = req.params;
        autor = libro.autor;
        genero = libro.genero;
        const { titulo, editor, editorial, calificacion } = req.body;
        let libro = {};
        libro.titulo = titulo;
        libro.editor = editor;
        libro.editorial = editorial;
        libro.calificacion = calificacion;
        libro.autor = autor;
        libro.genero = [genero];
        let libroModel = new Libro(libro);
        libroModel.save((err, personaDB) => {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo registrar la persona, ocurrió el siguiente error:',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    msj: 'Los datos se enviaron de forma exitosa',
                    personaDB
                });
            }
        });
    },

    verTodos: async (req, res) => {
        const libro = await Libro.find()
        return res.send(libro)
    },
}
/*const Libro = require('../models/libro');
const Autor = require('../models/autor');

module.exports = {
    create : async (req, res) => {
        console.log(req.params);
        autor = req.params;
        id = autor.id;
        const { title, summary, isbn} = req.body;
        const libro = await Libro.create({
            title,
            summary,
            isbn,
            autor:id
        });
        await libro.save();

        const autorById = await Autor.findById(id);

        autorById.libros.push(libro);
        await autorById.save();

        return res.send(autorById);
    },

    librosByAutor : async (req,res)=>{
        const { id } = req.params;
        const autorBylibro = await Libro.findById(id).populate('libro');
        res.send(autorBylibro);
    }
}
*/
