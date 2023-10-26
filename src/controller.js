import {pool} from './database.js';

class LibrosController{ 
    async getAll(_req, res) {
        const [result]= await pool.query('SELECT * FROM libros');
        res.json(result);
    }

    async getOne(req, res) {
        const id = req.body.id;
        const [result]= await pool.query(`SELECT * FROM libros WHERE id =(?)`, [id]);
        if (result.length > 0) {
            //devolver el libro encontrado
            res.json(result[0]);
        } else {
            //si no se encuentra devuelve un mensaje de error
            res.status(404).json({"Error": `Libro no encontrado: ${id}`});
        }
    }

    async add(req, res){ 
        const libros = req.body;
        const [result] = await pool.query(` INSERT INTO libros (nombre, autor, categoria, año_publicacion, isbn) VALUES (?, ?, ?, ?, ?)` , [libros.nombre, libros.autor, libros.categoria, libros.año_publicacion, libros.isbn]);
        res.json({"Id insertado": result.insertId});
    }




}


export const libro = new LibrosController();
