import Component from "./Component";

export default abstract class Speaker extends Component {
    protected minVolume: number;
    protected maxVolume: number;

    constructor(minVolume: number, maxVolume: number) {
        super();
        this.minVolume = minVolume;
        this.maxVolume = maxVolume;
    }
}