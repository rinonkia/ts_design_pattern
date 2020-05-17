import Display from "./Display";
import Speaker from "./Speaker";
import Product from "./Product";

export default abstract class Factory {
    abstract createDisplay(width: number, height: number): Display;
    abstract createSpeaker(minVolume: number, maxVolume: number): Speaker;
    abstract createProduct(name: string): Product;
}