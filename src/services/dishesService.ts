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
        const res = await dbConnect.query('SELECT * FROM public.users')
        console.log(res);
    }
    public async find() {
        const dbConnect = await getConection()
        const res = await dbConnect.query('SELECT * FROM public.users')
        return res.rows;
        console.log("toda la lista");
    }
    //este data viene de la ruta
    public async create(data: any) {
        console.log(this.name, this.price);
    }
    public async update({ name, price }: { name: string, price: string }) {
        console.log(this.name, this.price);
    }
    public async delete(id: string) {
        console.log(this.name, this.price);
    }
}

export { dishesService }