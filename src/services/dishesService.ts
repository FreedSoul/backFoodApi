import { uuid } from "drizzle-orm/pg-core";
import getConection from '../libs/postgres';

class dishesService {
    public name?: string;
    public price?: number;
    public constructor() {}
    // public constructor(name: string, price: number) {
    //     this.name = name;
    //     this.price = price;
    // }
    public async findOne(id: string) {
        const dbConnect = await getConection()
        const res = await dbConnect.query('SELECT * FROM dishes WHERE dish_id = $1',[id])
        // console.log(res.rows);
        return res.rows
    }
    public async find() {
        const dbConnect = await getConection()
        const res = await dbConnect.query('SELECT * FROM dishes')
        return res.rows;
    }
    //este data viene de la ruta
    public async create(data: any) {
        const dbConnect = await getConection()
        console.log(this.name, this.price);
    }
    public async update({ name, price }: { name: string, price: string }) {
        const dbConnect = await getConection()
        const res = await dbConnect.query('DELETE $1 FROM Dishes')
        console.log(this.name, this.price);
    }
    public async delete(id: string) {
        const dbConnect = await getConection()
        const res = await dbConnect.query('DELETE $1 FROM Dishes',[id])
        console.log(res)
    }
}

export { dishesService }