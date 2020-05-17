import Display from "../factory/Display";

export default class TabletDisplay extends Display {
    constructor(width: number, height: number) {
        super(width, height);
    }

    check(): void {
        console.log('高さ: ' + this.width + ', 幅: ' + this.height);
    }
}