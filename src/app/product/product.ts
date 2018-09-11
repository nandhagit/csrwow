export class Product {

    name: string;
    description: string;
    code: string;
    price: number;
    size: string;
    id: number;


    constructor(name: string, description: string, code: string,
        price: number, size: string, id: number) {
        this.name = name;
        this.description = description;
        this.code = code;
        this.price = price;
        this.size = size;
        this.id=id;
    }
}
