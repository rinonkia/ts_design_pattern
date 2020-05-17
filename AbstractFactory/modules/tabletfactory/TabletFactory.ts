import Factory from "../factory/Factory";
import TabletDisplay from "./TabletDisplay";
import TabletSpeaker from "./TabletSpeaker";
import TabletProduct from "./TabletProduct";

export default class TabletFactory extends Factory {
    createDisplay(width: number, height: number): TabletDisplay {
        return new TabletDisplay(width, height);
    }
    createSpeaker(minVolume: number, maxVolume: number): TabletSpeaker {
        return new TabletSpeaker(minVolume, maxVolume);
    }
    createProduct(name: string): TabletProduct {
        return new TabletProduct(name);
    }
}
