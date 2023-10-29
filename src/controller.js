import {pool} from './database.js';


class LibrosController {
    async getAll(_req, res) {
        try {
            const [result] = await pool.query('SELECT * FROM libros');
            res.json(result);
        } catch (error) {
            // Manejar el error y devolver una respuesta apropiada
            res.status(500).json({ "Error": "Ocurrió un error al obtener los libros." });
        }
    }

    async getOne(req, res) {
        try {
            const id = req.body.id;
            const [result] = await pool.query(`SELECT * FROM libros WHERE id = (?)`, [id]);
            if (result.length > 0) {
                // Devolver el libro encontrado
                res.json(result[0]);
            } else {
                // Si no se encuentra, devuelve un mensaje de error
                res.status(404).json({ "Error": `Libro no encontrado: ${id}` });
            }
        } catch (error) {
            // Manejar el error y devolver una respuesta apropiada
            res.status(500).json({ "Error": "Ocurrió un error al buscar el libro." });
        }
    }

    async add(req, res) {
        try {
            const libros = req.body;
            const [result] = await pool.query(`INSERT INTO libros (nombre, autor, categoria, año_publicacion, isbn) VALUES (?, ?, ?, ?, ?)`, [libros.nombre, libros.autor, libros.categoria, libros.año_publicacion, libros.isbn]);
            res.json({ "Id insertado": result.insertId });
        } catch (error) {
            // Manejar el error y devolver una respuesta apropiada
            res.status(500).json({ "Error": "Ocurrió un error al agregar el libro." });
        }
    }

    async delete(req, res) {
        try {
            const libros = req.body;
            if (libros.isbn) {
                // Si se ingresa un ISBN, eliminar por ISBN
                const [result] = await pool.query(`DELETE FROM libros WHERE isbn = ?`, [libros.isbn]);
                if (result.affectedRows > 0) {
                    res.json({ "Registros eliminados": result.affectedRows });
                } else {
                    res.status(404).json({ "Error": `Libro no encontrado con ISBN: ${libros.isbn}` });
                }
            } else if (libros.id) {
                // Si se ingresa un ID, eliminar por ID
                const [result] = await pool.query(`DELETE FROM libros WHERE id = ?`, [libros.id]);
                if (result.affectedRows > 0) {
                    res.json({ "Registros eliminados": result.affectedRows });
                } else {
                    res.status(404).json({ "Error": `Libro no encontrado con ID: ${libros.id}` });
                }
            } else {
                // Si no se ingresa ni ISBN ni ID, devuelve un mensaje de error
                res.status(400).json({ "Error": "Debes proporcionar un ISBN o un ID para eliminar un libro." });
            }
        } catch (error) {
            // Manejo del error y devulve una respuesta de error
            res.status(500).json({ "Error": "Ocurrió un error al eliminar el libro." });
        }
    }
    

   /* async deleteISBN(req, res) {
        try {
            const libros = req.body; 
            const [result] = await pool.query(`DELETE FROM libros WHERE isbn=?`, [libros.isbn]);
            res.json({ "Registros eliminados": result.affectedRows });
        } catch (error) {
            // Manejar el error y devolver una respuesta apropiada
            res.status(500).json({ "Error": "Ocurrió un error al eliminar el libro." });
        }
    }
    async delete(req, res) {
        try {
            const libros = req.body;
            const [result] = await pool.query(`DELETE FROM libros WHERE id=?`, [libros.id]);
            res.json({ "Registros eliminados": result.affectedRows });
        } catch (error) {
            // Manejar el error y devolver una respuesta apropiada
            res.status(500).json({ "Error": "Ocurrió un error al eliminar el libro." });
        }
    }*/



    async update(req, res) {
        try {
            const libros = req.body;
            const [result] = await pool.query(`UPDATE libros SET nombre = (?), autor = (?), categoria = (?), año_publicacion = (?), isbn = (?) WHERE id = (?)`, [libros.nombre, libros.autor, libros.categoria, libros.año_publicacion, libros.isbn, libros.id]);
            res.json({ "Registros Actualizados": result.changedRows });
        } catch (error) {
            // Manejar el error y devolver una respuesta apropiada
            res.status(500).json({ "Error": "Ocurrió un error al actualizar el libro." });
        }
    }
}


export const libro = new LibrosController();
