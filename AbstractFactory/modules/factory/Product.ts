import Component from "./Component";

export default abstract class Product {
    protected name: string;
    protected components: { [key: string]: Component; };

    constructor(name: string) {
        this.name = name;
        this.components = {};
    }

    equipComponent(name: string, component: Component): void {
        this.components[name] = component;
    }
}