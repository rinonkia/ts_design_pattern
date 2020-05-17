import Product from "../factory/Product";

export default class TabletProduct extends Product {
    constructor(name: string) {
        super(name);
    }

    check(): void {
        Object.keys(this.components).forEach((key) => {
            console.log(key);
            console.log(this.components[key].check());
        });
        console.log('名称: ' + this.name);
    }
}