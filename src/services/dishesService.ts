import { uuid } from "drizzle-orm/pg-core";
import { Pool, QueryResult } from "pg";
import getConection from '../libs/postgres';

class dishesService {
    public name?: string;
    public price?: number;
    public constructor() { }
    // public constructor(dish_name: string, price: number) {
    //     this.name = name;
    //     this.price = price;
    // }
    public async findOne(id: string) {
        const dbConnect:Pool = await getConection()
        const res:QueryResult = await dbConnect.query('SELECT * FROM dishes WHERE dish_id = $1', [id])
        // console.log(res.rows);
        return res.rows
    }
    public async find() {
        const dbConnect:Pool = await getConection()
        const res:QueryResult = await dbConnect.query('SELECT * FROM dishes')
        return res.rows;
    }
    //este data viene de la ruta
    public async create({ dish_name, price, available, ingredients }: { dish_name: string, price: number, available: boolean, ingredients: string }) {
        const dbConnect:Pool = await getConection()
        const res:QueryResult = await dbConnect.query(`INSERT INTO dishes (dish_name, available, price, ingredients) VALUES ($1, $2, $3, $4)`, [dish_name, available, price, ingredients])
        console.log(res);
        return res
    }
    public async update(queryFields:Array<string>,valuesField:Array<string|number|boolean|Array<string>>) {
        const dbConnect:Pool = await getConection()
        // const queryJoined:string = queryFields.join(', ')
        const queryJoined:string = `UPDATE dishes SET ${queryFields.join(', ')} WHERE dish_id = $${queryFields.length + 1} RETURNING *;`
        console.log(queryJoined)
        console.log(valuesField)
        // const res:QueryResult = await dbConnect.query(`UPDATE dishes SET dish_name = $1, available = $2, price = $3, ingredients = $4 WHERE dish_id = $5`, [dish_name, price, available, ingredients,dishID])
        const res:QueryResult = await dbConnect.query(queryJoined, valuesField)
        console.log(res)
        return res
    }
    public async delete(id: string) {
        const dbConnect:Pool = await getConection()
        const res:QueryResult = await dbConnect.query('DELETE FROM dishes WHERE dish_id = $1', [Number.parseInt(id)])
        console.log(res)
        return res.rowCount
    }
}

export { dishesService }