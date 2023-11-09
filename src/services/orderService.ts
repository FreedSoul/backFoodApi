import { Pool, QueryResult } from "pg";
import getConection from '../libs/postgres';

class orderService {
    public constructor() { }
    
    public async findOne(id: string) {
        const dbConnect:Pool = await getConection()
        const res:QueryResult = await dbConnect.query('SELECT * FROM orders WHERE order_id = $1', [Number.parseInt(id)])
        // console.log(res.rows);
        return res.rows
    }
    public async find() {
        const dbConnect:Pool = await getConection()
        const res:QueryResult = await dbConnect.query('SELECT * FROM orders')
        return res.rows;
    }
    //este data viene de la ruta
    public async create(queryFields:Array<string>,valuesField:Array<string|number|boolean|Array<string>>) {
        const dbConnect:Pool = await getConection()
        const auxField:Array<string> = valuesField.map((x, index) => { return `$${index+1}`})
        const values = auxField.join(", ")
        const fields = queryFields.join(", ")
        const queryJoined = `INSERT INTO orders (${fields}) VALUES (${values}) `
        // const res:QueryResult = await dbConnect.query(`INSERT INTO dishes (dish_name, available, price, ingredients) VALUES ($1, $2, $3, $4)`, [dish_name, available, price, ingredients])
        const res:QueryResult = await dbConnect.query(queryJoined, valuesField)
        console.log(res);
        return res
    }
    public async update(queryFields:Array<string>,valuesField:Array<string|number|boolean|Array<string>>) {
        const dbConnect:Pool = await getConection()
        const fields = queryFields.join(", ")
        const queryJoined:string = `UPDATE orders SET ${fields} WHERE order_id = $${valuesField.length} RETURNING *;`
        // const res:QueryResult = await dbConnect.query(`UPDATE dishes SET dish_name = $1, available = $2, price = $3, ingredients = $4 WHERE dish_id = $5`, [dish_name, price, available, ingredients,dishID])
        const res:QueryResult = await dbConnect.query(queryJoined, valuesField)
        console.log(res)
        return res.rowCount
    }
    public async delete(id: string) {
        const dbConnect:Pool = await getConection()
        const res:QueryResult = await dbConnect.query('DELETE FROM orders WHERE order_id = $1 RETURNING *', [Number.parseInt(id)])
        console.log(res)
        return res.rowCount
    }
}

export { orderService }