import { uuid } from "drizzle-orm/pg-core";

class dishesService {
    public name: string;
    public price: number;
    public constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    public async findOne(id: string) {
        console.log(this.name, this.price);
    }
    public async find() {
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