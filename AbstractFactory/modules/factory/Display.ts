import Component from "./Component";

export default abstract class Display extends Component {
    protected width: number;
    protected height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
}