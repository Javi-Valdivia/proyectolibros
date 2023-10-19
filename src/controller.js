import {pool} from './database.js';

class LibrosController{ 
    async getAll(req, res) {
        const [result]= await pool.query('SELECT * FROM Libros');
        res.json(result);
    }

    async getOne(req, res) {
        const id = req.body.id;
        const [result]= await pool.query('SELECT * FROM Libros WHERE id = ?', [id]);
        if (result.length > 0) {
            //devolver el libro encontrado
            res.json(result[0]);
        } else {
            //si no se encuentra devuelve un mensaje de error
            res.status(404).json({"Error": `Libro no encontrado: ${id}`});
        }
    }
}


export const libro = new LibrosController();
