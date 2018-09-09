export class Product {

    name: string;
    description: string;
    code: string;
    price: number;
    size: string;


    constructor(name: string, description: string, code: string,
        price: number, size: string, ) {
        this.name = name;
        this.description = description;
        this.code = code;
        this.price = price;
        this.size = size;
    }
}
