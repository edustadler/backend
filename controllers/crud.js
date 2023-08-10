import { db } from "../database.js";

export const getCrud = (_, res) => {
    const e = 'SELECT * FROM `crud`';

    db.query(e, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })
}

export const addCrud = (req, res) => {
    const e = 'INSERT INTO crud(`valor`, `nome`, `categoria`, `tipo`, `data`) VALUES(?)';

    const values = [
        req.body.valor,
        req.body.nome,
        req.body.categoria,
        req.body.tipo,
        req.body.data,
    ]

    db.query(e, [values], (err) => {
        if (err) return res.json(err)

        return res.status(200).json("sucesso!")
    })
}

export const uptCrud = (req, res) => {
    const e = 'UPDATE crud SET `valor` = ?, `nome` = ?, `categoria` = ?, `tipo` = ?, `data` = ? WHERE `id` = ?';

    const values = [
        req.body.valor,
        req.body.nome,
        req.body.categoria,
        req.body.tipo,
        req.body.data,
    ];

    const id = req.params.id;

    db.query(e, [...values, id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }

        const selectQuery = 'SELECT * FROM `crud` WHERE `id` = ?';
        db.query(selectQuery, [id], (selectErr, data) => {
            if (selectErr) {
                console.error(selectErr);
                return res.status(500).json(selectErr);
            }

            return res.status(200).json(data);
        });
    });
};


export const deleteCrud = (req, res) => {
    const e = 'DELETE FROM crud WHERE `id` = ?';

    db.query(e, [req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }

        return res.status(200).json("DELETADO! com sucesso");
    });
};
